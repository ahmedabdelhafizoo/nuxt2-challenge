<template>
  <div class="card" :class="{ active: isActive }" data-test-id="session-card">
    <div class="card__header">
      <img :src="session.company_logo" alt="logo" width="45" height="45" class="card__img" />
      <div class="text-sm">
        <h3 class="font-bold">{{ session.company_name }}</h3>
        <p>{{ session.company_description }}</p>
      </div>
    </div>
    <div class="text-base-700">
      <span class="inline-block" :class="$dir() === 'rtl' && 'rotate-180'">→</span>
      {{ formatDateTime(session.start_date) }} -
      {{ formatDateTime(session.end_date) }}
    </div>

    <div class="card__actions">
      <a :href="session.zoom_link" target="_blank" class="btn btn--primary" data-test-id="join-btn">{{
        $t('buttons.join')
      }}</a>
      <button class="btn" data-test-id="dismiss-btn" @click.stop="removeSession">
        {{ $t('buttons.dismiss') }}
      </button>
    </div>
  </div>
</template>

<script>
import { formatDateTime } from '~/helpers/dates';
export default {
  name: 'SessionCard',
  props: {
    session: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    formatDateTime,
    removeSession() {
      this.$store.commit('sessions/removeSession', this.session.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply mt-[16px] block cursor-pointer rounded-[12px] p-[10px] transition hover:bg-light;
  border: 1px solid var(--border-grey);

  &__header {
    @apply mb-[8px] flex items-start gap-[8px];
  }

  &__img {
    @apply min-w-[45px] rounded-[12px] object-cover;
    border: 1px solid var(--border-grey);
  }
  &__actions {
    @apply h-[0] origin-bottom  overflow-hidden opacity-30 transition-all duration-300 ease-in-out;
    border-top: 1px solid var(--border-grey);
  }

  &.active {
    border-color: var(--primary-color);

    .card__actions {
      @apply mt-[10px] inline-flex h-auto scale-100 cursor-auto gap-[10px] pt-[10px] opacity-100;
    }
  }
}
</style>
