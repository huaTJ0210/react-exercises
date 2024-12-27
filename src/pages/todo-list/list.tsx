import { useTasks } from './hooks';
import Item from './item';

const List: React.FC = () => {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Item task={task} />
        </li>
      ))}
    </ul>
  );
};

export default List;
