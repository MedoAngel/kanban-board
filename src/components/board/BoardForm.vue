<template>
  <div>
    <v-card class="pa-3">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="boardName" label="Board Name" variant="outlined" />
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
import { ref, toValue } from "vue";

const emit = defineEmits(["cancel", "save"]);
const boardName = ref("");

function emitSave() {
  emit("save", toValue(boardName));
}
</script>
