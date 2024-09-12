"use client"
import { useShowModal } from "../context/ModalShow";
const BtnCall = () => {
    const {toggleModal} = useShowModal();
  return (
    <button className="btn-animation mt-5 " onClick={() => toggleModal()}>
      تماس
    </button>
  );
};
 
export default BtnCall