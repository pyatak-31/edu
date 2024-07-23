<template>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style lang="scss" module>
.container {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto; 
  padding-right: 15px;
  padding-left: 15px;

  @include sm {
    padding-right: 20px;
    padding-left: 20px;
  }
}
</style>
