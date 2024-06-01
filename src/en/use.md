# How to Use {#usage}

> [!CAUTION] Act wisely!
> By using any proxies, you expose yourself to security risks.
> Third parties can intercept and modify all traffic, including logins and passwords.

> [!WARNING] huecker.io is in the development stage and does not guarantee 100% availability and security.

## 1. Via docker config (as a mirror of docker.io) {#config}

Located at:

| Operating System     | Path to configuration file                   |
| -------------------- | -------------------------------------------- |
| Linux, regular setup | /etc/docker/daemon.json                      |
| Linux, rootless mode | ~/.config/docker/daemon.json                 |
| macOS                | ~/.docker/daemon.json                        |
| OrbStack             | Settings -> Docker -> Advanced engine config |
| Windows              | C:\ProgramData\docker\config\daemon.json     |
| Docker Desktop       | Preferences -> Docker engine                 |

Config:

```json
{
  "registry-mirrors": ["https://huecker.io"]
}
```

Restart docker (systemd):

```bash
$ systemctl restart docker
```

Now when trying to download an image, docker will try to use the proxy first

## 2. Explicitly specifying the address {#explicit}

```bash
$ docker pull huecker.io/library/alpine:latest
$ docker pull huecker.io/n8nio/n8n:latest
```
