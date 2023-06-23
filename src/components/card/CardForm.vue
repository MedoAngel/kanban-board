<template>
  <div>
    <BaseForm @save="emitSave" @cancel="emit('cancel')">
      <v-row>
        <v-col>
          <v-text-field v-model="card.title" label="Title" variant="outlined" :rules="[required]" />
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
import { ref, toValue } from "vue";
import BaseForm from "@/components/BaseForm.vue";
import { required } from "@/components/input-rules";

const emit = defineEmits(["cancel", "save"]);

const card = ref({ title: "", content: "" });

function emitSave() {
  emit("save", toValue(card));
}
</script>
