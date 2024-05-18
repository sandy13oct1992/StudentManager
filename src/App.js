import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FrontPage from './Component/FrontPage';
import Cart from './Component/Cart';


function App() {
  const [isShown, setIsShown] = useState(false);

  const showCartHandler = () => {
    setIsShown(true);
  }

  const hideCartHandler = () => {
    setIsShown(false);
  }

  return (
    <div>
     <FrontPage onShow={showCartHandler} />
     {isShown && <Cart onClose = {hideCartHandler} />}
    </div>
  );
}

export default App;
