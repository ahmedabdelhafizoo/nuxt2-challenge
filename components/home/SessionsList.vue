<template>
  <div class="sessions-list">
    <SessionCard
      v-for="(session, index) in sessions"
      :key="index"
      :session="session"
      :is-active="activeSessionId === session.id"
      @click.native="activeSessionId = session.id"
    />
    <div v-if="sessions.length === 0" class="empty-card">
      <inline-svg :src="require('@/assets/images/sessions/empty-session.svg')"></inline-svg>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="max-w-[205px]" v-html="$t('sessions.emptyMessage')"></p>
    </div>
  </div>
</template>

<script>
import SessionCard from './SessionCard.vue';
export default {
  name: 'SessionsList',
  components: { SessionCard },
  data() {
    return {
      activeSessionId: null,
    };
  },
  computed: {
    sessions() {
      return this.$store.getters['sessions/getFilteredSessions'];
    },
  },
};
</script>

<style lang="scss" scoped>
.empty-card {
  @apply mt-[25px] flex flex-col items-center rounded-[12px] p-[10px] text-center text-sm;
  border: 1px solid var(--border-grey);
}
</style>
