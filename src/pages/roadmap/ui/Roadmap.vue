<script setup lang="ts">
import { ROADMAP_LIST } from '@/entities/roadmap';
import { GoToMainPageButton, UIContainer, UIH1, UISection } from '@/shared/ui';


</script>

<template>
  <UISection>
    <UIContainer>
      <GoToMainPageButton />
    </UIContainer>
  </UISection>
  <UISection>
    <UIContainer :class="$style.roadmap_container">
      <UIH1 title="Roadmap"/>

      <div :class="$style.subject_wrapper">
        <div v-for="subject in ROADMAP_LIST" :key="subject.title" :class="$style.subject">
          <h3 :class="$style.subject_title">
            {{ subject.title }}
          </h3>

          <span v-if="subject.list" :class="$style.subject_divider" />

          <ul v-if="subject.list" :class="$style.subject_list">
            <li v-for="item in subject.list" :key="item" :class="$style.subject_item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </UIContainer>
  </UISection>
</template>

<style lang="scss" module>
.roadmap_container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.subject_wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 25px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -20px;
    display: block;
    width: 1px;
    height: 100%;
    background-color: $gray-900;
  }
}

.subject {
  position: relative;
  display: flex;
  align-items: flex-start;

  &:before {
    content: "";
    position: absolute;
    top: 20px;
    left: -30px;
    z-index: 0;
    width: 20px;
    height: 20px;
    background-color: $gray-900;
    border-radius: 50%;
  }

  &:hover {
    .subject_title,
    .subject_divider,
    .subject_list {
      box-shadow: 0 0 10px -2px $gray-900, inset 0 0 12px -2px $steel-gray-300;
      transform: scale(1.05);
    }
  }
}

.subject_title,
.subject_divider,
.subject_list {
  position: relative;
  box-shadow: 0 0 20px -10px $gray-900, inset 0 0 12px -2px $steel-gray-300;
  transition: box-shadow .3s, transform .3s;
}

.subject_title {
  z-index: 1;
  padding: 15px;
  font-size: 25px;
  line-height: 30px;
  background-color: $orange_prominent;
  border-radius: 15px;
}

.subject_divider {
  z-index: 0;
  display: block;
  margin-top: 25px;
  width: 100px;
  border-top: 3px dashed $gray-900;
}

.subject_list {
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  background-color: $green_nice;
  border-radius: 15px;
}

.subject_item {
  color: $gray-960;
  font-size: 18px;
  line-height: 22px;
}
</style>
