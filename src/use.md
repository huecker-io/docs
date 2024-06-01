# Использование {#usage}

> [!WARNING] huecker.io находится в стадии разработки и не гарантирует 100% доступности и безопасности.

## 1. Новый безопасный способ (SOCKS5) {#socks5}

**Этот способ исключает возможность перехвата трафика и подмены образов.**

> [!NOTE] Ограничения
> Прокси huecker.io подключается только к `registry-1.docker.io` и другим необходимым для работы `docker.io` серверам.
> Для обращения к другим ресурсам, например `ghcr.io`, укажите их адреса в параметре `no-proxy`.

При использовании SOCKS5 прокси, вы получаете данные от оригинальных источников **без изменений**.
Вдобавок, выполняется проверка SSL сертификатов, что сводит вероятность атаки **практически к нулю**.

Пример конфига ([находится здесь](#config-path)):

```json
{
  "proxies": {
    "http-proxy": "socks5://socks5.huecker.io:1080",
    "https-proxy": "socks5://socks5.huecker.io:1080",
    "no-proxy": "ghcr.io,*.test.example.com,.example.org,127.0.0.0/8"
  }
}
```

> IP: `95.217.168.125:1080`  
> Рекомендуем использовать доменное имя, постоянство IP не гарантируется.

Перезапуск Docker (systemd):

```bash
$ systemctl restart docker
```

## 2. Зеркало docker.io {#mirror}

> [!CAUTION] Действуйте разумно!
> Используя любые зеркала, вы подвергаете себя риску безопасности.
> Третьи лица могут подменять образы и перехватывать весь трафик, включая логины и пароли.

Конфиг ([находится здесь](#config-path)):

```json
{
  "registry-mirrors": ["https://huecker.io"]
}
```

Перезапуск Docker (systemd):

```bash
$ systemctl restart docker
```

Теперь при попытке загрузки образа, докер будет сначала пытаться использовать прокси

[Другие зеркала](/others)

## 3. Явное указание адреса {#explicit}

```bash
$ docker pull huecker.io/library/alpine:latest
$ docker pull huecker.io/n8nio/n8n:latest
```

## Путь к конфигурации Docker {#config-path}

| Операционная система | Путь к файлу конфигурации                    |
| -------------------- | -------------------------------------------- |
| Linux, regular setup | /etc/docker/daemon.json                      |
| Linux, rootless mode | ~/.config/docker/daemon.json                 |
| macOS                | ~/.docker/daemon.json                        |
| OrbStack             | Settings -> Docker -> Advanced engine config |
| Windows              | C:\ProgramData\docker\config\daemon.json     |
| Docker Desktop       | Preferences -> Docker engine                 |
