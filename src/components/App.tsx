import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Provider } from 'react-redux';
import { store } from '../store';
import CellList from './CellList';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <CellList />
    </Provider>
  );
};

export default App;
