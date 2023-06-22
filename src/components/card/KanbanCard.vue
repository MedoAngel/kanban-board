<template>
  <div>
    <v-card class="text-left">
      <template #title>
        <v-container class="pa-1">
          <v-row>
            <v-col cols="10">
              <v-card-title>{{ props.title }}</v-card-title>
            </v-col>
            <v-col class="pa-1" cols="1">
              <v-btn
                :ripple="false"
                variant="flat"
                density="compact"
                size="x-small"
                icon="fas fa-trash-alt"
              ></v-btn>
            </v-col>
            <v-col class="pa-1" cols="1">
              <v-btn :ripple="false" density="compact" size="x-small" icon="fas fa-pen"></v-btn>
            </v-col>
          </v-row>
        </v-container>
      </template>
      <template #text>
        <v-card-text class="pa-0">{{ props.content }}</v-card-text>
      </template>
    </v-card>
  </div>
</template>

<script setup lang="ts">
const props = defineProps(["title", "content"]);
</script>
