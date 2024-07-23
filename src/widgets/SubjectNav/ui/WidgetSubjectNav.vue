<script setup lang="ts">
import SubjectItem from "./components/SubjectItem.vue";
import { SUBJECT_LIST } from "@/entities/subjects";
</script>

<template>
  <nav>
    <ul :class="$style.subject_list">
      <SubjectItem
        v-for="subject in SUBJECT_LIST"
        :key="subject.name"
        :subject="subject"
      />
    </ul>
  </nav>
</template>

<style lang="scss" module>
  .subject_list {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }
</style>