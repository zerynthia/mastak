<template>
  <DomLayout />
  <CanvasLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import CanvasLayout from '/src/views/CanvasLayout.vue';
import DomLayout from '/src/views/DomLayout.vue';

export default defineComponent({
  name: 'App',
  components: { CanvasLayout, DomLayout },
});
</script>

<style>
@font-face {
  font-family: 'Fira Code';
  src: url('/FiraCode.ttf') format('truetype-variations');
  font-weight: 100 900;
  font-display: fallback;
}

:root {
  --gap: 10px;
  --black: rgb(20, 20, 20);
  --white: rgb(242, 242, 242);
  --gray: rgb(211, 222, 220);
  --selfWhite: rgba(242, 242, 242, 0.5);
  --transition: ease 0.2s;
  --borderRadius: 10px;

  --uiElementHeight: 26px;
  --uiElementFontSize: 13px;

  --textColor: var(--black);
  --bgColor: var(--gray);

  --zIndex0: 0;
  --zIndex1: 1;
  --zIndex2: 10;
  --zIndex3: 100;
}

* {
  box-sizing: border-box;
  font-family: 'Fira Code', monospace;
}

*::selection {
  background: var(--textColor);
  color: var(--bgColor);
}

html,
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
}

h1,
h2,
p {
  margin: 0;
}

#app {
  background: var(--bgColor);
  color: var(--textColor);

  width: 100%;
  height: 100%;
  padding: var(--gap);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>
