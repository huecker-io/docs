<script setup lang="ts">
import { useData } from "vitepress";

const data = useData();

const textByLang = {
  ru: `Помогите протестировать <b>безопасный SOCKS5 прокси</b> ->`,
  en: `Help to test a <b>secure SOCKS5 proxy</b> ->`,
};
</script>

<template>
  <a
    :href="`/${data.lang.value !== 'ru' ? `${data.lang.value}/` : ''}use#socks5`"
    class="banner"
  >
    <span class="lines"></span>
    <span class="inner" v-html="textByLang[data.lang.value]" />
  </a>
</template>

<style scoped>
.banner {
  margin-top: 20px;
  padding: 1px;
  font-size: 14px;
  position: relative;
  line-height: 1.4;
  display: inline-block;
  border-radius: 12px;
  overflow: hidden;
}

.inner {
  position: relative;
  padding: 6px 12px;
  display: block;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
}

.inner :deep(b) {
  font-weight: 600;
}

.lines {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--vp-c-border);
  transition: background-color 0.25s ease;
}

.banner:hover .lines {
  background: var(--vp-c-brand-1);
}

.lines::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to right,
    var(--vp-c-brand-1) 0%,
    var(--vp-c-brand-1) 49%,
    transparent 50%,
    transparent 50%
  );
  filter: blur(5px);
  animation: spin 5s linear infinite;
}

@keyframes spin {
  0% {
    transform: scaleY(0.5) rotate(0);
  }
  25% {
    transform: scaleY(0.2) rotate(90deg);
  }
  50% {
    transform: scaleY(0.5) rotate(180deg);
  }
  75% {
    transform: scaleY(0.2) rotate(270deg);
  }
  100% {
    transform: scaleY(0.5) rotate(360deg);
  }
}
</style>
