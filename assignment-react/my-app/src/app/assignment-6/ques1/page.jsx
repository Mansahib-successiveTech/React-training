'use client';

import dynamic from 'next/dynamic';

const CounterWithStep = dynamic(() => import('@/components/CounterWithStep'), {
  loading: () => <p>Loading...</p>
});

export default function Home() {
  return (
    <div>

      <CounterWithStep />
    </div>
  );
}
