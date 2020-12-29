import './cartSlide.css';

function CartSlide({show, action}) {
    return (
        <div className={`widgetCart ${show ? 'open' : 'close'}`}>
            <p>Soy un widget</p>
            <button onClick={action}>Cerrar widget</button>
        </div>
    )
}

export default CartSlide;