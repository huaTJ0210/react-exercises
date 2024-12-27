import { useContext } from 'react';
import { ThemeContext } from './index';

const Index: React.FC = () => {
  const theme = useContext(ThemeContext);
  return <div>{theme}</div>;
};

export default Index;
