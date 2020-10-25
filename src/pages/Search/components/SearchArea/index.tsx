import React, { useState } from 'react';
import { UserResponse } from 'core/utils/types/Github';
import { makeRequest } from 'core/utils/request';
import ButtonIcon from 'core/components/ButtonIcon';
import SearchLoader from '../SearchLoaders';
import SearchResult from '../SearchResult';
import './styles.scss';

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
        <div className="search-area-content">
            <h1 className="search-area-title">
            Encontre um perfil Github
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="form-container">
                    <input
                    type="text"
                    className="search-area-input-text"
                    required
                    value={search}
                    onChange={handleOnChange}
                    placeholder="Usuário Github"
                    />
                <div className="form-content-button">
                    <span>
                    <ButtonIcon text="Encontrar" />
                    </span>
                </div>
                </div>
            </form>
        </div>
        <div className="search-content-result">
            {isLoading ? <SearchLoader /> : (
                <>
                    <div>
                        {userData && (
                            <div>
                            <SearchResult 
                                html_url = {userData.html_url}
                                avatar_url = {userData.avatar_url}
                                public_repos = {userData.public_repos}
                                followers = {userData.followers}
                                following = {userData.following}
                                company = {userData.company}
                                blog = {userData.blog}
                                location = {userData.location}
                                created_at = {userData.created_at}
                        />
                            </div>
                        )}
                    </div>
                </>
            )}

        </div>
    </div>
    );
 }
 
 export default SearchArea;