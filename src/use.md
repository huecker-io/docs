# Использование

## 1. Через конфиг докера (как зеркало docker.io)

Расположен в:

| Операционная система | Путь к файлу конфигурации                |
|----------------------|------------------------------------------|
| Linux, regular setup | /etc/docker/daemon.json                  |
| Linux, rootless mode | ~/.config/docker/daemon.json             |
| macOS                | ~/.docker/daemon.json                    |
| Windows              | C:\ProgramData\docker\config\daemon.json |
| Docker Desktop       | Preferences->Docker engine               |

Конфиг:

```json
{ 
  "registry-mirrors": ["https:\/\/huecker.io"] 
}
```

Перезапуск докера (systemd):

```bash
$ systemctl restart docker
```

Теперь при попытке загрузки образа, докер будет сначала пытаться использовать прокси


## 2. Явное указание адреса

```bash
$ docker pull huecker.io/library/alpine:latest
```
