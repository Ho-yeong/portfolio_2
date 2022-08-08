import 'react-i18next';
import en from './en.json';
import ko from './ko.json';
import jp from './jp.json';

declare module 'react-i18next' {
  // and extend them!
  interface CustomTypeOptions {
    // custom namespace type if you changed it
    defaultNS: 'en-US';
    // custom resources type
    resources: {
      en: typeof en;
      ko: typeof ko;
      jp: typeof jp;
    };
  }
}
