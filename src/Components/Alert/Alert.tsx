import React from 'react';

interface Props {
  show: boolean;
  onDismiss: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({show, onDismiss}) => {
  return (
    <>
      <div className="alert alert-success alert-dismissible fade show"
           style={{display: show? 'block': 'none'}}
      >
        This is a success type alert
        <button type="button" className="btn-close" onClick={onDismiss}></button>
      </div>
    </>
  );
};

export default Alert;