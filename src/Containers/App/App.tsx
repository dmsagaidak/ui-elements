import React, {useState} from 'react';
import Modal from '../../Components/Modal/Modal';
import Alert from "../../Components/Alert/Alert";

function App() {
  const [showModal, setShowModal] = useState(false);
  const cancel = () => {setShowModal(false)}

  const [showAlert, setShowAlert] = useState(false);
  const closeAlert = () => {setShowAlert(false)};

  return (
      <>
        <div className="navbar navbar-dark bg-primary">
          <div className="container-fluid">
            <span className="navbar-brand">UI Elements</span>
          </div>
        </div>
        <div style={{margin: '30px 20px'}}>
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
          <Alert type="danger"
                 onDismiss={closeAlert}
                 show={showAlert}>
            This is a danger type alert
          </Alert>

          <Alert type="success"
                 onDismiss={closeAlert}
                 show={showAlert}>
            This is a success type alert
          </Alert>

          <Alert type="primary"
                 show={showAlert}>
            This is a primary type alert
          </Alert>

          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >Show modal
          </button>

          <button
            className="btn btn-success ms-4"
            onClick={() => setShowAlert(true)}
          >Show alerts
          </button>
        </div>


      </>

  );
}

export default App;
