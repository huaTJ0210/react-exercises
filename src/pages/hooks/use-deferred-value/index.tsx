import { useState, useDeferredValue, Suspense } from 'react';
import Child from './child';

const Index: React.FC = () => {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  console.log('query', query);
  console.log('deferredQuery', deferredQuery);

  return (
    <Suspense>
      <div>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <Child query={deferredQuery} />
      </div>
    </Suspense>
  );
};

export default Index;
