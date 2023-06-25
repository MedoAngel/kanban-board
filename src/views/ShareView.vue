<template>
  <div>
    <v-dialog
      :model-value="true"
      class="v-col-11 v-col-sm-9 v-col-md-6 v-col-lg-4 v-col-xl-3 v-col-xxl-2"
      persistent
    >
      <KanbanCard v-bind="card" />
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import KanbanCard from "@/components/card/KanbanCard.vue";
import { getCardById } from "@/api/cards";

const route = useRoute();
const cardId = route.params.id;

const card = ref({});

getCardById(cardId).then(({ data }) => {
  const { id, ...cardInfo } = data;

  card.value = cardInfo;
});
</script>

<style scoped></style>
