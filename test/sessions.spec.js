import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import SessionsStore from '@/store/sessions/index';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('Sessions Store', () => {
  let store;
  const sessionsList = [
    {
      company_name: 'Baraka (YC S21)-1',
      company_logo:
        'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png',
      company_description: 'Investing. Empowered.',
      start_date: new Date(),
      end_date: new Date(),
      zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
      id: '0-0',
    },
  ];

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        sessions: SessionsStore,
      },
    });
  });

  it('initialized with default values', () => {
    expect(store.getters['sessions/getSlidesItems']).toEqual([]);
    expect(store.getters['sessions/getSessions']).toEqual([]);
    expect(store.getters['sessions/getActiveSlideIndex']).toEqual(0);
  });

  it('successfully init slides items', () => {
    expect(store.getters['sessions/getSlidesItems'].length).toEqual(0);
    store.dispatch('sessions/initSlidesItems', 7);
    expect(store.getters['sessions/getSlidesItems'].length).toEqual(8);
  });

  it('successfully filter sessions', () => {
    store.dispatch('sessions/initSlidesItems', 7);
    store.commit('sessions/setActiveSlideIndex', 0);
    expect(store.getters['sessions/getSessions'].length).toEqual(0);
    expect(store.getters['sessions/getFilteredSessions'].length).toEqual(0);
    store.commit('sessions/setSessions', sessionsList);
    expect(store.getters['sessions/getSessions'].length).toEqual(sessionsList.length);
    expect(store.getters['sessions/getFilteredSessions'].length).toEqual(1);
  });
});
