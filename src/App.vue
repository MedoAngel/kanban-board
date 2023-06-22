<template>
  <v-layout>
    <v-navigation-drawer class="bg-deep-purple px-3" permanent>
      <template #prepend>
        <AddBoardBtn @click="showBoardForm = true" />
      </template>
      <v-list color="transparent">
        <v-tabs v-model="currentBoard" direction="vertical">
          <v-tab v-for="(board, idx) in boards" :key="idx" :value="board.name">
            {{ board.name }}
          </v-tab>
        </v-tabs>
      </v-list>
      <template #append>
        <ThemeModeSwitch @changeMode="changeThemeMode" />
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-toolbar :title="currentBoard" density="comfortable"></v-toolbar>
      <v-window v-model="currentBoard">
        <v-window-item v-for="(board, idx) in boards" :value="board.name" :key="idx">
          <BoardWindow v-bind="board" />
        </v-window-item>
      </v-window>
    </v-main>
  </v-layout>

  <v-dialog class="v-col-3" v-model="showBoardForm">
    <BoardForm @save="handleSave" @cancel="showBoardForm = false" v-if="showBoardForm" />
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
import ThemeModeSwitch from "@/components/ThemeModeSwitch.vue";
import AddBoardBtn from "@/components/board/AddBoardBtn.vue";
import BoardForm from "@/components/board/BoardForm.vue";
import BoardWindow from "@/components/board/BoardWindow.vue";

const theme = useTheme();
const showBoardForm = ref(false);
const currentBoard = ref("");

function changeThemeMode(toDarkMode: boolean): void {
  theme.global.name.value = toDarkMode ? "dark" : "light";
}

function handleSave(boardName: string) {
  console.log(boardName);
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body::-webkit-scrollbar {
  display: none;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
