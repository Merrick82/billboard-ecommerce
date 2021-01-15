import './modal.css';

const Modal = ({ handleClose, show, children }) => {
    let showHideClassName = show ? "modal display-block" : "modal display-none";
 
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button type="button" className="close" onClick={handleClose}>
            Cerrar
          </button>
        </section>
      </div>
    );
  };

export default Modal;