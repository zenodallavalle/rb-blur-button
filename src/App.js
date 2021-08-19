import { useState } from 'react';
import * as rb from 'react-bootstrap';

import Button from './lib/components/Button';

import npmIcon from './img/npm.png';
import gitHubIcon from './img/github.png';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='p-2'>
      <div className='d-flex justify-content-between'>
        <div></div>
        <div>
          <span className='p-2'>
            <a
              href='https://www.npmjs.com/package/rb-blur-button'
              target='_blank'
              rel='noreferrer'
            >
              <img src={npmIcon} alt='npm' style={{ height: 35 }}></img>
            </a>
          </span>
          <span className='p-2'>
            <a
              href='https://github.com/zenodallavalle/rb-blur-button'
              target='_blank'
              rel='noreferrer'
            >
              <img src={gitHubIcon} alt='npm' style={{ height: 35 }}></img>
            </a>
          </span>
        </div>
      </div>
      <div className='text-center'>
        <h4 className='display-4'>React Bootstrap Blur Button</h4>
        <hr></hr>
        <p>
          The current count is{' '}
          <rb.Badge pill variant='dark'>
            {count}
          </rb.Badge>
        </p>

        <div className='d-flex justify-content-around'>
          <div>
            <p>
              This is <span className='text-primary'>rb-blur-button</span>, try
              to click me!
            </p>
            <Button
              onClick={(e) => setCount((c) => c + 1)}
              className='px-3 mx-1'
            >
              Increment with automatic blur
            </Button>
            {count > 0 && <p>As you can see I'll instantly blur</p>}
          </div>
          <div>
            <p> This is the normal react-bootstrap component</p>
            <rb.Button
              onClick={(e) => setCount((c) => c + 1)}
              className='px-3 mx-1'
            >
              Increment without automatic blur
            </rb.Button>
          </div>
        </div>
        {count > 0 && (
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
        )}
      </div>
    </div>
  );
}

export default App;
