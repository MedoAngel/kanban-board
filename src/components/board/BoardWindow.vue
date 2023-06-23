<template>
  <v-window-item>
    <div class="pa-3">
      <v-row style="height: calc(100vh - 56px)" class="flex-nowrap overflow-auto">
        <v-col cols="3" v-for="(column, idx) in columns" :key="idx">
          <KanbanColumn v-bind="column" />
        </v-col>
      </v-row>
    </div>
  </v-window-item>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import KanbanColumn from "@/components/column/KanbanColumn.vue";
import { getBoardColumns } from "@/api/columns";

const board = defineProps(["id", "name", "newColumn"]);
const columns = ref([]);

// workaround issue: https://github.com/vuejs/core/issues/8395
watchEffect(() => {
  if (board?.newColumn) columns.value.push(board.newColumn);
});

getBoardColumns(board).then(({ data }) => (columns.value = data));
</script>
