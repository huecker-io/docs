# Распространенные проблемы {#issues}

## Image digest отличается от оригинала {#digest}

[Stack Overflow](https://stackoverflow.com/questions/45533005/why-digests-are-different-depend-on-registry)

## Ошибка `missing signature key` {#missing-signature-key}

<!-- thanks @BadBadBat -->

Вероятно, вы используете устаревшую версию Docker. Обновите Docker до последней версии.

[Stack Overflow](https://stackoverflow.com/questions/60697752/getting-docker-error-daemon-is-missing-signature-key-on-docker-pull)

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
