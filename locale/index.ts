import { I18n, TranslateOptions } from 'i18n-js';

const i18n = new I18n({
  en: { welcome: 'Hello' },
  ar: { welcome: 'مرحبا' },
});

export const translate = (value: string, config?: TranslateOptions) =>
  i18n.t(value, config);

export default i18n;
