import { useState } from 'react';
import Modal from './Models';
import Backdrop from './Backdrop';

function Todo(props){

  const [modalIsOpen , setModalIsOpen] =useState(false);
    function deleteHandler(){
        // console.log('clicked');
        // console.log(props.data);
        setModalIsOpen(true);
    }
    function closeModalHandler(){
      setModalIsOpen(false);
    }
    return(
        <div className='card'>
        <h2>{props.data}</h2>
        <div className="actions">
          <button className='btn' onClick={deleteHandler}>Delete</button>
        </div>
        {/* { modalIsOpen ?<Modal /> :null} */}
        {/* //is both are true then only it will render */}

        { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm = {closeModalHandler} />}  
        { modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
       
      </div>
    );
}
export default Todo;