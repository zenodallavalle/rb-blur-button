import { useState } from 'react';

import Button from './lib/components/Button';

import npmIcon from './img/npm.png';
import gitHubIcon from './img/github.png';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div></div>
        <div>
          <span className='p-1'>
            <a href='npm'>
              <img src={npmIcon} alt='npm' style={{ height: 35 }}></img>
            </a>
          </span>
          <span className='p-1'>
            <a href='https://github.com/zenodallavalle/rb-blur-button'>
              <img src={gitHubIcon} alt='npm' style={{ height: 35 }}></img>
            </a>
          </span>
        </div>
      </div>
      <div className='container-fluid m-4 text-center'>
        <h4 className='display-4'>React Bootstrap Blur Button</h4>
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
            <p>As you can see I'll instantly blur</p>
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
    </div>
  );
}

export default App;
