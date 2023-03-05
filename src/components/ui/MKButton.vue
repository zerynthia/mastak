<template>
  <button
    :class="`mk-button`"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MKButton",
  props: {
    onClick: Function,
    label: String
  },
});
</script>

<style scoped>
.mk-button {
  --bgColor: var(--black);
  --textColor: var(--white);
  --paddingY: 4px;
  --paddingX: 10px;

  background: var(--bgColor);
  color: var(--textColor);
  border: 0;
  border-radius: var(--borderRadius);
  cursor: pointer;
  user-select: none;
  transition: var(--transition);
  font-weight: bold;
  width: fit-content;
  height: var(--uiElementHeight);
  padding: var(--paddingY) var(--paddingX);
  font-size: var(--uiElementFontSize);
}

.mk-button:hover {
  transform: scale(1.1);
}

.mk-button:active {
  transform: scale(0.9);
}
</style>
