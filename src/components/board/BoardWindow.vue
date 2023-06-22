<template>
  <div class="pa-3">
    <v-row style="height: calc(100vh - 56px)" class="flex-nowrap overflow-auto">
      <v-col cols="3" v-for="(column, idx) in props.columns" :key="idx">
        <KanbanColumn :board="props.name" v-bind="column" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import KanbanColumn from "@/components/column/KanbanColumn.vue";

const props = defineProps(["name", "columns"]);
</script>
