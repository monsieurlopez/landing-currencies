<template>
  <v-app-bar app flat :style="appBarStyle" class="px-4">
    <v-app-bar-nav-icon
      @click="$emit('toggle-drawer')"
      variant="text"
      :icon="drawer ? 'mdi-close' : 'mdi-menu'"
      :style="{
        position: drawer ? 'absolute' : 'relative',
        left: leftValue,
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
import { useTheme, useDisplay } from "vuetify";

const { drawer } = defineProps({
  drawer: Boolean,
});

defineEmits(["toggle-drawer"]);

const theme = useTheme();
const display = useDisplay();
const isDark = computed(() => theme.global.current.value.dark);
const appBarStyle = computed(() => ({
  backgroundColor: "rgba(var(--v-theme-surface), 1)",
  color: "var(--v-theme-on-surface)",
}));
const leftValue = computed(() =>
  drawer ? (display.xs.value ? "0px" : "280px") : "0px",
);

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
};
</script>
