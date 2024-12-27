import { memo } from 'react';
interface IProps {
  query: string;
}
const ChildPage: React.FC<IProps> = ({ query }) => {
  console.log('Child rendered');
  let count = 0;
  for (let i = 0; i < 10000000; i++) {
    count++;
  }
  return (
    <div>
      <ul>
        {Array(10000)
          .fill('a')
          .map((item, index) => (
            <li key={item + index}>{query}</li>
          ))}
      </ul>
      {count}
    </div>
  );
};

export default memo(ChildPage);
