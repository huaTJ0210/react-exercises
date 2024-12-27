import { createBrowserRouter } from 'react-router-dom';

import App from '@/App.tsx';
import Basic from '@/pages/basic';
import ToDoList from '@/pages/todo-list';
import ReduxPage from '@/pages/redux';
import UseCallbackPage from '@/pages/hooks/use-callback-memo';
import UseDeferredValuePage from '@/pages/hooks/use-deferred-value/index';
import QuestionPage from '@/pages/question';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/basic',
    element: <Basic />
  },
  {
    path: '/todo',
    element: <ToDoList />
  },
  {
    path: '/redux',
    element: <ReduxPage />
  },
  {
    path: '/usecallback',
    element: <UseCallbackPage />
  },
  {
    path: '/usedeferredvalue',
    element: <UseDeferredValuePage />
  },
  {
    path: '/question',
    element: <QuestionPage />
  }
]);

export default router;
