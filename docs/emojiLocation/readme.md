# 有趣！把 Emoji 动画加到你的地址栏和标题里

今天看到在掘金看到一篇同样是非常有趣的文章[用 JavaScript 和 Emoji 做地址栏动画](https://juejin.im/post/5c49b822f265da6142743a87)

我先在迫不及待想  把他加到我的博客里！

Github 代码地址：[https://github.com/zenoslin/javascript-demo/tree/master/js/Emoji-in-bar](https://github.com/zenoslin/javascript-demo/tree/master/js/Emoji-in-bar)

## 单个 Emoji 动画

首先，想让我们做一个简单的 Emoji 动画.

```js
let EmojiArr = ['🌑', '🌒', '🌓', '🌔', '🌝', '🌖', '🌗', '🌘'],
    str = ""
function loop() {
    str = EmojiArr[Math.floor((Date.now()/100)%f.length)];
    setTimeout(loop, 50);
}
loop();
```

## 多个 Emoji 动画

我想要一堆月亮老公公轮着播，这样才炫酷。

```js
let emojiArr = ['🌑', '🌘', '🌗', '🌖', '🌝', '🌔', '🌓', '🌒'],
    stateArr = [0, 0, 0, 0],
    m = 0,
    str = ""
function loop() {
    let s = '',
        x = 0
    if (!m) {
        while (stateArr[x] == 4) { //满月时
            x++
        }
        if (x >= stateArr.length) {
            m = 1
        }else {
            stateArr[x]++
        }
    } else {
        while (stateArr[x] == 0) {
            x++
        }
        if (x >= stateArr.length) {
            m = 0
        }else {
            stateArr[x]++
            if (stateArr[x] == 8) { //全黑时
                stateArr[x] = 0
            }
        }
    }
    stateArr.forEach(function (n) {
        str += emojiArr[n]
    })
    setTimeout(loop, 50)
}
loop()
```

## 加入到地址栏和标题

接下来我们把这个动画加入到我们的地址栏和标题！

```js
let emojiArr = ['🌑', '🌘', '🌗', '🌖', '🌝', '🌔', '🌓', '🌒'],
    stateArr = [0, 0, 0, 0],
    m = 0,
    titleStr = document.title

function loop() {
    let s = '',
        x = 0
    if (!m) {
        while (stateArr[x] == 4) { //满月时
            x++
        }
        if (x >= stateArr.length) {
            m = 1
        } else {
            stateArr[x]++
        }
    } else {
        while (stateArr[x] == 0) {
            x++
        }
        if (x >= stateArr.length) {
            m = 0
        } else {
            stateArr[x]++
            if (stateArr[x] == 8) { //全黑时
                stateArr[x] = 0
            }
        }
    }
    stateArr.forEach(function (n) {
        s += emojiArr[n]
    })
    location.hash = s
    document.title = titleStr + s
    setTimeout(loop, 50)
}
window.addEventListener('load', function () {
    loop()
})
```

大功告成，让我看看骚气的地址栏和标题吧
