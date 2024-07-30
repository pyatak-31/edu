<template>
  <section :class="$style.section">
    <slot />
  </section>
</template>

<style lang="scss" module>
.section {
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
