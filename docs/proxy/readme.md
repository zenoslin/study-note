# 代理命令行网络

科学上网工具是无法代理命令行网络的，所以像`npm` , `git`, `wget` 等工具无法享受到快速上网。

## npm自带代理

```bash
npm config set proxy=http://127.0.0.1:7890
# 取消代理
npm config delete proxy
```

## 使用proxychains4代理

可以代理 `wget` 和 `git` ，无法代理 `npm` 和 `curl`

### 安装

```bash
# 方法1
brew install proxychains-ng

# 方法2
git clone https://github.com/rofl0r/proxychains-ng.git
cd proxychains-ng
./configure
make && make install
```

### 修改配置

```bash
vim /usr/local/etc/proxychains.conf
# 底部
socks5 127.0.0.1 7891
```

### 使用

```bash
proxychains4 wget <url>
proxychains4 git clone <url>
```

## 全局命令行代理

### 修改用户全局配置文件

```bash
# 打开配置
vim ~/.zshrc
# 在末尾加上
# proxy
alias proxy='export all_proxy=socks5://127.0.0.1:7891'
alias unproxy='unset all_proxy'
# 配置生效
source ~/.zshrc
```

### 使用

```bash
#开启代理
proxy
#关闭代理
unproxy
```

