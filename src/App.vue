<template>
  <v-layout>
    <v-navigation-drawer class="bg-deep-purple px-3" permanent>
      <template #prepend>
        <AddBoardBtn />
      </template>
      <v-list color="transparent"> </v-list>
      <template #append>
        <ThemeModeSwitch @changeMode="changeThemeMode" />
      </template>
    </v-navigation-drawer>
    <v-main>
      <v-toolbar title="Board Name" density="comfortable"></v-toolbar>
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
import { useTheme } from "vuetify";
import ThemeModeSwitch from "@/components/ThemeModeSwitch.vue";
import AddBoardBtn from "@/components/board/AddBoardBtn.vue";

const theme = useTheme();

function changeThemeMode(toDarkMode: boolean): void {
  theme.global.name.value = toDarkMode ? "dark" : "light";
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
