<template>
  <div class="card" data-test-id="card" :class="{ active: isActive }">
    {{ formattedData.title }}
    <span class="label" data-test-id="label">{{ formattedData.subTitle }}</span>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'SessionSliderCard',
  props: {
    data: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    formattedData() {
      const date = this.data.date;
      const isToday = moment(date, 'day').isSame(new Date(), 'day');
      const title = isToday ? this.$i18n.t('sessions.today') : moment(date).format('ddd');
      const subTitle = moment(date).format('DD');
      return {
        ...this.data,
        title,
        subTitle,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  @apply mx-[5px] flex cursor-pointer flex-col items-center gap-[5px] rounded-[12px] p-[8px];
  @apply text-center text-sm font-medium transition hover:bg-light;
  border: 2px solid var(--border-grey);

  .label {
    @apply rounded-[8px] bg-grey py-[2px] px-[8px] text-base-700 transition;
  }

  &.active {
    border-color: var(--primary-color);
  }

  &.active .label {
    @apply bg-primary text-white;
  }
}
</style>
