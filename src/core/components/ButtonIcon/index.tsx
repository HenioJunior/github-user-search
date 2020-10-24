import React from 'react';
import './styles.scss';

type Props = {
  text: string;
}

const ButtonIcon = ( {text}: Props) => (
  <div className="d-flex">
    <button className="btn btn-primary btn-icon">
    <h5 className="btn-font">Começar</h5>
    </button>


  </div>
);

export default ButtonIcon;