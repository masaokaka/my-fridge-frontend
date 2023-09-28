import { AppProvider } from './providers/app';
import { AppRoutes } from './routes';
import { initMocks } from './test/server';

initMocks();

const App = () => (
  <AppProvider>
    <AppRoutes />
  </AppProvider>
);

export default App;
