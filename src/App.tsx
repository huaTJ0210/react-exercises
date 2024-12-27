import './App.css';

interface IProps {
  title?: string;
}

// React.FC 函数组件类型
const App: React.FC<IProps> = (props) => {
  return (
    <>
      <span>{props.title || ''}</span>
      <span>hello react</span>
    </>
  );
};

export default App;
