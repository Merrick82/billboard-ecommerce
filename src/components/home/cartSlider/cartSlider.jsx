import './cartSlider.css';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../../../store';

function CartSlider({show, action}) {
  const [data, setData] = useContext(Store);
  const [cartTotal, setCartTotal] = useState(0);

  function calculateTotal() {
    let total = 0;
    data.items.forEach((item) => {
        total = total + item.quantity * item.item.price;
    });

    setCartTotal(total);
  }

  useEffect(() => {
    calculateTotal();
  }, [data]);

  return (
    <div className={`cartSlider ${show ? 'open' : 'close'} align` }>
      
      {data.items.length === 0 && <h3>El carrito se encuentra vacío!</h3>}
        
        {
          data.items.length !== 0 && data.items.map((item, i) => (
            <div className="container" key={i + Math.random()}>
              <div className="row" key={item.id}>
                <div className="col slider-custom-col slider-grid-example custom-text">
                  <p>{item.item.title}</p>
                </div>
                <div className="col slider-custom-col slider-grid-example custom-text">
                  <p>Cantidad: {item?.quantity}</p>
                </div>
                <div className="col slider-custom-col slider-grid-example custom-text">
                  <p>Precio: ${item.item.price}</p>
                </div>
              </div>
            </div>
        ))}

      <p className="result-text">Total Productos: {data.itemsQty}&nbsp; --- &nbsp;Importe: ${cartTotal}</p>
      <button onClick={action}>Cerrar widget</button>
    </div>
  );
}

export default CartSlider;