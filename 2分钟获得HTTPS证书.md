# 2分钟获得HTTPS证书

我们将利用[Certbot](https://certbot.eff.org/)来获取Let's Encrypt的免费HTTPS证书。

这里是使用的是`CentOS 6` + `ngibx`，更多的系统的安装方法可以到[Certbot官网](https://certbot.eff.org/)查询，这里就不一一赘述。

## 安装Certbot

因为`CentOS 6`没有`Certbot`的打包版本，所以我们需要用`certbot-auto`脚本来获取。

```
wget https://dl.eff.org/certbot-auto
chmod a + x certbot-auto
```

## 运行Certbot

现在我们就可以直接运行`Certbot`来获取我们需要的`HTTPS`证书了。

这里要注意一点`Certbot`默认的`nginx.conf`的路径是`/etc/nginx/nginx.conf`。如果你的conf文件是在该路径下则直接运行`Certbot`即可。

```
$ sudo ./certbot-auto --nginx
```

如果你的`conf`文件在其他路径下，则需要使用`nginx-server-root`参数指定`conf`文件的路径。

```
$ sudo ./certbot-auto --nginx  --nginx-server-root=/usr/local/nginx/conf
```

接下来又到了我们最喜欢的无脑yes下一步环节了。（你要认真看问题也是可以滴）

选择了激活的站点和重定向之后，它就会帮我修改`nginx.conf`文件并开心的恭喜我成功啦。

HTTPS证书相关的文件存放在了`/etc/letsencrypt/`里。

这时我们打开我们的站点，发现它已经变成了金色传说的`https`了。