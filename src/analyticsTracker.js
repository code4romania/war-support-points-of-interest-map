import ReactGA from 'react-ga';

export const initializeGA = () => {
  if (document.location.hostname !== 'harta.dopomoha.ro') {
    return;
  }
  ReactGA.initialize('G-Z11NZKSZQ7');
};

export const logPageView = (history) => {
  history.listen((location) => {
    const page = location.pathname || window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  });
};
