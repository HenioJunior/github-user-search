import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => (
  <div>
      <div className="text-title">
          Desafio do Capítulo 3, Bootcamp DevSuperior
      </div>
      <div className="text-subtitle">
          Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.
          Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.<br />
          Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: antforfigma@gmail.com
      </div>
       <Link to="/search">
          <ButtonIcon text="Começar" />
        </Link>
            
  </div>
);

export default Home;