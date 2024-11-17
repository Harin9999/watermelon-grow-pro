import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-V2X5FNE6KW');
};

export const logPageView = (path: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: path,
    title: document.title
  });
};

export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label
  });
};