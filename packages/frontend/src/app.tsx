import React from 'react';
import ReactDOM from 'react-dom';
import { foo, bar } from '@mono/shared';
import useBackend from './use-backend';

export function App() {
  const { read, ...rest } = useBackend();

  return (
    <>
      <h1>
        {foo}
      </h1>
      <button onClick={read} disabled={rest.loading} type="button">
        Load
      </button>
      <div>
        <code>
          <pre>
            {JSON.stringify(rest, null, 2)}
          </pre>
        </code>
      </div>
    </>
  );
}

export function mount() {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
}
