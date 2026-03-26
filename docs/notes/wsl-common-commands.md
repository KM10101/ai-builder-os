# WSL 常用命令速查

## 这份笔记的目标

这份笔记用于整理日常使用 WSL 时最常见的一批命令，方便后续快速查阅。

重点不是覆盖全部高级特性，而是优先收录：

- 安装与发行版管理
- 启停与版本检查
- 导入导出与迁移
- 网络、代理、GUI 排查
- 文件挂载与隔离
- SSH 与常用连接场景

## 1. 基本信息查看

查看 WSL 版本信息：

```powershell
wsl --version
```

查看已安装发行版与运行状态：

```powershell
wsl -l -v
```

查看可在线安装的发行版：

```powershell
wsl --list --online
```

查看某个发行版的详细帮助：

```powershell
wsl --help
```

## 2. 安装与更新

安装 WSL 组件，但暂时不安装发行版：

```powershell
wsl --install --no-distribution
```

安装指定发行版：

```powershell
wsl --install -d Ubuntu
```

将发行版安装到指定目录：

```powershell
wsl --install -d Ubuntu --location E:\wsls\Ubuntu
```

通过 web 下载方式安装发行版：

```powershell
wsl --install -d Ubuntu --location E:\wsls\Ubuntu --web-download
```

更新 WSL：

```powershell
wsl --update
```

通过 web 下载更新 WSL：

```powershell
wsl --update --web-download
```

## 3. 启动、关闭与进入发行版

启动默认发行版：

```powershell
wsl
```

进入指定发行版：

```powershell
wsl -d Ubuntu
```

以指定用户进入发行版：

```powershell
wsl -d Ubuntu -u root
```

关闭所有 WSL 实例：

```powershell
wsl --shutdown
```

终止某个发行版：

```powershell
wsl --terminate Ubuntu
```

设置默认发行版：

```powershell
wsl --set-default Ubuntu
```

将发行版切换到 WSL 2：

```powershell
wsl --set-version Ubuntu 2
```

## 4. 导出、导入与迁移

导出发行版：

```powershell
wsl --export Ubuntu E:\wsls\backup\ubuntu.tar
```

注销发行版：

```powershell
wsl --unregister Ubuntu
```

将发行版导入到指定目录：

```powershell
wsl --import Ubuntu E:\wsls\Ubuntu E:\wsls\backup\ubuntu.tar --version 2
```

说明：

- `--unregister` 会删除该发行版的注册信息。
- 迁移前先 `--export` 备份，不要直接操作原发行版。

## 5. 常用 Linux 基础环境安装

更新软件源：

```bash
sudo apt update
```

安装常用开发包：

```bash
sudo apt install -y \
  build-essential \
  git \
  curl \
  wget \
  unzip \
  zip \
  ca-certificates \
  ripgrep \
  fd-find \
  jq \
  tree \
  htop \
  vim \
  nano \
  python3 \
  python3-pip \
  python3-venv \
  pipx
```

## 6. Node.js / npm

通过 `nvm` 安装 Node.js：

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
nvm alias default lts/*
```

检查 Node 和 npm 路径：

```bash
which node
which npm
node -v
npm -v
```

如果提示 `prefix` 与 `nvm` 冲突：

```bash
nvm use --delete-prefix "$(node -v)" --silent
```

## 7. 代理与网络

临时设置 HTTP 代理：

```bash
export http_proxy=http://127.0.0.1:7890
export https_proxy=http://127.0.0.1:7890
export HTTP_PROXY=http://127.0.0.1:7890
export HTTPS_PROXY=http://127.0.0.1:7890
```

查看当前代理环境变量：

```bash
env | grep -i proxy
```

查看 WSL 默认网关：

```bash
ip route show
```

检查网络连通性：

```bash
curl -I https://github.com
```

查看 DNS 配置：

```bash
cat /etc/resolv.conf
```

## 8. GUI / WSLg

查看 GUI 相关环境变量：

```bash
echo $DISPLAY
echo $WAYLAND_DISPLAY
echo $XDG_RUNTIME_DIR
```

查看 WSLg 版本：

```bash
cat /mnt/wslg/versions.txt
```

查看 WSLg 日志：

```bash
tail -n 100 /mnt/wslg/weston.log
```

安装测试用 GUI 应用：

```bash
sudo apt install -y x11-apps gnome-text-editor nautilus
```

测试 GUI 是否正常：

```bash
xcalc
gnome-text-editor
nautilus
```

## 9. 中文支持

安装常用中文语言与字体支持：

```bash
sudo apt install -y \
  locales \
  fonts-noto-cjk \
  fonts-noto-color-emoji \
  language-pack-zh-hans \
  language-pack-gnome-zh-hans
```

生成并设置 locale：

```bash
sudo locale-gen zh_CN.UTF-8 en_US.UTF-8
sudo update-locale LANG=zh_CN.UTF-8
fc-cache -fv
```

查看当前 locale：

```bash
locale
```

## 10. 宿主机目录挂载与隔离

查看当前挂载：

```bash
mount
```

查看是否存在 Windows 盘符挂载：

```bash
mount | grep drvfs
ls /mnt
```

临时卸载某个盘：

```bash
cd ~
sudo umount /mnt/c
```

关闭自动挂载与互操作：

编辑 `/etc/wsl.conf`：

```ini
[automount]
enabled=false
mountFsTab=false

[interop]
enabled=false
appendWindowsPath=false
```

修改后在 Windows 执行：

```powershell
wsl --shutdown
```

说明：

- `enabled=false` 只是不自动挂载。
- 如果用户有足够权限，仍然可以手动挂载 Windows 盘。
- 如果需要更强隔离，应使用完整虚拟机而不是依赖 WSL。

## 11. SSH

安装 OpenSSH Server：

```bash
sudo apt update
sudo apt install -y openssh-server
```

查看 SSH 状态：

```bash
sudo service ssh status
```

启动 SSH：

```bash
sudo service ssh start
```

查看 22 端口是否监听：

```bash
ss -tlnp | grep ':22'
```

如果启用了 systemd，也可以这样控制：

```bash
sudo systemctl enable --now ssh
sudo systemctl status ssh
```

## 12. 常用配置文件

用户级 WSL 配置：

```text
%UserProfile%\.wslconfig
```

发行版级 WSL 配置：

```text
/etc/wsl.conf
```

常见 `.wslconfig` 示例：

```ini
[wsl2]
networkingMode=mirrored
autoProxy=true
dnsTunneling=true
```

常见 `/etc/wsl.conf` 示例：

```ini
[boot]
systemd=true

[automount]
enabled=false
mountFsTab=false

[interop]
enabled=false
appendWindowsPath=false
```

## 13. 排查时优先记住的几条命令

```powershell
wsl --version
wsl -l -v
wsl --shutdown
wsl --update
```

```bash
locale
env | grep -i proxy
mount | grep drvfs
cat /mnt/wslg/versions.txt
tail -n 100 /mnt/wslg/weston.log
ss -tlnp | grep ':22'
```

## 14. 当前阶段最常用的操作组合

重新加载 WSL 配置：

```powershell
wsl --shutdown
wsl
```

进入 Ubuntu 并开始工作：

```powershell
wsl -d Ubuntu
```

通过 SSH 从 Windows 工具连接 WSL：

```text
Host: 127.0.0.1
Port: 22
User: 你的 WSL 用户名
```

安装 `Claude Code` 与 `Codex`：

```bash
npm install -g @anthropic-ai/claude-code
npm install -g @openai/codex
```
