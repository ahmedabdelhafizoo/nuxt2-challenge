import moment from 'moment';

export default ({ app }, inject) => {
  const dir = () => app.i18n.locales.find((x) => x.code === app.i18n.locale)?.dir;
  inject('dir', dir);
  const locale = () => app.i18n.locale;
  inject('locale', locale);
  moment.locale(locale());
};
