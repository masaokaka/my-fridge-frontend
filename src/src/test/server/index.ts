import { worker } from './browser';

export const initMocks = () => {
  if (import.meta.env.VITE_MODE === 'development') {
    worker.start({ onUnhandledRequest: 'bypass' });
  }
};
