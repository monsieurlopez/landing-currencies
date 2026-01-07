<template>
  <v-app>
    <NavBar :drawer="drawer" @toggle-drawer="drawer = !drawer" />
    <v-navigation-drawer
      v-model="drawer"
      temporary
      width="280"
      :style="drawerStyle"
      class="custom-drawer"
    >
      <v-toolbar :style="toolbarStyle" class="drawer-toolbar">
        <v-toolbar-title class="drawer-title">Navigation</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="drawer = false" class="close-btn">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list class="drawer-list">
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          :to="'/'"
          @click="drawer = false"
          class="drawer-item"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-book-open-page-variant"
          title="Documentation"
          :to="'/documentation'"
          @click="drawer = false"
          class="drawer-item"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-email-outline"
          title="Contact"
          :to="'/contact'"
          @click="drawer = false"
          class="drawer-item"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTheme } from "vuetify";
import NavBar from "./components/NavBar.vue";

const drawer = ref(false);
const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);

const drawerStyle = computed(() => ({
  top: "0",
  height: "100vh",
  zIndex: 9999,
}));

const toolbarStyle = computed(() => {
  if (isDark.value) {
    return {
      background: "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.98) 100%)",
      borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
    };
  }
  return {
    background: "linear-gradient(135deg, rgba(248, 250, 252, 0.98) 0%, rgba(255, 255, 255, 0.98) 100%)",
    borderBottom: "1px solid rgba(59, 130, 246, 0.2)",
  };
});
</script>

<style scoped>
.custom-drawer {
  transition: all 0.3s ease;
}

.drawer-toolbar {
  transition: all 0.3s ease;
}

.drawer-title {
  font-weight: 700 !important;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 0.5px;
}

.drawer-list {
  padding: 16px 8px;
}

.drawer-item {
  margin: 8px 0;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.drawer-item:hover {
  background: rgba(59, 130, 246, 0.1);
  transform: translateX(4px);
}

.drawer-item::v-deep(.v-list-item__prepend) {
  margin-right: 12px;
}

.close-btn {
  transition: all 0.3s ease;
  border-radius: 8px;
}

.close-btn:hover {
  background: rgba(59, 130, 246, 0.1);
  transform: rotate(90deg);
}
</style>
