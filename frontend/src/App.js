import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main';
import Footer from './components/Footer';
import Basket from './views/Basket';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import Registration from './components/Registration';
import Cabinet from './views/Cabinet';
import MessageBox from './components/MessageBox';
import OrderBox from './components/OrderBox';
import AddProductBox from './components/AddProductBox';

function App() {

  const [page, setPage] = useState('Main')
  const [modalBox, setModalBox] = useState('none')
  const [basket, setBasket] = useState([])
  const [basketPrice, setBasketPrice] = useState(0)
  const [basketQty, setBasketQty] = useState(0)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [message, setMessage] = useState('')

  const pages = {
    Main: <Main setBasket={setBasket} setBasketPrice={setBasketPrice} setBasketQty={setBasketQty} basket={basket} setMessage={setMessage} setModalBox={setModalBox} token={token} />,
    Basket: <Basket basket={basket} setBasket={setBasket} basketPrice={basketPrice} setBasketPrice={setBasketPrice} basketQty={basketQty} setBasketQty={setBasketQty} setModalBox={setModalBox} />,
    Cabinet: <Cabinet token={token} />
  }

  const modalBoxes = {
    none: null,
    Login: <ModalBox setModalBox={setModalBox}><Login setModalBox={setModalBox} setToken={setToken} setMessage={setMessage} /></ModalBox>,
    Registration: <ModalBox setModalBox={setModalBox}><Registration setModalBox={setModalBox} setMessage={setMessage} /></ModalBox>,
    MessageBox: <ModalBox setModalBox={setModalBox}><MessageBox setModalBox={setModalBox} message={message} /></ModalBox>,
    OrderBox: <ModalBox setModalBox={setModalBox}><OrderBox setMessage={setMessage} setModalBox={setModalBox} setBasket={setBasket} setBasketQty={setBasketQty} setBasketPrice={setBasketPrice} /></ModalBox>,
    AddProductBox: <ModalBox setModalBox={setModalBox}><AddProductBox setModalBox={setModalBox} setMessage={setMessage} /></ModalBox>
  }

  return (
    <div className="App">
            <a href="*" ><img class="image1" width="100%" src="https://sun9-43.userapi.com/impg/6ACkGqzLrnuAHKQdG0JSmUKseaszUuytuzVwRA/DxDLTYCyUiU.jpg?size=2000x75&quality=96&sign=662b7b8c2d65cc952e8d50315a3cccf8&type=album"></img></a>
      <Header setPage={setPage} setModalBox={setModalBox} token={token} setToken={setToken} />
      {pages[page]}
      {modalBoxes[modalBox]}
      <Footer />
      
    </div>
  );
}

export default App;
