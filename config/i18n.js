const I18N_CONFIG = {
  strategy: 'prefix',
  skipSettingLocaleOnNavigate: true,
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      file: 'en.json',
      dir: 'ltr',
      name: 'English',
      flag: 'us',
    },
    {
      code: 'ar',
      iso: 'ar-SA',
      file: 'ar.json',
      dir: 'rtl',
      name: 'عربي',
      flag: 'sa',
    },
  ],
  lazy: true,
  seo: true,
  langDir: 'locales/',
  defaultLocale: 'en',
  silentFallbackWarn: true,
  vueI18n: {
    fallbackLocale: 'en',
  },
};

export default I18N_CONFIG;
