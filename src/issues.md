# Распространенные проблемы {#issues}

## Использование SOCKS5 вместе с Watchtower {#watchtower-socks5}

<!-- https://github.com/huecker-io/huecker/issues/3 -->
<!-- thanks https://github.com/Kirill -->

Для использования прокси вместе с Watchtower, необходимо произвести дополнительную конфигурацию, аналогичную [конфигурации для Docker](use#socks5).
Вместо параметров в JSON-файле, они настраиваются в переменных окружения `HTTPS_PROXY` и `NO_PROXY`.

**Пример Compose-файла:**

```yml
services:
  watchtower:
    image: containrrr/watchtower
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
    environment:
      HTTPS_PROXY: "socks5://proxy.huecker.io:443"
      NO_PROXY: "ghcr.io"
```
