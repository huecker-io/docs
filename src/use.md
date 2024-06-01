# Использование {#usage}

> [!CAUTION] Действуйте разумно!
> Используя любые прокси, вы подвергаете себя риску безопасности.
> Третьи лица могут подменять образы и перехватывать весь трафик, включая логины и пароли.

> [!WARNING] huecker.io находится в стадии разработки и не гарантирует 100% доступности и безопасности.

## 1. Через конфиг докера (как зеркало docker.io) {#config}

Расположен в:

| Операционная система | Путь к файлу конфигурации                    |
| -------------------- | -------------------------------------------- |
| Linux, regular setup | /etc/docker/daemon.json                      |
| Linux, rootless mode | ~/.config/docker/daemon.json                 |
| macOS                | ~/.docker/daemon.json                        |
| OrbStack             | Settings -> Docker -> Advanced engine config |
| Windows              | C:\ProgramData\docker\config\daemon.json     |
| Docker Desktop       | Preferences -> Docker engine                 |

Конфиг:

```json
{
  "registry-mirrors": ["https://huecker.io"]
}
```

Перезапуск докера (systemd):

```bash
$ systemctl restart docker
```

Теперь при попытке загрузки образа, докер будет сначала пытаться использовать прокси

## 2. Явное указание адреса {#explicit}

```bash
$ docker pull huecker.io/library/alpine:latest
$ docker pull huecker.io/n8nio/n8n:latest
```
