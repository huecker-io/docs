# How to Use {#usage}

## Docker Hub Unbanned {#unbanned}

**We won! Docker Hub is available again in Russia.**

Support for huecker.io will continue until **June 14, 2024, 15:00 UTC**.
After that time, we will begin shutting down the circumvention services. Documentation will remain available for historical purposes.

It has been an incredible experience, and we thank everyone who supported us during the short lifespan of the project.

> _so long and thanks for all the fish_

## 1. SOCKS5 Proxy {#socks5}

<!-- thanks @dmitry_pchelintsev -->

> [!IMPORTANT] Works only with Docker Engine 23.0 and above

> [!WARNING] Limitations
> Proxy connects only to `registry-1.docker.io` and other servers necessary for Docker Hub to work.
> To access other resources, such as `ghcr.io`, specify their addresses in the `no-proxy` parameter.

**This method eliminates the possibility of traffic interception and image tampering.**

By using a SOCKS5 proxy, you receive data from the original sources **without any modifications**.
Additionally, SSL certificate verification is performed, reducing the risk **to virtually zero**.

**Config example ([located here](#config-path))**

```json
{
  "proxies": {
    "https-proxy": "socks5://proxy.huecker.io:443",
    "no-proxy": "huecker.io,ghcr.io,*.test.example.com,.example.org,127.0.0.0/8"
  }
}
```

<!-- thanks https://github.com/Seokky -->
<!-- https://github.com/huecker-io/huecker/issues/4 -->

> If you used `registr>y-mirrors`, remove it from the config.

<!-- thanks @krant0r for 443 -->

> IP: `95.217.168.125`, ports: `1080`, `443`  
> We recommend using a domain name, the IP address is not guaranteed to be constant.

**Restart Docker (systemd)**

```bash
$ systemctl restart docker
```

## 2. As a mirror of docker.io {#mirror}

> [!CAUTION] Act wisely!
> By using any mirrors, you expose yourself to security risks.
> Third parties can intercept and modify all traffic, including logins and passwords.

**Config ([located here](#config-path))**

```json
{
  "registry-mirrors": ["https://huecker.io"]
}
```

**Restart Docker (systemd)**

```bash
$ systemctl restart docker
```

Now, when attempting to pull an image, Docker will first try to use the specified mirrors.

[Other Mirrors](others)

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
