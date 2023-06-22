<template>
  <div>
    <v-card class="pa-3">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="card.title" label="Title" variant="outlined" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-textarea v-model="card.content" label="Content" variant="outlined" />
          </v-col>
        </v-row>
        <v-row>
          <v-col align="center">
            <v-btn @click="emitSave" color="primary"> Save </v-btn>
          </v-col>
          <v-col align="center">
            <v-btn @click="emit('cancel')"> Cancel </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["board", "column", "card"]);
const emit = defineEmits(["cancel", "save"]);

const card = ref({
  board: props?.board,
  column: props?.column,
  title: props?.card?.title,
  content: props?.card?.content,
});
</script>
