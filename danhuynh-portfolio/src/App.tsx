import { useState } from 'react';

// Components
import Section1 from './components/section1';

// Assets
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

// Styles
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return <Section1 />;
}

export default App;
