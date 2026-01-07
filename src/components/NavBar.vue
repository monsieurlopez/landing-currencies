<template>
  <v-app-bar
    app
    flat
    class="navbar-bar px-6"
    :style="appBarStyle"
  >
    <!-- Menu Icon -->
    <v-app-bar-nav-icon
      v-show="!drawer"
      @click="$emit('toggle-drawer')"
      variant="text"
      class="navbar-icon"
    ></v-app-bar-nav-icon>

    <!-- Logo/Title -->
    <div class="navbar-brand">
      <router-link to="/" class="brand-link">
        <span class="brand-text">Euro Rates API</span>
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <!-- Action Buttons -->
    <div class="navbar-actions">
      <!-- LinkedIn -->
      <v-btn
        icon
        href="https://www.linkedin.com/in/lopez-ruiz-sergio/"
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        aria-label="LinkedIn"
        class="navbar-btn"
      >
        <v-icon>mdi-linkedin</v-icon>
      </v-btn>

      <!-- Coffee -->
      <v-btn
        icon
        href="https://buymeacoffee.com/serlopez"
        target="_blank"
        rel="noopener noreferrer"
        variant="text"
        aria-label="Buy me a coffee"
        class="navbar-btn"
      >
        <v-icon>mdi-coffee</v-icon>
      </v-btn>

      <!-- Theme Toggle -->
      <v-btn
        icon
        @click="toggleTheme"
        variant="text"
        aria-label="Toggle Theme"
        class="navbar-btn"
      >
        <v-icon>{{ isDark ? "mdi-weather-sunny" : "mdi-weather-night" }}</v-icon>
      </v-btn>
    </div>
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

const appBarStyle = computed(() => {
  if (isDark.value) {
    return {
      background: "linear-gradient(90deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)",
      borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
      backdropFilter: "blur(10px)",
    };
  }
  return {
    background: "linear-gradient(90deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.98) 100%)",
    borderBottom: "1px solid rgba(59, 130, 246, 0.1)",
    backdropFilter: "blur(10px)",
  };
});

const toggleTheme = () => {
  const newTheme = theme.global.current.value.dark ? "light" : "dark";
  theme.global.name.value = newTheme;
  localStorage.setItem("theme", newTheme);
};
</script>

<style scoped>
.navbar-bar {
  transition: all 0.3s ease;
  box-shadow: 0 2px 12px rgba(59, 130, 246, 0.08);
}

.navbar-brand {
  display: flex;
  align-items: center;
  margin-left: 8px;
}

.brand-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.brand-text {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.5px;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.brand-link:hover .brand-text {
  opacity: 0.8;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 4px;
}

.navbar-btn {
  transition: all 0.3s ease;
  border-radius: 8px;
}

.navbar-btn:hover {
  background: rgba(59, 130, 246, 0.15) !important;
  transform: translateY(-2px);
}

.navbar-icon {
  transition: all 0.3s ease;
  border-radius: 8px;
}

@media (max-width: 600px) {
  .brand-text {
    font-size: 1rem;
  }

  .navbar-actions {
    gap: 0px;
  }

  .navbar-btn {
    padding: 4px !important;
  }

  .navbar-icon {
    padding: 4px !important;
  }
}

@media (max-width: 480px) {
  .navbar-actions {
    gap: -2px;
  }

  .navbar-btn {
    padding: 2px !important;
  }
}
</style>
