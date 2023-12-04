const Modal = (props) => {
  const { children, title, content, idModal } = props;
  return (
    <dialog id={idModal} className="modal bg-white/30 backdrop-blur-lg">
      <div className="modal-box bg-[#FFF0E7]">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="py-4">{content}</p>
        <div className="font-semibold">{children}</div>
      </div>
    </dialog>
  );
};

export default Modal;
