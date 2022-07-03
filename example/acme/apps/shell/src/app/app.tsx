import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const User = React.lazy(() => import('user/Module'));

const Product = React.lazy(() => import('product/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/user">User PEP</Link>
        </li>

        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />

        <Route path="/user" element={<User />} />

        <Route path="/product" element={<Product />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
