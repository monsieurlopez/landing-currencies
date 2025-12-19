<template>
  <v-app-bar app flat :style="appBarStyle" class="px-4">
    <v-app-bar-nav-icon
      @click="$emit('toggle-drawer')"
      variant="text"
      :style="{
        position: drawer ? 'absolute' : 'relative',
        left: drawer ? '280px' : '0px',
      }"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn icon @click="toggleTheme" variant="text">
      <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
import { ref, computed } from "vue";
import { useTheme } from "vuetify";

const theme = useTheme();
const isDark = computed(() => theme.global.current.value.dark);
const appBarStyle = computed(() => ({
  backgroundColor: "rgba(var(--v-theme-surface), 1)",
  color: "var(--v-theme-on-surface)",
}));

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
};

defineProps({
  drawer: Boolean,
});

defineEmits(["toggle-drawer"]);
</script>
