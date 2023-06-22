<template>
  <div>
    <v-card color="grey-lighten-2" class="elevation-5 pa-2 text-left" min-height="40vh">
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
                icon="fas  fa-plus"
              ></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <KanbanCard class="py-2 px-0" v-for="(card, idx) in props.cards" v-bind="card" :key="idx" />
    </v-card>
  </div>
</template>

<script setup lang="ts">
import KanbanCard from "@/components/card/KanbanCard.vue";

const props = defineProps(["name", "cards"]);
</script>
