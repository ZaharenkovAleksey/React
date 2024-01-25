import React from 'react';
import './Product.css';


function Product({ id, image, title, price, setBasket, setBasketPrice, setBasketQty, basket, setMessage, setModalBox, token }) {

  const product = {
    id: id,
    image: image,
    title: title,
    price: price
  }

  function addToBasket() {
    const index = basket.findIndex(value => value.id === product.id)
    // console.debug(index)

    if (index === -1) {
      setBasket(prevState => [...prevState, product])
      setBasketPrice(current => current + product.price)
      setBasketQty(current => current + 1)
    } else {
      return
    }

    setTimeout(() => {
      setMessage('Товар добавлен в корзину.')
      setModalBox('MessageBox')
    }, 100)
  }

  function AddToBasketButton() {
    if (token !== null) {
      return (
        <>
          <button className='buy' onClick={() => addToBasket()}>В корзину</button>
        </>
      )
    } else {
      return (
        <>
          <p>Для заказа необходима авторизация</p>
        </>
      )
    }
  }

  return (
    <div className="Product">
      
      <img width="200px" src="https://shop-cdn1-2.vigbo.tech/shops/177624/products/20504614/images/2-e0198eae48357242c868df7032a65e91.png" alt='Изображение товара' />
      <h1>{product.title}</h1>
      <p>{product.price} ₽</p>
      <AddToBasketButton />

    </div>
  );
}

export default Product;