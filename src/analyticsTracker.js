import ReactGA from 'react-ga';

export const initializeGA = () => {
  if (document.location.hostname !== 'harta.sprijindeurgenta.ro') {
    return;
  }
  ReactGA.initialize('G-W7RC2D7RJP');
};

export const logPageView = (history) => {
  history.listen((location) => {
    const page = location.pathname || window.location.pathname;
    ReactGA.set({ page });
    ReactGA.pageview(page);
  });
};
