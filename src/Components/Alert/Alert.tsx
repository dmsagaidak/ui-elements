import React from 'react';

interface Props extends React.PropsWithChildren{
  type: string;
  show: boolean;
  onDismiss?: React.MouseEventHandler;
}

const Alert: React.FC<Props> = ({type, show, onDismiss, children}) => {
  const classNames = ["alert alert-dismissible fade show"];

  if (type === 'success') {
    classNames.push('alert-success ');
  } else if (type === 'primary') {
    classNames.push('alert-primary');
  } else if (type === 'danger') {
    classNames.push('alert-danger');
  }

  let btnStyle = {display: 'block'}

  if (onDismiss === undefined){
    btnStyle = {display: 'none'};
  }

  return (
    <>
      <div className={classNames.join(' ')}
           style={{display: show? 'block': 'none'}}
      >
        {children}
        <button type="button" className="btn-close" style={btnStyle} onClick={onDismiss}></button>
      </div>
    </>
  );
};

export default Alert;