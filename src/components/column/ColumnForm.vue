<template>
  <BaseForm @save="emitSave" @cancel="emit('cancel')">
    <v-row>
      <v-col>
        <v-text-field
          v-model="columnTitle"
          label="Column Title"
          variant="outlined"
          :rules="[required]"
        />
      </v-col>
    </v-row>
  </BaseForm>
</template>

<script setup lang="ts">
import { ref, toValue } from "vue";
import BaseForm from "@/components/BaseForm.vue";
import { required } from "@/components/input-rules";

const emit = defineEmits(["cancel", "save"]);
const columnTitle = ref("");

function emitSave(): void {
  emit("save", toValue(columnTitle));
}
</script>
