<script setup lang="ts">
import { useSubjects, type Subject } from "@/entities/subjects";
import { SUBJECT_PAGE_NAME } from "@/shared/constants";
import { UIVoluminousCard } from "@/shared/ui";
import { computed, useCssModule } from "vue";

interface Props {
  subject: Subject,
}
const props = defineProps<Props>();

const $style = useCssModule();

const { subjectId } = useSubjects({ subjectName: props.subject.name });

const subjectLinkSpecialClass = computed(() => {
  switch (props.subject.name) {
    case 'GIT': return $style.subject_link_git;
    case 'HTML': return $style.subject_link_html;
    case 'CSS': return $style.subject_link_css;
    case 'SCSS': return $style.subject_link_scss;
    case 'JavaScript': return $style.subject_link_js;
    case 'Webpack': return $style.subject_link_webpack;
    case 'Vue 2':
    case 'Vue 3': return $style.subject_link_vue;
    case 'Nuxt 2':
    case 'Nuxt 3': return $style.subject_link_nuxt;
    case 'Vite': return $style.subject_link_vite;
    case 'TypeScript': return $style.subject_link_ts;
    case 'Docker': return $style.subject_link_docker;
  }
});

const subjectLinkClassList = computed(() => ({
  [$style.subject_link]: true,
  [$style.done]: props.subject.isDone,
  [$style.not_ready]: !props.subject.isReady,
  [subjectLinkSpecialClass.value!]: true,
}));
</script>

<template> 
  <li :class="$style.subject_item">
    <UIVoluminousCard
      :class="$style.subject_item"
      :scaled="1.02"
      :rotation="subject.isReady"
    >
      <RouterLink
        :class="subjectLinkClassList"
        :to="{ name: SUBJECT_PAGE_NAME, params: { id: subjectId } }"
      >
        {{ subject.name }}
      </RouterLink>
    </UIVoluminousCard>
  </li>
</template>

<style lang="scss" module>
.subject_item {
  flex: 0 0 250px;
  height: 250px;
}

.subject_link {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 25px;
  color: $gray-960;
  font-size: 35px;
  line-height: 42px;
  font-weight: 700;
  background-color: $yellow_light;
  border: 1px solid rgba($steel-gray-600, .2);
  border-radius: 30px;
  box-shadow:
    rgba($gray-900, 0.66) 0 0px 10px 0,
    inset $gray-900 0 0 0 1px,
    inset rgba($white, 0.3) 0 0 0 4px;
  transition: box-shadow .3s, text-shadow .3s;

  &:before {
    content: "";
    position: absolute;
    right: 15px;
    bottom: 15px;
    z-index: 1;
    display: block;
    background-size: contain;
    background-repeat: no-repeat;
    transition: filter .3s, transform .3s;
    opacity: .8;
    filter: drop-shadow(0px 0px 1px $gray-900);
  }

  &:hover {
    text-shadow:1px 1px 0 $white, 2px 2px 0 $steel-gray-600, 3px 3px 1px $gray-960;
    box-shadow:
      rgba($gray-900, 0.66) 0 0 20px 0,
      inset $gray-900 0 0 0 1px,
      inset rgba($white, 0.5) 0 0 0 4px;

    &:before {
      filter: drop-shadow(1px 1px 3px $gray-900);
      transform: translateX(2px);
      transform-origin: left;
    }
  }

  &_git {
    
    &:before {
      background-image: url('images/git.png');
      width: 150px;
      height: 150px;
    }
  }

  &_html,
  &_css,
  &_js,
  &_webpack {

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

  &_webpack {

    &:before {
      background-image: url('images/webpack.png');
    }
  }

  &_vue {

    &:before {
      width: 160px;
      height: 125px;
      background-image: url('images/vue.png');
    }
  }

  &_nuxt {

    &:before {
      width: 170px;
      height: 130px;
      background-image: url('images/nuxt.png');
    }
  }

  &_vite {

    &:before {
      width: 145px;
      height: 145px;
      background-image: url('images/vite.png');
    }
  }

  &_ts {

    &:before {
      width: 140px;
      height: 140px;
      background-image: url('images/ts.png');
    }
  }

  &_docker {

    &:before {
      width: 180px;
      height: 105px;
      background-image: url('images/docker.png');
    }
  }

  &_scss {

    &:before {
      width: 170px;
      height: 130px;
      background-image: url('images/scss.png');
    }
  }
}

.not_ready {
  box-shadow: 0;
  filter: blur(2px) grayscale(1);
  pointer-events: none;
}

.done {
  background-color: $green-light;
}
</style>
