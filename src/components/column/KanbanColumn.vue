<template>
  <div>
    <v-card color="grey-lighten-2" class="elevation-5 pa-2 text-left">
      <template #title>
        <v-container class="pa-1">
          <v-row>
            <v-col cols="11">
              <v-card-title>{{ props.name }}</v-card-title>
            </v-col>
            <v-col cols="1">
              <v-btn
                :ripple="false"
                density="compact"
                size="small"
                variant="icon"
                icon="fas fa-plus"
                @click="showCardForm = true"
              ></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <draggable
        class="droppable-area"
        :group="props.board"
        :list="props.cards"
        @start="drag = true"
        @end="drag = false"
        ghost-class="ghost"
        drag-class="dragged"
        item-key="id"
      >
        <template #item="{ element }">
          <KanbanCard class="py-2 px-0" v-bind="element" />
        </template>
      </draggable>
    </v-card>
    <v-dialog class="v-col-3" v-model="showCardForm">
      <CardForm @save="handleSave" @cancel="showCardForm = false" v-if="showCardForm" />
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import KanbanCard from "@/components/card/KanbanCard.vue";
import CardForm from "@/components/card/CardForm.vue";
import draggable from "vuedraggable";

const props = defineProps(["board", "name", "cards"]);
const showCardForm = ref(false);
const drag = ref(false);
</script>

<style scoped>
.droppable-area {
  position: relative;
  min-height: 20vh;
}

.dragged {
  opacity: 1;
  padding: 0px !important;
}

.ghost {
  visibility: hidden;
}
</style>
