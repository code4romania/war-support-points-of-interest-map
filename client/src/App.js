import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { en, ro, uk, ru } from 'make-plural/plurals';

import Home from './containers/home';
import NotFound from './containers/404/404';
import './styles/theme.scss';

import { messages as messagesRo } from './locales/ro/messages';

i18n.loadLocaleData({
  en: { plurals: en },
  ro: { plurals: ro },
  uk: { plurals: uk },
  ru: { plurals: ru },
});
i18n.load({
  ro: messagesRo,
});
i18n.activate('ro');

const App = () => {
  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </I18nProvider>
  );
};

export default App;
