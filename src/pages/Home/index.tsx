import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const Home = () => {
  const history = useHistory();
  
  const handleCreate = () => {
    history.push('/before');
  }

return (
  <div className="row">
  <div className="col-6">
    <h1 className="text-title">
      Desafio do Capítulo 3,<br />
      Bootcamp DevSuperior
    </h1>
    <p className="text-subtitle">
    Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.<br />
    <br />
    Favor observar as instruções passadas no capítulo sobre a elaboração<br />
    deste projeto.<br />
    <br />
    Este design foi adaptado a partir de Ant Design System for Figma, de<br />
    Mateusz Wierzbicki:
    <a href="https://mail.google.com">antforfigma@gmail.com</a>;
    </p>
    <button className="btn btn-primary btn-lg btn-icon btn-font" onClick={handleCreate}>
      Começar
    </button>

  </div>
</div>
)
}

export default Home;
