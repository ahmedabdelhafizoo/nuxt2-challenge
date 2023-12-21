import { mount } from '@vue/test-utils';
import Sessions from '@/pages/index.vue';

// Mock child components
const SessionsHeader = {
  render: () => {},
};
const SessionsSlider = {
  render: () => {},
};
const SessionsList = {
  render: () => {},
};

describe('Sessions', () => {
  let wrapper;
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();

    wrapper = mount(Sessions, {
      components: {
        SessionsHeader,
        SessionsSlider,
        SessionsList,
      },
      mocks: {
        $store: {
          dispatch: mockDispatch,
        },
      },
    });
  });

  it('renders correctly', () => {
    expect(wrapper.vm).toBeTruthy();
  });

  it('calls initSlidesItems and initSessions actions on created', () => {
    expect(mockDispatch).toHaveBeenCalledWith('sessions/initSlidesItems', expect.any(Number));
    expect(mockDispatch).toHaveBeenCalledWith('sessions/initSessions');
  });
});
