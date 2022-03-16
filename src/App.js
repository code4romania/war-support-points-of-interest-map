import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { en, ro, uk, ru } from 'make-plural/plurals';
import { logPageView } from './analyticsTracker';
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
  const history = useHistory();

  useEffect(() => {
    logPageView(history);
  }, [history]);

  return (
    <I18nProvider i18n={i18n} forceRenderOnLocaleChange={false}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </I18nProvider>
  );
};

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;
