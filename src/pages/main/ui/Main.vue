<script setup lang="ts">
import { ROADMAP_PAGE_NAME } from "@/shared/constants";
import { UIContainer, UIH1, UILink, UISection } from "@/shared/ui";
import { WidgetSubjectNav } from "@/widgets/SubjectNav";

</script>

<template>
  <UISection>
    <UIContainer>
      <UIH1 title="Главное меню" />
      
      <WidgetSubjectNav :class="$style.main_nav" />
    </UIContainer>
  </UISection>
  <UISection :class="$style.roadmap">
    <UIContainer :class="$style.roadmap_container">
      <UILink
        text="Roadmap"
        :to="{ name:  ROADMAP_PAGE_NAME }"
      />
    </UIContainer>
  </UISection>
</template>

<style lang="scss" module>
.main_nav {
  margin-top: 30px;
}

.roadmap {
  margin-top: auto;

  &_container {
    text-align: center;
  }
}
</style>