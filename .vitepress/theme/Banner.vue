<script setup lang="ts">
import { useData } from "vitepress";
import { VPBadge } from "vitepress/theme";
import { computed } from "vue";

const data = useData();

const text = computed(() => {
  return data.lang.value == "en"
    ? "Help test <b>secure SOCKS5 proxy</b> ->"
    : "Помогите протестировать <b>безопасный SOCKS5 прокси</b> ->";
});
</script>

<template>
  <a href="/use#socks5">
    <VPBadge class="banner-text" v-html="text" />
  </a>
</template>

<style>
.banner-text {
  margin-top: 1rem;
  padding: 7px 10px 7px 10px;
  font-size: 14px;
  align-content: center;
  animation: pulse 5s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    box-shadow: 0 0 5px;
  }
  50% {
    transform: scale(1.02);
    box-shadow: 0 0 15px;
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 5px;
  }
}
</style>
