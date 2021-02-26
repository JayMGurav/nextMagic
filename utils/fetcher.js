// export default function fetcher(route) {
//   /* our token cookie gets sent with this request */
//   return fetch(route)
//     .then((r) => r.ok && r.json())
//     // .then((user) => user || null);
// }

const fetcher = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    credentials: 'same-origin'
  });

  return res.json();
};

export default fetcher;