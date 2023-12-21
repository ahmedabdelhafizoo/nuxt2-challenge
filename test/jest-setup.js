import Vue from 'vue';
import { config } from '@vue/test-utils';

Vue.config.silent = true;

// Fix for "matchMedia not present, legacy browsers require a polyfill jest" error
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    };
  };

// Mock Nuxt components
config.mocks.$t = (i) => i;
config.mocks.$locale = () => 'en';
config.mocks.$dir = () => 'ltr';

global.config = config;
