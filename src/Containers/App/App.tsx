import React, {useState} from 'react';
import Modal from '../../Components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);

  const cancel = () => {setShowModal(false)}

  return (
      <>
        <div className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand">UI Elements</span>
          </div>
        </div>
        <div style={{marginTop: '30px', marginLeft: '20px'}}>
          <Modal onClose={cancel} show={showModal} title="My modal">
            <div className="modal-body">
              Content
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                onClick={cancel}
              >
                Cancel
              </button>
            </div>
          </Modal>
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>Show modal</button>
        </div>


      </>

  );
}

export default App;
