# How to Use

## 1. Via docker config (as a mirror of docker.io)

Located at:

| Operating System     | Path to configuration file               |
|----------------------|------------------------------------------|
| Linux, regular setup | /etc/docker/daemon.json                  |
| Linux, rootless mode | ~/.config/docker/daemon.json             |
| Windows              | C:\ProgramData\docker\config\daemon.json |

Config:

```json
{ 
  "registry-mirrors": ["https:\/\/huecker.io"] 
}
```

Restart docker (systemd):

```bash
$ systemctl restart docker
```

Now when trying to download an image, docker will try to use the proxy first


## 2. Explicitly specifying the address

```bash
$ docker pull huecker.io/library/alpine:latest
```
