<template>
  <v-layout>
    <v-navigation-drawer class="bg-deep-purple px-3" permanent>
      <template #prepend>
        <AddNewBtn @click="showBoardForm = true">Add New Board</AddNewBtn>
      </template>

      <v-list color="transparent">
        <v-tabs v-model="currentBoard" direction="vertical">
          <v-tab v-for="(board, idx) in boards" :key="idx" :value="board">
            {{ board.name }}
          </v-tab>
        </v-tabs>
      </v-list>

      <template #append>
        <ThemeModeSwitch @changeMode="changeThemeMode" />
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-toolbar :title="currentBoard.name" density="comfortable">
        <template #append>
          <AddNewBtn @click="showColumnForm = true">Add New Column</AddNewBtn>
        </template>
      </v-toolbar>

      <v-window v-model="currentBoard">
        <BoardWindow v-bind="board" v-for="(board, idx) in boards" :value="board" :key="idx" />
      </v-window>
    </v-main>
  </v-layout>

  <v-dialog class="v-col-3" v-model="showBoardForm">
    <BoardForm @save="saveBoard" @cancel="showBoardForm = false" v-if="showBoardForm" />
  </v-dialog>

  <v-dialog class="v-col-3" v-model="showColumnForm">
    <ColumnForm @save="saveColumn" @cancel="showColumnForm = false" v-if="showColumnForm" />
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTheme } from "vuetify";
import ThemeModeSwitch from "@/components/ThemeModeSwitch.vue";
import BoardForm from "@/components/board/BoardForm.vue";
import BoardWindow from "@/components/board/BoardWindow.vue";
import AddNewBtn from "@/components/AddNewBtn.vue";
import ColumnForm from "@/components/column/ColumnForm.vue";
import { sendSaveBoard, getBoards } from "@/api/boards";
import { sendSaveColumn } from "@/api/columns";

const theme = useTheme();

const showBoardForm = ref(false);
const currentBoard = ref("");
const showColumnForm = ref(false);
const boards = ref([]);

getBoards().then(({ data }) => {
  boards.value = data;
  currentBoard.value = data[0];
});

function changeThemeMode(toDarkMode: boolean): void {
  theme.global.name.value = toDarkMode ? "dark" : "light";
}

function saveBoard(boardName: string): void {
  const board = { name: boardName, columns: [] };

  sendSaveBoard(board).then(({ data }) => {
    boards.value.push(data);

    showBoardForm.value = false;
  });
}

function saveColumn(columnName: string): void {
  const boardId = currentBoard.value.id;
  const column = { name: columnName, boardId };

  sendSaveColumn(column).then(({ data }) => {
    const board = boards.value.find(({ id }) => id === boardId);

    if (board) {
      board.newColumn = data;
    }

    showColumnForm.value = false;
  });
}
</script>
