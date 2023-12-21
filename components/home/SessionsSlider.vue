<template>
  <div class="sessions-slider">
    <VueSlickCarousel v-bind="carouselSettings">
      <template #prevArrow>
        <span class="sessions-slider__arrow">
          <inline-svg :src="require('@/assets/icons/svg/chevron-right.svg')"></inline-svg>
        </span>
      </template>
      <template #nextArrow>
        <span class="sessions-slider__arrow rotate-180">
          <inline-svg :src="require('@/assets/icons/svg/chevron-right.svg')"></inline-svg>
        </span>
      </template>
      <div v-for="(slide, index) in slidesItems" :key="index">
        <SessionSliderCard
          :data="slide"
          :is-active="index === activeSlideIndex"
          @click.native="setActiveSlideIndex(index)"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import { mapGetters, mapMutations } from 'vuex';
import SessionSliderCard from '@/components/home/SessionSliderCard';
export default {
  name: 'SessionsSlider',
  components: { VueSlickCarousel, SessionSliderCard },
  computed: {
    ...mapGetters({
      activeSlideIndex: 'sessions/getActiveSlideIndex',
      slidesItems: 'sessions/getSlidesItems',
    }),
    carouselSettings() {
      const isRtl = this.$dir() === 'rtl';
      return {
        infinite: false,
        arrows: true,
        speed: 150,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: isRtl ? this.slidesItems.length - 3 : 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              initialSlide: isRtl ? this.slidesItems.length - 3 : 0,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              initialSlide: isRtl ? this.slidesItems.length - 2 : 0,
            },
          },
          {
            breakpoint: 375,
            settings: {
              slidesToShow: 1,
              initialSlide: isRtl ? this.slidesItems.length - 1 : 0,
            },
          },
        ],
      };
    },
  },

  methods: {
    ...mapMutations({
      setActiveSlideIndex: 'sessions/setActiveSlideIndex',
    }),
  },
};
</script>

<style lang="scss">
@import 'vue-slick-carousel/dist/vue-slick-carousel.css';
</style>

<style lang="scss" scoped>
.sessions-slider {
  .slick-slider {
    @apply flex items-center gap-[5px];
  }
  &__arrow {
    @apply inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center text-disabled hover:text-base;

    &.slick-disabled {
      @apply cursor-not-allowed opacity-50;
    }
  }
}
</style>
