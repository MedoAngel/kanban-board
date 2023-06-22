<template>
  <div class="pa-3">
    <v-row style="height: calc(100vh - 56px)" class="flex-nowrap overflow-auto">
      <v-col cols="3" v-for="(column, idx) in columns" :key="idx">
        <KanbanColumn v-bind="column" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import KanbanColumn from "@/components/column/KanbanColumn.vue";
import { getBoardColumns } from "@/api/columns";

const board = defineProps(["id", "name"]);
const columns = ref([]);

getBoardColumns(board.id).then(({ data }) => (columns.value = data));
</script>
