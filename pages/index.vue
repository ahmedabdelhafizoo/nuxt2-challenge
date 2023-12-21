<template>
  <section class="rounded-[12px] bg-white px-[12px] py-[20px] shadow">
    <SessionsHeader />
    <SessionsSlider />
    <SessionsList />
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import { SLIDES_COUNT } from '@/constants/sessions';
import SessionsHeader from '@/components/home/SessionsHeader.vue';
import SessionsSlider from '@/components/home/SessionsSlider.vue';
import SessionsList from '@/components/home/SessionsList.vue';

export default {
  components: { SessionsHeader, SessionsSlider, SessionsList },
  created() {
    this.initSlidesItems(SLIDES_COUNT);
    this.initSessions();
  },
  methods: {
    ...mapActions({
      initSlidesItems: 'sessions/initSlidesItems',
      initSessions: 'sessions/initSessions',
    }),
  },
};
</script>
