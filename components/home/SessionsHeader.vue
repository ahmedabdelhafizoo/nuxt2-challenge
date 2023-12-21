<template>
  <header class="mb-[25px] flex items-center justify-between gap-[15px]">
    <div>
      <h1 class="font-bold">{{ $t('sessions.title') }}</h1>
      <p class="text-xs">{{ selectedDate }}</p>
    </div>

    <button class="rounded-full px-2 py-2 text-base transition hover:bg-light focus:bg-light focus:shadow-lg">
      <inline-svg :src="require('@/assets/icons/svg/plus.svg')"></inline-svg>
    </button>
  </header>
</template>

<script>
import { formatLongDate } from '@/helpers/dates';

export default {
  name: 'SessionsHeader',
  computed: {
    selectedDate() {
      return formatLongDate(this.$store.getters['sessions/getActiveSlideDate']);
    },
  },
};
</script>
