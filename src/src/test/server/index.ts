import { worker } from './browser';

export const initMocks = () => {
  if (import.meta.env.MODE === 'development') {
    worker.start({ onUnhandledRequest: 'bypass' });
  }
};
