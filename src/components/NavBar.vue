<template>
  <v-app-bar app flat :style="appBarStyle" class="px-4">
    <v-app-bar-nav-icon
      v-show="!drawer"
      @click="$emit('toggle-drawer')"
      variant="text"
      :style="{
        position: drawer ? 'absolute' : 'relative',
        left: leftValue,
      }"
    ></v-app-bar-nav-icon>

    <v-spacer></v-spacer>

    <v-btn-toggle variant="outlined" :density="displayDensity">
      <v-btn
        icon
        href="https://www.linkedin.com/in/lopez-ruiz-sergio/"
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        aria-label="LinkedIn"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>
      <v-btn
        icon
        href="buymeacoffee.com/serlopez"
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        aria-label="Buy me a coffee"
      >
        <v-icon>mdi-coffee</v-icon>
      </v-btn>
      <v-btn icon @click="toggleTheme" variant="text" aria-label="Toggle Theme">
        <v-icon>{{
          isDark ? "mdi-weather-sunny" : "mdi-weather-night"
        }}</v-icon>
      </v-btn>
    </v-btn-toggle>
  </v-app-bar>
</template>

<script setup>
import { computed } from "vue";
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
  drawer ? (display.xs.value ? "250px" : "280px") : "0px",
);
const displayDensity = computed(() => {
  return display.xs.value ? "compact" : "default";
});

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
};
</script>
