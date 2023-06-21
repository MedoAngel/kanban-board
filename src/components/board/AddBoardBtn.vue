<template>
  <div>
    <v-btn @click="emit('click')" size="large" variant="plain">
      Add New Board
      <template #append>
        <v-icon class="pt-0">fas fa-plus</v-icon>
      </template>
    </v-btn>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["click"]);
</script>
