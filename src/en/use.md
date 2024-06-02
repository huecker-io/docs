# How to Use {#usage}

> [!WARNING] huecker.io is in the development stage and does not guarantee 100% availability and security.

## 1. New Secure Method (SOCKS5) <Badge type="warning" text="experiment" /> {#socks5}

**This method eliminates the possibility of traffic interception and image tampering.**

> [!NOTE] Limitations
> Proxy connects only to `registry-1.docker.io` and other servers necessary for Docker Hub to work.
> To access other resources, such as `ghcr.io`, specify their addresses in the `no-proxy` parameter.

By using a SOCKS5 proxy, you receive data from the original sources **without any modifications**.
Additionally, SSL certificate verification is performed, reducing the risk **to virtually zero**.

Config example ([located here](#config-path)):

```json
{
  "proxies": {
    "https-proxy": "socks5://proxy.huecker.io:443",
    "no-proxy": "ghcr.io,*.test.example.com,.example.org,127.0.0.0/8"
  }
}
```

> IP: `95.217.168.125`, ports: `1080`, `443`  
> We recommend using a domain name, the IP address is not guaranteed to be constant.

Restart Docker (systemd):

```bash
$ systemctl restart docker
```

## 2. As a mirror of docker.io {#mirror}

> [!CAUTION] Act wisely!
> By using any mirrors, you expose yourself to security risks.
> Third parties can intercept and modify all traffic, including logins and passwords.

Config ([located here](#config-path)):

```json
{
  "registry-mirrors": ["https://huecker.io"]
}
```

Restart Docker (systemd):

```bash
$ systemctl restart docker
```

Now when trying to download an image, docker will try to use the proxy first

[Other Mirrors](/others)

## 3. Explicitly specifying the address {#explicit}

```bash
$ docker pull huecker.io/library/alpine:latest
$ docker pull huecker.io/n8nio/n8n:latest
```

## Path to Docker Configuration {#config-path}

| Operating System     | Path to configuration file                   |
| -------------------- | -------------------------------------------- |
| Linux, regular setup | /etc/docker/daemon.json                      |
| Linux, rootless mode | ~/.config/docker/daemon.json                 |
| macOS                | ~/.docker/daemon.json                        |
| OrbStack             | Settings -> Docker -> Advanced engine config |
| Windows              | C:\ProgramData\docker\config\daemon.json     |
| Docker Desktop       | Preferences -> Docker engine                 |
