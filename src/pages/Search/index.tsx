import React, { useState } from 'react';
import { makeRequest } from '../../core/utils/request';
//import { useHistory } from 'react-router-dom';
import './styles.scss';

const Search = () => {
const [name, setName] = useState({});

const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
        
    setName(data => ({ ...data, [name]: value}));
}
  
const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
event.preventDefault();
const payload = {
...name, 
}
makeRequest({url: '/users/heniojunior', method: 'GET', data: payload})
}


    return (
 <form onSubmit={handleSubmit}>
<div className="admin-base-form card-base border-radius-16">
    <h1 className="base-form-title">
        Encontre um perfil Github
        <input
        name="login"
        type="text"
        className="form-control"
        onChange={handleOnChange}
        placeholder="Usuário Github"
        />
    </h1>
<div className="btn-styles">
    <button
    className="btn btn-primary"
    //onClick={handleAfter}
    >
        Encontrar
    </button>
</div>
</div>
</form>   
)
}

export default Search;