#  压缩图片桌面应用 imagemin-electron

基于`electron`制作一个`node`压缩图片的桌面应用

下载地址：[https://github.com/zenoslin/imagemin-electron/releases](https://github.com/zenoslin/imagemin-electron/releases)

项目源码 Github：[https://github.com/zenoslin/imagemin-electron](https://github.com/zenoslin/imagemin-electron)

## 准备工作

我们来整理一下我们需要做什么：

-  压缩图片模块
- 获取文件路径
- 桌面应用生成

## 压缩图片

我们需要  使用`imagemin`这个库来压缩图片，这里我们把这个库封装成压缩模块。

```- js
const imagemin = require('imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const imageminGifsicle = require('imagemin-gifsicle')

async function compass(input, output, opts, callback) {
    let log = await imageminCompass(input, output, opts)
    callback(log)
}

async function imageminCompass(input, output = 'temp', opts = {}) {
    input = (typeof input == 'string') ? [input] : input;
    return await imagemin(input, output, {
            use: [
                imageminMozjpeg(opts),
                imageminPngquant(opts),
                imageminGifsicle({
                    optimizationLevel:3
                })
            ]
        })
        .then(file => {
            return {
                status: true,
                data: file
            };
        })
        .catch(e => {
            console.log(e);
            return {
                status: false,
                error: e.toString()
            }
        });
}

module.exports = {
    compass: compass
};
```

##  获取文件路径

在我的理解中，electron 用的是一个 mini 版的 chrome 浏览器，然后帮我们实现了浏览器跟系统(win & mac)交互的的许多 api 接口。

我们可以通过正常写网页的方式进行开发，当需要进行与系统交互的操作时，我们只需要在我们网页中的 js 进程（这里应该叫做这个桌面应用的渲染进程）抛出一个事件，然后在 electron 的主进程进行监听，收到事件后调用相应的 api 接口，结果再反过来用事件的方式抛给渲染进程。

electron 的安装和学习可以上官网[https://electronjs.org/](https://electronjs.org/)进行学习。

ps：这里有一个 electron 的坑说一下，electron 和 jquery 存在冲突，所以直接用`script`标签引入会失败，在 `windows`对象中找不到`jQuery`对象。这里我们可以加这么一句解决。

```-html
<script src="./src/jquery.min.js"></script>
<script>if (typeof module === 'object') {window.jQuery = window.$ = module.exports;};</script>
```

回到正题，首先我们在`index.html`中增加一个按钮来打开系统的路径选择器。

```-html
<button id="input-btn">选择路径</button>
```

在  渲染进程`renderer.js` 中，监听按钮的点击，以及监听主线程返回的事件。

```-js
const {ipcRenderer} = require('electron')
const inputBtn = document.getElementById('input-btn')

inputBtn.addEventListener('click', (event) => {
    console.log('点击输入按钮')
    ipcRenderer.send('open-file-dialog-input')
})

ipcRenderer.on('input-path', (event, path) => {
    console.log(`收到完成信息 ${path}`)
    _inputPath = path
    inputPath.value = `${path}`
})
```

在主进程`main.js`中，监听渲染进程抛出的事件，并调用 api 接口后放回结果。

```-js
ipcMain.on('open-file-dialog-input', (event) => {
    dialog.showOpenDialog({
        properties: ['openFile', 'openDirectory']
    }, (files) => {
        if (files) {
            console.log('发出完成信息')
            event.sender.send('input-path', files)
        }
    })
})
```

这样我们完成了使用系统 api 接口选择路径的功能。但其实我们实际的使用场景中路径选择器的方式并不是特别的方便，所以我们实现另一个功能 。

拖动将文件或者文件夹拖入网页中，获取到对应的路径。这里使用了`js`+`div`实现了这个功能。

index.html

```- html
<!--可拖入区域-->
<div id="holder" class="jumbotron holder">
</div>
<style>
        /* 拖拽的区域样式 */
        .holder {
            min-height: 200px;
            background: #eee;
            margin: 2em;
            padding: 1em;
            border: 0px dotted #eee;
            border-radius: 10px;
            transition: .3s all ease-in-out;
        }

        /* 拖拽时用jQuery为其添加边框样式的class */
        .holder-ondrag {
            border: 20px dotted #d45700;
        }
</style>
```

renderer.js

```-js
const holder = document.getElementById("holder")

holder.ondragenter = holder.ondragover = (event) => {
    event.preventDefault()
    holder.className = "jumbotron holder-ondrag"
}

holder.ondragleave = (event) => {
    event.preventDefault()
    holder.className = "jumbotron holder"
}

holder.ondrop = (event) => {
    // 调用 preventDefault() 来避免浏览器对数据的默认处理
    //（drop 事件的默认行为是以链接形式打开
    event.preventDefault()
    holder.className = "jumbotron holder"
    var file = event.dataTransfer.files[0]
    _inputPath = inputPath.value = file.path
}
```

将我们  获取到的文件路径传入  前面编写的压缩文件模块，这样我们就可以完成了图片的压缩。

## 桌面应用生成

最后，我们利用[electron-packager](https://github.com/electron-userland/electron-packager)完成对`electron`桌面应用的打包。

```-sh
//mac
electron-packager . --out=out --platform=mas --arch=x64
//win
electron-packager . --platform=win32 --arch=x64
```

ps：在非 Windows 主机平台上进行打包，需要安装 Wine 1.6 或更高版本
