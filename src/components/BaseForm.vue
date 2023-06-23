<template>
  <div>
    <v-card class="pa-3">
      <v-container>
        <v-form ref="form" @submit.prevent="validate">
          <slot></slot>
          <v-row>
            <v-col align="start">
              <v-btn type="submit" color="primary"> Save </v-btn>
            </v-col>
            <v-col align="end">
              <v-btn @click="emit('cancel')"> Cancel </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const form = ref();
const emit = defineEmits(["cancel", "save"]);

async function validate() {
  const { valid } = await form.value.validate();

  if (valid) {
    emit("save");
  }
}
</script>
