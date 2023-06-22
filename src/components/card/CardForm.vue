<template>
  <div>
    <BaseForm @cancel="emit('cancel')">
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
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseForm from "@/components/BaseForm.vue";

const props = defineProps(["board", "column", "card"]);
const emit = defineEmits(["cancel", "save"]);

const card = ref({
  board: props?.board,
  column: props?.column,
  title: props?.card?.title,
  content: props?.card?.content,
});
</script>
