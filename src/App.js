import { useState } from 'react';

import Button from './lib/components/Button';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='container-fluid m-4 text-center'>
      <h4 className='display-4'>React Bootstrap Unblur Button</h4>
      <hr></hr>
      <p>
        The current count is <span>{count}</span>
      </p>
      <p>This is the componenet, try to Click me!</p>
      <p>
        <Button onClick={(e) => setCount((c) => c + 1)} className='px-3'>
          Increment
        </Button>
      </p>
      {count > 0 && (
        <div>
          <p>As you can see I won't keep focus</p>
          <p>
            <Button
              onClick={(e) => setCount(0)}
              variant='danger'
              size='sm'
              className='px-3'
            >
              Reset
            </Button>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
