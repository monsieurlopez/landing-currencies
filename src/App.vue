<template>
  <v-app>
    <NavBar :drawer="drawer" @toggle-drawer="drawer = !drawer" />
    <v-navigation-drawer
      v-model="drawer"
      temporary
      width="280"
      style="top: 0; height: 100vh"
    >
      <v-toolbar color="primary" dark>
        <v-toolbar-title>
          <v-icon class="me-2">mdi-api</v-icon>
        </v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          :to="'/'"
          @click="drawer = false"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-book-open-page-variant"
          title="Documentation"
          :to="'/documentation'"
          @click="drawer = false"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-email-outline"
          title="Contact"
          :to="'/contact'"
          @click="drawer = false"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";

const drawer = ref(false);
</script>
