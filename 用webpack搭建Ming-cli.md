# 用webpack搭建Ming-cli

因为从AS3语言向TS转型，选用webpack作为打包工具，可以省略LayaCMD的编译时间从而高效率的提高工作效率。

## 业务需求

- [x] TS支持
- [x] 分包
- [x] 断点调试
- [x] 重新加载

## 安装起步

`npm`（node package manager）是nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等），npm安装插件过程：从[http://registry.npmjs.org](http://registry.npmjs.org) 下载对应的插件包（该网站服务器位于国外，所以经常下载缓慢或出现异常）
这时候我们就需要用到`cnpm`。

`cnpm`是淘宝镜像服务器,来自官网：“这是一个完整`npmjs.org`镜像，你可以用此代替官方版本(只读)，同步频率目前为 10分钟 一次以保证尽量与官方服务同步。”

``` - sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

开始安装`webpack`，目前最新的`webpack`版本为`v4.27.1`,因为使用版本为`webpack 4+`，还需要安装CLI

``` - sh
npm install --save-dev webpack
npm install --save-dev webpack-cli
```

安装完成后，做些准备工作。打开`package.json`

- 删除入口` "main": "index.js"`
- 添加`"private": true`防止意外发布。
- 添加`"build": "webpack"`npm脚本快捷发布

``` - json
{
  "name": "Ming-cli",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "zenosLin",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^4.27.1",
    "webpack-cli": "^3.1.2"
  }
}
```

新建配置文件`webpack.config.js`

``` - javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

现在一个由`webpack`组成的脚手架工具雏形已经完成。
如果需要在js中打包`lodash`依赖，我们需要在本地安装library

``` -sh
npm install --save lodash
```

并在js文件中`import _ from 'lodash'`

## TypeScript支持

安装TypeScript编译器和loader：

``` - sh
npm install --save-dev typescript ts-loader
```

新建`tsconfig.json`文件

设置一个基本的配置，来支持 JSX，并将 TypeScript 编译到 ES5

``` - json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  }
}
```

修改`webpack.config.js`

将`webpack`的入口起点指定为`./index.ts`，然后通过`ts-loader`加载所有的`.ts`和`.tsx`文件，并且在当前目录输出一个`bundle.js`文件

``` - javascript
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

这样我们就完成了对TypeScript的支持。

## 分包

接下来利用`webpack`多入口的属性来实现分包功能。先模拟工作路径创建一些`ts`文件来尝试分包。

``` - en
  webpack-demo
  |- package.json
  |- tsconfig.json
  |- webpack.config.js
  |- /bin
    |- index.html
  |- /src
    |- main.ts
    |- com
       |- print.ts
  |- /minggame
    |- src
      |- minggame.ts
      |- com
        |- print.st
  |- /node_modules
```

`index.html`

``` -html
<!doctype html>
<html>

<head>
    <title>Ming-cli</title>
</head>

<body>
    <script src="./main.js"></script>
</body>

</html>
```

完成工作路径的搭建之后，我们开始修改`webpack.config.js`，将入口设置为多个入口文件，并将它们分开`js`打包，并以不同的名称命名。在这里我们为了查看打包后的`js`文件是否正确，需要设置`mode`为`development`解除代码压缩，最新的`webpack`是默认用`UglifyJsPlugin`压缩代码的。

``` - javascript
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts',
        minggame: "./minggame/src/minggame.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'bin')
    },
      mode: 'development'
};
```

## 断点调试

当`webpack`打包源代码时，可能会很难追踪到错误和警告在源代码中的原始位置。为了更容易地追踪错误和警告，`JavaScript`提供了 `source map`功能，将编译后的代码映射回原始源代码。

这时候我们需要修改`webpack.config.js`文件，使用`inline-source-map`选项。

``` - JavaScript
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts',
        minggame: "./minggame/src/minggame.ts"
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'bin')
    }
};
```

## 重新加载

每次都去重新编译刷新浏览器很影响我们的工作效率，所以`webpack-dev-server`为我们提供了一个简单的`web`服务器，并且能够实时重新加载(live reloading)。

``` - shell
npm install --save-dev webpack-dev-server
```

修改`webpack.config.js`设置入口

``` - JavaScript
const path = require('path');

module.exports = {
    entry: {
        main: './src/main.ts',
        minggame: "./minggame/src/minggame.ts"
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'bin')
    }
};
```

然后我们在`package.json`中增加一个脚本直接打开开发服务器。

``` - json
{
  "name": "Ming-cli",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --open",
    "build": "webpack"
  },
  "keywords": [],
  "author": "zenosLin",
  "license": "ISC",
  "devDependencies": {
    "ts-loader": "^5.3.1",
    "typescript": "^3.2.2",
    "webpack": "^4.27.1",
    "webpack-cli": "^3.1.2",
    "webpack-dev-server": "^3.1.14"
  }
}

```