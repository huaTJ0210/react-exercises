import { store } from './store';
import { Provider } from 'react-redux';
import Counter from './counter/index';

export default function ReduxPage() {
  return (
    <Provider store={store}>
      <Counter></Counter>
    </Provider>
  );
}
