import React, {useState} from 'react';
import Modal from '../../Components/Modal/Modal';
import Alert from "../../Components/Alert/Alert";
import Btns from "../../Components/Btns/Btns";

function App() {
  const [showModal, setShowModal] = useState(false);
  const cancel = () => {setShowModal(false)}

  const [showAlert, setShowAlert] = useState(false);
  const closeAlert = () => {setShowAlert(false)};
  const onContinue = () =>{setShowAlert(true)
  setShowModal(false)};

  const [btns, setBtns] = useState([
    {type: 'primary', label: 'Continue', onClick: onContinue},
    {type: 'danger', label: 'Close', onClick: cancel}
  ])

  const btnsList: React.ReactNode = btns.map((btn) => (
    <Btns
      type={btn.type}
      label={btn.label}
      onClose={cancel}
      onContinue={onContinue}
    />
  ))

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
              {btnsList}
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
