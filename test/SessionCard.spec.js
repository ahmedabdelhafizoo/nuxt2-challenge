import { mount } from '@vue/test-utils';
import SessionCard from '@/components/home/SessionCard.vue';

describe('SessionCard component', () => {
  let wrapper;
  let mockCommit;

  beforeEach(() => {
    mockCommit = jest.fn();

    wrapper = mount(SessionCard, {
      propsData: {
        session: {
          id: 1,
          company_name: 'Baraka (YC S21)',
          company_logo:
            'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png',
          company_description: 'Investing. Empowered.',
          start_date: new Date(),
          end_date: new Date(),
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        isActive: true,
      },
      mocks: {
        $store: {
          commit: mockCommit,
        },
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('has active class', () => {
    expect(wrapper.find("[data-test-id='session-card']").element.className).toContain('active');
  });

  it('call removeSession on dismiss btn clicked', async () => {
    const removeSession = jest.spyOn(wrapper.vm, 'removeSession');
    await wrapper.find('[data-test-id="dismiss-btn"]').trigger('click');
    expect(removeSession).toHaveBeenCalled();
    // commit should be called with removeSession action
    expect(mockCommit).toHaveBeenCalledWith('sessions/removeSession', wrapper.vm.session.id);
  });

  it('has join link', () => {
    expect(wrapper.find('[data-test-id="join-btn"]')).toBeTruthy();
  });
});
