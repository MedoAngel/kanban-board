<template>
  <div>
    <v-dialog persistent class="v-col-3" :model-value="true">
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
