# 携手Rollup与TS造轮子

## :book: ​导读

随着 `Typescript` 越来越流行，我也开始随大流使用 `ts` 把之前用造的轮子重新造一遍。我在打包工具上纠结了一会，是 `webpack` 还是 `gulp` 好呢。最终，我选择了 `Rollup.js` 。（没用过 `Rollup` 总是充满期待的）

那就敲定使用 `Rollup` + `Typescript` + `jest` 来造轮子。

我已经配置好的快速开始项目`rollup-starter-ts`：https://github.com/zenoslin/rollup-starter-ts

## Rollup.js

Rollup 是一个 JavaScript 模块打包器，正如他的官方文档所说：

> Rollup is a module bundler for JavaScript which compiles small pieces of code into something larger and more complex, such as a library or application. 

而我就会想，那他跟 `webpack` 有什么区别呢？阅读文档知道他并不支持代码拆分和时态的动态导入。  

所以如果需要构建的是网站应用，可能 `webpack` 会比 `Rollup` 更合适。到这里我就可以把它理解为它是一个更专注 `js` 库的打包工具。

### 开始动手

安装 `rollup`

```bash
$ npm install --save-dev rollup
```

安装完后，我们先写一下配置文件 `rollup.config.js`

```javascript
// ./`rollup.config.js`
export default {
  input: "./src/main.js",
  output: [
    {
      format: "cjs",
      file: "lib/bundle.cjs.js"
    },
    {
      format: "es",
      file: "lib/bundle.esm.js"
    }
  ]
};
```

让我们来尝试一下打包，新建一个 `js` 文件

```javascript
// ./src/main.js
let version = "0.0.1";

export default () => {
  return `this version is ${version}`;
};
```

在 `package.json` 中加入

```json
"scripts": {
    "build": "rollup -c"
 }
```

运行打包

```bash
$ npm run build

./src/main.js → lib/bundle.cjs.js, lib/bundle.esm.js...
created lib/bundle.cjs.js, lib/bundle.esm.js in 32ms
```

这时候我们就成功的吧main.js打包成了两个版本 `ES6` 和 `CommonJS `。

## Typescript

接下来我们要让 `rollup` 支持打包 `ts`

### 添加依赖

安装 `typescript`

```bash
$ npm install --save-dev rollup-plugin-typescript typescript tslib
```

安装 `sourcemaps`

```bash
$ npm install --save-dev rollup-plugin-sourcemaps
```

## 修改配置文件

在 `rollup` 的配置中添加插件

```javascript
// ./`rollup.config.js`

import typescript from "rollup-plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
  input: "./src/main.ts",
  plugins: [
    typescript({
      exclude: "node_modules/**",
      typescript: require("typescript")
    }),
    sourceMaps()
  ],
  output: [
    {
      format: "cjs",
      file: "lib/bundle.cjs.js",
      sourcemap: true
    },
    {
      format: "es",
      file: "lib/bundle.esm.js",
      sourcemap: true
    }
  ]
};
```

### 使用typescript

将 `main.js` 文件改为 `main.ts`

``` typescript
let version: string = "0.0.1";

export default (): string => {
  return `this version is ${version}`;
};
```

打包文件

``` bash
$ npm run build

./src/main.ts → lib/bundle.cjs.js, lib/bundle.esm.js...
created lib/bundle.cjs.js, lib/bundle.esm.js in 65ms
```

到这里我们就大功告成了，可以开始尽情地造轮子了！

但是既然是造轮子怎么能缺少测试框架呢。

## jest

我们需要添加 `jest` 并让它支持 `ts` 

### 添加依赖

安装 `jest` 和其 `ts` 依赖

```bash
$ npm install --save-dev jest ts-jest @types/jest
```

### 添加配置文件

添加 `jest` 的配置文件 `jest.config.js` 

```javascript
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node"
};
```

### 编写测试

添加 `test` 文件夹，并添加文件 `main.spec.ts`

```ty
import Main from "../src/main";

test("version is 0.0.1?", () => {
  const test = Main;
  expect(test()).toBe("this version is 0.0.1");
});
```

### 测试

在 `package.json` 中加入 `test` 脚本

```json
"scripts": {
    "build": "rollup -c",
    "test": "jest --no-cache"
}
```

执行测试

```bash
$ npm run test

PASS  test/main.spec.ts
√ version is 0.0.1? (6ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.739s
Ran all test suites.
```

nice！这下我们功德圆满可以尽情的造轮子了！