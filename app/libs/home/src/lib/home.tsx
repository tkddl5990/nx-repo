import React from 'react';

export function Home({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) {
  return (
    <div>
      <h1>이곳은 lib / Home 컴포넌트</h1>
      {children}
    </div>
  );
}

export default Home;
