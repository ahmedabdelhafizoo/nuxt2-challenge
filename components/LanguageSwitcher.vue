<template>
  <a href="#" class="language-switcher" data-test-id="language-switcher" @click.prevent="switchLanguage">
    <img :src="flagImage" width="25" alt="flag image" />
    {{ $t(`languages.${$i18n.locale}`) }}
  </a>
</template>

<script>
import moment from 'moment';
export default {
  name: 'LanguageSwitcher',
  computed: {
    flagImage() {
      return `https://flagcdn.com/${this.$i18n.localeProperties.flag}.svg`;
    },
  },
  methods: {
    switchLanguage() {
      const locale = this.$i18n.locale === 'en' ? 'ar' : 'en';
      this.$i18n.setLocale(locale);
      // set moment locale
      moment.locale(locale);
    },
  },
};
</script>

<style lang="scss" scoped>
.language-switcher {
  @apply inline-flex gap-2 rounded-[8px] py-[6px] px-[11px] shadow;
  @apply bg-white text-base font-medium transition duration-300 hover:bg-light;

  img {
    @apply h-[25px] w-[25px] rounded-[50%] object-cover;
  }
}
</style>
