import React from 'react';

async function read() {
  const resp = await fetch('http://localhost:1337/');
  return resp.json();
}

export default function useBackend() {
  const [data, setData] = React.useState<any>();
  const [error, setError] = React.useState<Error>();
  const [loading, setLoading] = React.useState(false);

  return {
    data,
    error,
    loading,

    read: () => {
      setLoading(true);
      read().then((next) => {
        setData(next);
        setLoading(false);
      }, (err) => {
        setLoading(false);
        setError(err instanceof Error ? err : new Error(err));
      });
    },
  };
}
