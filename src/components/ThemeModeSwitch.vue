<template>
  <div>
    <v-row justify="center" align="center">
      <v-col>
        <v-icon>fas fa-sun</v-icon>
      </v-col>
      <v-col cols="auto" align="top">
        <v-switch hide-details class="pa-auto" @update:modelValue="changeMode" inset />
      </v-col>
      <v-col>
        <v-icon>fas fa-moon</v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["changeMode"]);

function changeMode(isDarkMode: boolean): void {
  emit("changeMode", isDarkMode);
}
</script>
