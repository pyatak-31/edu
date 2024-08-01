<script setup lang="ts">
import { onMounted, ref, watch, computed, useCssModule } from "vue";

interface Props {
  scaled?: number | null,
  rotation?: boolean,
}
const props = withDefaults(defineProps<Props>(), {
  scaled: null,
  rotation: true,
});

const $style = useCssModule();

const voluminousCard = ref<HTMLElement|null>(null);
let halfHeightCard, halfWidthtCard;

const cardClassList = computed(() => {
  return {
    [$style.card]: true,
    [$style.card_scaled]: props.scaled,
  };
});

watch(() => props.rotation, (rotation) => {
  if (!rotation && voluminousCard.value) {
    voluminousCard.value.style.transform = 'none';
  }
});

onMounted(() => {
  if (voluminousCard.value) {
    halfHeightCard = Math.floor(voluminousCard.value.offsetHeight / 2);
    halfWidthtCard = Math.floor(voluminousCard.value.offsetWidth / 2);
  }
});

const move = (event: MouseEvent) => {
  if (props.rotation && voluminousCard.value) {
    voluminousCard.value.style.transform = `
      ${ props.scaled ? `scale(${props.scaled})` : '' }
      rotateX(${ (event.offsetY - halfHeightCard!) / 10 }deg)
      rotateY(${ (event.offsetX - halfWidthtCard!) * -0.1 }deg)
    `;
  }
};

const out = () => {
  if (props.rotation && voluminousCard.value) {
    voluminousCard.value.style.transform = 'none';
  }
}
</script>

<template>
 <div
  :class="cardClassList"
  @mousemove="move($event)"
  @mouseout="out()"
>
  <div
    :class="$style.card__wrapper"
    ref="voluminousCard"
  >
    <slot />
  </div>
 </div>
</template>

<style module lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  perspective: 500px;
  transform-style: preserve-3d;

  &_scaled {
    .card__wrapper {
      transition: transform 0.3s;
    }
  }
  
  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 100%;
  }
}
</style>
