# Использование {#usage}

## Docker Hub разблокирован {#unbanned}

**Мы победили! Docker Hub снова доступен в России.**

Поддержка huecker.io будет продолжаться до **14 июня 2024 года 15:00 UTC**.
После этого времени, мы начнём отключать сервисы обхода блокировки. Документация останется доступной в исторических целях.

Это был невероятный опыт, и мы благодарим всех, кто поддерживал нас в течение короткого срока работы проекта.

> _so long and thanks for all the fish_

## 1. SOCKS5 прокси {#socks5}

<!-- thanks @dmitry_pchelintsev -->

> [!IMPORTANT] Работает только с Docker Engine 23.0 и выше

> [!WARNING] Ограничения
> Прокси подключается только к `registry-1.docker.io` и другим необходимым для работы Docker Hub серверам.
> Для обращения к другим ресурсам, например `ghcr.io`, укажите их адреса в параметре `no-proxy`.

**Этот способ исключает возможность перехвата трафика и подмены образов.**

При использовании SOCKS5 прокси, вы получаете данные от оригинальных источников **без изменений**.
Вдобавок, выполняется проверка SSL сертификатов, что сводит вероятность атаки **практически к нулю**.

**Пример конфига ([находится здесь](#config-path))**

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

> Если вы использовали `registry-mirrors`, удалите параметр из конфига.

<!-- thanks @krant0r for 443 -->

> IP: `95.217.168.125`, порты: `1080`, `443`  
> Рекомендуем использовать доменное имя, постоянство IP не гарантируется.

**Перезапуск Docker (systemd)**

```bash
$ systemctl restart docker
```

## 2. Зеркало docker.io {#mirror}

> [!CAUTION] Действуйте разумно!
> Используя любые зеркала, вы подвергаете себя риску безопасности.
> Третьи лица могут подменять образы и перехватывать весь трафик, включая логины и пароли.

**Конфиг ([находится здесь](#config-path))**

```json
{
  "registry-mirrors": ["https://huecker.io"]
}
```

**Перезапуск Docker (systemd)**

```bash
$ systemctl restart docker
```

Теперь при попытке загрузки образа, Docker сначала будет пробовать использовать указанные зеркала.

[Другие зеркала](others)

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
