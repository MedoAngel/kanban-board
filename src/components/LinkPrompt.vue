<template>
  <div>
    <v-card class="pa-3">
      <v-container>
        <v-row>
          <v-col>
            <v-text-field
              ref="linkField"
              @focus="$event.target.select()"
              :model-value="props.url"
              label="Card Link"
              variant="outlined"
              hide-details
              readonly
            >
              <template #append-inner>
                <v-tooltip location="top">
                  <template #activator="{ props }">
                    <v-btn
                      v-bind="props"
                      @mouseleave="buttonLeave"
                      @click="copyLink"
                      :ripple="false"
                      variant="plain"
                      size="medium"
                      icon="fas fa-clone"
                    >
                    </v-btn>
                  </template>
                  {{ tooltip }}
                </v-tooltip>
              </template>
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps(["url"]);
const tooltip = ref("Copy");
const linkField = ref(null);

function copyLink() {
  linkField.value.focus();

  const isCopied = document.execCommand("copy");

  if (isCopied) {
    tooltip.value = "Link Copied to Clipboard";
  }
}

function buttonLeave() {
  tooltip.value = "Copy";
}
</script>
