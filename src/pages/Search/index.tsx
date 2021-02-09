import ButtonIcon from 'core/components/ButtonIcon';
import { User } from 'core/types/User';
import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import './styles.scss';

const Search = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [user, setUser] = useState<User>();

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleClick = () => {
        setIsLoading(true);
        makeRequest({ url: `/${userName}` })
            .then(response => setUser(response.data))
            .finally(() => {
                setIsLoading(false)
            })
    }

    console.log(user);

    return (
        <div className="search-container">
            <div className="search-content">
                <h1 className="search-title">Encontre um perfil Github</h1>
                <input
                    value={userName}
                    type="text"
                    className="form-control mb-5"
                    onChange={handleOnChange}
                    placeholder="Usuário Github"
                />
                <Link to="/search" onClick={handleClick}>
                    <ButtonIcon text="Encontrar" />
                </Link>
            </div>
            <div className="d-flex search-detail-container">
                {isLoading ? <ImageLoader /> : (
                    <div>
                        <>
                            {
                                user &&
                                <>
                                    <img src={user?.avatar_url} alt={user?.login} className="search-detail-image" />
                                    <a href={user?.html_url} target="_blank" rel="noreferrer" className="search-button">
                                        <ButtonIcon text="Ver perfil" />
                                    </a>
                                </>
                            }
                        </>
                    </div>
                )}
                {isLoading ? <InfoLoader /> : (
                    <div>
                        <>
                            {
                                user &&
                                <>
                                    <div className="d-flex">
                                        <div className="search-info-min">
                                            <h5 className="search-info-text">
                                                {`Respositórios públicos: ${user.public_repos}`}
                                            </h5>
                                        </div>
                                        <div className="search-info-min">
                                            <h5 className="search-info-text">
                                                {`Seguidores: ${user.followers}`}
                                            </h5>
                                        </div>
                                        <div className="search-info-min">
                                            <h5 className="search-info-text">
                                                {`Seguindo: ${user.following}`}
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="search-info-container">
                                        <h1 className="search-info-title">
                                            Informações
                                        </h1>
                                        <div className="search-info-content">
                                            <h1 className="search-info-text2">
                                                <strong>Empresa:</strong> {user.company}
                                            </h1>
                                        </div>
                                        <div className="search-info-content">
                                            <h1 className="search-info-text2">
                                                <strong>Website/Blog:</strong> {user.blog}
                                            </h1>
                                        </div>
                                        <div className="search-info-content">
                                            <h1 className="search-info-text2">
                                                <strong>Localidade:</strong> {user.location}
                                            </h1>
                                        </div>
                                        <div className="search-info-content">
                                            <h1 className="search-info-text2">
                                                <strong>Membro desde:</strong> {user.created_at}
                                            </h1>
                                        </div>
                                    </div>
                                </>
                            }
                        </>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;