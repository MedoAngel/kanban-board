<template>
  <div>
    <v-card class="pa-3">
      <v-container>
        <v-form @submit.prevent="emit('save')">
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
const emit = defineEmits(["cancel", "save"]);
</script>
