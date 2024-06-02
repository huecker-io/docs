# Common Issues {#issues}

## Image digest differs from the original {#digest}

[Stack Overflow](https://stackoverflow.com/questions/45533005/why-digests-are-different-depend-on-registry)

## Error `missing signature key` {#missing-signature-key}

<!-- thanks @BadBadBat -->

You are likely using an outdated version of Docker. Update Docker to the latest version.

[Stack Overflow](https://stackoverflow.com/questions/60697752/getting-docker-error-daemon-is-missing-signature-key-on-docker-pull)

## Using SOCKS5 with Watchtower {#watchtower-socks5}

<!-- https://github.com/huecker-io/huecker/issues/3 -->
<!-- thanks https://github.com/Kirill -->

To use a proxy with Watchtower, you need to perform additional configuration similar to the [configuration for Docker](use#socks5).
Instead of JSON file parameters, they are set in the environment variables `HTTPS_PROXY` and `NO_PROXY`.

**Example Compose file:**

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
