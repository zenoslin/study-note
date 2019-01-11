# IDEA设置

## 编译设置

新建一个`JavaScript Debug Comfigurations`，打开URL为`bin`目录下`index.html`.
再新建一个`External tool`在打开网页前执行。选择Laya编译器的`LayaJSMac`路径，传入

``` -sh
Arguments$ProjectFileDir$"\.actionScriptProperties;iflash=false;outlaya=true;chromerun=true;"
```

## svn设置

mac环境下使用idea的`svn`功能，因为`svn`的`https`在mac下有安全策略问题，所以需要把项目的`svn`地址加入`svn list`中

``` -sh
svn list  https://m23svn.mingchao.com/client/trunk
```

## http服务器

``` -sh
hs "" -p 8080 --cors *
```

or 工程更目录下打开终端给文件添加权限，之后可以双击`.command`文件打开`http`服务器

``` -sh
chmod +x startHttp.command
```

## SVN工具

`Cornerstonr`

## chrome跨域(使用http服务器之后不会出现)

我们要做的第一步，就是创建一个文件夹，这个文件夹是用来保存关闭安全策略后的用户信息的，名字可以随意取，位置也可以随意放创建一个文件夹`MyChromeDevUserData`
然后打开控制台，输入下面这段代码

``` -sh
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/linze/Documents/MyChromeDevUserData
```