import { mount } from '@vue/test-utils';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

describe('LanguageSwitcher component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(LanguageSwitcher, {
      mocks: {
        $i18n: {
          locale: 'en',
          setLocale: jest.fn(),
          localeProperties: () => ({}),
        },
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('switches language on click', () => {
    const languageLink = wrapper.find('[data-test-id="language-switcher"]');
    languageLink.trigger('click');
    expect(wrapper.vm.$i18n.setLocale).toHaveBeenCalledWith('ar');
  });
});
