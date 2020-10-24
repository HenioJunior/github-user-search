import React from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const BaseForm = () => {
    const history = useHistory();
    
    const handleAfter = () => {
        history.push('/after');
    }

return (
    
<div className="admin-base-form card-base border-radius-16">
          <h1 className="base-form-title">
              Encontre um perfil Github
              <input type="text" className="form-control" />
            </h1>
        <div className="btn-styles">
            <button
            className="btn btn-primary"
            onClick={handleAfter}
            >
                Encontrar
            </button>
        </div>
        </div>

)
}

export default BaseForm;