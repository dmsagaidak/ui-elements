import React from 'react';

interface Props {
  type: string;
  label: string;
  onClose: React.MouseEventHandler;
  onContinue: React.MouseEventHandler;
}

const Btns: React.FC<Props> = ({type, label, onClose, onContinue}) => {
  const classNames = ['btn'];
  let btnFunction;

  if(type=== 'primary'){
    classNames.push('btn-primary');
    btnFunction = onContinue;
  } else if(type === 'danger'){
    classNames.push('btn-danger')
    btnFunction = onClose;
  }



  return (
    <>
      <button
      className={classNames.join(' ')}
      onClick={btnFunction}
      >
        {label}
      </button>
    </>
  );
};

export default Btns;