<script setup lang="ts">
import type { MaterialLink } from '@/entities/materials';
import { computed, useCssModule } from 'vue';

interface Props {
  materialItem: MaterialLink,
}
const props = defineProps<Props>();

const $style = useCssModule();

const materialItemTypeText = computed(() => {
  switch (props.materialItem.type) {
    case 'Book': return 'Книга';
    case 'Video': return 'Видео';
    case 'Course': return 'Курс';
  };
});

const materialItemTypeClassList = computed(() => {
  switch (props.materialItem.type) {
    case 'Book': return [$style.material_type, $style.material_type_book];
    case 'Video': return [$style.material_type, $style.material_type_video];
    case 'Course': return [$style.material_type, $style.material_type_course];
  };
});
</script>

<template>
  <li>
    <a
      :href="materialItem.url"
      target="_blank"
      :class="$style.material_link"
    >
      {{ materialItem.label }}
    </a>
    <span :class="materialItemTypeClassList">
      {{ materialItemTypeText }}
    </span>
  </li>
</template>

<style lang="scss" module>
.material_link {
  color: $blue-640;
  font-size: 18px;

  &:hover {
    text-decoration: underline; 
  }
}

.material_type {
  display: inline-block;
  margin-left: 20px;
  padding: 5px 10px;
  border: 1px solid;
  border-radius: 15px;

  &_book {
    background-color: $red_light;
    border-color: $orange_fire;
  }

  &_video {
    background-color: $green_light;
    border-color: $green_dark;
  }

  &_course {
    background-color: $light-blue-40;
    border-color: $blue-800;
  }
}
</style>
