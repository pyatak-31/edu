<script setup lang="ts">
import type { Subject } from "@/entities/subjects";
import {
  CSS_PAGE_NAME,
  GIT_PAGE_NAME,
  HTML_PAGE_NAME,
  JAVASCRIPT_PAGE_NAME,
} from "@/shared/constants";
import { computed, useCssModule } from "vue";

interface Props {
  subject: Subject,
}
const props = defineProps<Props>();

const $style = useCssModule();

const subjectLinkClassList = computed(() => ({
  [$style.subject_link]: true,
  [$style.not_ready]: !props.subject.isReady,
  [subjectLinkSpecialClass.value]: true,
}));

const subjectLinkSpecialClass = computed(() => {
  switch (props.subject.name) {
    case "GIT": return $style.subject_link_git;
    case "HTML": return $style.subject_link_html;
    case "CSS": return $style.subject_link_css;
    case "JavaScript": return $style.subject_link_js;
  }
});

const routeName = computed(() => {
  switch (props.subject.name) {
    case "GIT": return GIT_PAGE_NAME;
    case "HTML": return HTML_PAGE_NAME;
    case "CSS": return CSS_PAGE_NAME;
    case "JavaScript": return JAVASCRIPT_PAGE_NAME;
  }
});
</script>

<template> 
  <li :class="$style.subject_item">
    <RouterLink :class="subjectLinkClassList" :to="{ name: routeName }">
      {{ subject.name }}
    </RouterLink>
  </li>
</template>

<style lang="scss" module>
.subject_item {
  flex: 0 0 300px;
  height: 300px;
}

.subject_link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  font-size: 35px;
  line-height: 42px;
  font-weight: 700;
  background-color: $yellow_light;
  border: 1px solid rgba($steel-gray-600, .2);
  border-radius: 30px;
  box-shadow: 0 0 25px -15px $gray-900, inset 0 0 10px -2px $steel-gray-300;
  transition: box-shadow .3s, text-shadow .3s;

  &:before {
    content: "";
    position: absolute;
    right: -15px;
    bottom: -15px;
    z-index: 1;
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    transition: filter .3s, transform .3s;
    filter: drop-shadow(0px 0px 1px $gray-900);
  }

  &:hover {
    text-shadow: 0px 0px 20px $light-blue-300;
    box-shadow: 0 0 25px -5px $gray-900, inset 0 0 10px -2px $steel-gray-300;

    &:before {
      filter: drop-shadow(0px 0px 2px $gray-900);
      transform: translateX(2px);
      transform-origin: left;
    }
  }

  &_git {
          
    &:before {
      width: 150px;
      height: 150px;
      background-image: url('images/git.png');
    }
  }

  &_html,
  &_css,
  &_js {

    &:before {
      width: 130px;
      height: 145px;
    }
  }

  &_html {

    &:before {
      background-image: url('images/html.png');
    }
  }

  &_css {

    &:before {
      background-image: url('images/css.png');
    }
  }

  &_js {

    &:before {
      background-image: url('images/js.png');
    }
  }
}

.not_ready {
  box-shadow: 0;
  filter: blur(2px) grayscale(1);
  pointer-events: none;
}
</style>