<script setup lang="ts">
import { UIContainer, UIH1 } from "@/shared/ui";
import { WidgetSubjectNav } from "@/widgets/SubjectNav";

</script>

<template>
  <section :class="$style.main">
    <UIContainer>
      <UIH1 title="Главное меню" />
      
      <WidgetSubjectNav :class="$style.main_nav" />
    </UIContainer>
  </section>
</template>

<style lang="scss" module>
.main {
  padding-top: 50px;
  padding-bottom: 50px;
}

.main_nav {
  margin-top: 30px;
}
</style>