import React, { useState } from 'react';

function Item(props) {
  const [inCart, setInCart] = useState(false);

  function toggleCart() {
    setInCart(prevInCart => !prevInCart);
  }

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {props.name} - {props.category}
      <button onClick={toggleCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
