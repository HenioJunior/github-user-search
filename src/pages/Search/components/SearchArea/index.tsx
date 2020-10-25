import React, { useState } from 'react';
import { UserResponse } from 'core/utils/types/Github';
import { makeRequest } from 'core/utils/request';

const SearchArea = () => {
    const [search, setSearch] = useState('');
    const [userData, setUserData] = useState<UserResponse>();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        setIsLoading(true);
        makeRequest({url:`${search}`})
        .then(useResponse => setUserData(useResponse.data))
        .finally(() => {
            setIsLoading(false);
        })
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    }

    return (
        <div className="search-area-container">
        
        
        </div>


    );
 }
 
 export default SearchArea;