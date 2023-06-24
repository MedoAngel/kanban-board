<template>
  <div>
    <v-card class="text-left">
      <template #title>
        <v-card-title>{{ card.title }}</v-card-title>
      </template>
      <template #text>
        <v-card-text class="pa-0">{{ card.content }}</v-card-text>
      </template>
      <v-row justify="end">
        <v-col cols="auto" align="end">
          <v-tooltip location="bottom">
            <template #activator="{ props }">
              <v-btn
                v-bind="props"
                @click="shareLink"
                :ripple="false"
                variant="plain"
                icon="fas fa-share-alt"
              >
              </v-btn>
            </template>
            Share Card
          </v-tooltip>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog class="v-col-4" v-model="showShareDialog">
      <LinkPrompt :url="cardLink" />
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LinkPrompt from "@/components/LinkPrompt.vue";
import { BASE_URL } from "../../../server.config";

const card = defineProps(["id", "title", "content"]);

const showShareDialog = ref(false);
const cardLink = ref(`${BASE_URL}/share/card/${card.id}`);

function shareLink() {
  showShareDialog.value = true;
}
</script>
