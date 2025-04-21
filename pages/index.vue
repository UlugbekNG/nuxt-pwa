<script setup lang="ts">
//
</script>

<template>
  <div class="flex flex-col">
    <p class="text-2xl font-bold text-gray-700">
      NUXT PWA | SCANINFO MENU
    </p>
    <p class="text-gray-500">
      This is a simple example of a Nuxt 3 PWA application.
      It uses the <code>nuxt-pwa</code> module to add PWA features to the app.
      The app is built with <code>Nuxt 3</code>, <code>Vue 3</code>, and <code>Tailwind CSS</code>.
    </p>
    <u-drawer label="SECTIONS" />
    <div>
      <u-button to="/about" size="xl">
        About
      </u-button>
    </div>
  </div>
</template>
