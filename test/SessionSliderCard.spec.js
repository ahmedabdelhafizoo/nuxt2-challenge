import { mount } from '@vue/test-utils';
import moment from 'moment';
import SessionSliderCard from '@/components/home/SessionSliderCard.vue';

describe('SessionSliderCard component', () => {
  test('renders the card with formatted title and subtitle', () => {
    const data = {
      date: new Date(),
    };
    const wrapper = mount(SessionSliderCard, {
      propsData: {
        data,
        isActive: true,
      },
      mocks: {
        $i18n: {
          t: (key) => key, // Mocking $i18n.t method for translation
        },
      },
    });

    // Assert the card content
    const card = wrapper.find('[data-test-id="card"]');
    expect(card.classes()).toContain('active');
    expect(card.text()).toContain('today'); // Assuming the translation key is 'sessions.today'
    expect(card.text()).toContain(moment(data.date).format('DD'));

    // Assert the subtitle span
    const subtitle = wrapper.find('[data-test-id="label"]');
    expect(subtitle.text()).toBe(moment(data.date).format('DD'));
  });
});
