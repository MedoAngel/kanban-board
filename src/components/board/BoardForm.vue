<template>
  <div>
    <BaseForm @save="emitSave" @cancel="emit('cancel')">
      <v-row>
        <v-col>
          <v-text-field
            v-model="boardName"
            label="Board Name"
            variant="outlined"
            :rules="[required]"
          />
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
const boardName = ref("");

function emitSave() {
  emit("save", toValue(boardName));
}
</script>
