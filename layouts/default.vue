<template>
  <client-only>
    <div class="flex min-h-[100vh] flex-col items-center bg-base px-[15px] py-[30px] text-base">
      <div class="mx-auto w-[320px] max-w-[100%]">
        <div class="mb-4 flex items-center justify-between">
          <LanguageSwitcher />
          <!-- TODO: add dark mode component -->
          <button class="text-base text-2xl" @click="toggleDarkMode">
            {{ isDarkMode ? '&#9790;' : '&#9728;' }}
          </button>
        </div>
        <Nuxt />
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  data() {
    return {
      darkModeClass: '',
    };
  },
  head() {
    return {
      bodyAttrs: {
        class: this.$locale(),
      },
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$dir(),
        class: this.darkModeClass,
      },
    };
  },
  computed: {
    isDarkMode() {
      return this.darkModeClass === 'dark';
    },
  },
  methods: {
    toggleDarkMode() {
      this.darkModeClass = this.isDarkMode ? 'light' : 'dark';
    },
  },
};
</script>
