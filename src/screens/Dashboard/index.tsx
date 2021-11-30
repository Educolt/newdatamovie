import React, { useEffect, useState } from 'react';

// components
import { Card } from '../../components/Card';
import { MovieCardModal } from '../../components/MovieCardModal'

// styled components
import {
    Container, 
    SearchInput,
    Header,
    Icon,
    ListContainer,
    ListWrapper,
    Title,
    Carrousel
} from './styles';

// rapidapi
import { rapidApi } from '../../services/rapidApi'

interface MovieProps {
    title: string,
    description: string,
    uri: string,
    year: string,
    imdb_id:string
}

export const Dashboard = (): JSX.Element => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [movieList, setMovieList] = useState<MovieProps[]>([]);
    const [currClicMovie, setCurrClicMovie] = useState<MovieProps>({
        title: '',
        description: '',
        uri: '',
        year: '',
        imdb_id: ''
    });

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    async function getDataUri(id: string) {
        const response = await rapidApi.request({
            method: "GET", 
            params: {type: 'get-movies-images-by-imdb', imdb: id}
        });
        return response.data.poster;
    }
    async function getDataDesc(id: string) {
        const response = await rapidApi.request({
            method: "GET", 
            params: {type: 'get-movie-details', imdb: id},
        });
        return response.data.description;
    }

    useEffect(() => {
        const loadMovies = async () => {
            const response = await rapidApi.request({method: "GET", params: {type: 'get-popular-movies', page: '1', year: '2020'}});
            const requestMovies = response.data.movie_results;

            let filteredMovies = requestMovies.map((movie:MovieProps)=> {
                const newMovieData = {
                    ...movie,
                    uri: '',
                    description: ''
                }
                
                return newMovieData;
            });

            for (let index = 0; index < filteredMovies.length; index++) {
                getDataUri(filteredMovies[index].imdb_id).then(p => filteredMovies[index].uri = p);
                getDataDesc(filteredMovies[index].imdb_id).then(d => filteredMovies[index].description = d);
            }

            setMovieList(filteredMovies);
        }
        loadMovies();
        return;
    }, [])

    return (
        <Container>
            
            <Header>
                <Icon name="menu" size={24} color="black" />
                <SearchInput placeholder="Digite o nome do filme, serie, etc..." />
                <Icon name="search" size={24} color="white" />
            </Header>
            <ListContainer>
                <ListWrapper>
                    <Title>Filmes de ação</Title>
                    <Carrousel>
                        {movieList.map(({imdb_id, title, uri,description, year}:MovieProps) => (
                            <Card 
                                description={description}
                                func={() => {
                                    toggleModal();
                                    setCurrClicMovie({
                                        imdb_id,
                                        title,
                                        uri,
                                        description,
                                        year
                                    });
                                }}
                                key={imdb_id}
                                source={`${uri}`} 
                                name={title}
                            />
                        ))}
                    </Carrousel>
                </ListWrapper>
                <ListWrapper>
                    <Title>Filmes de comédia</Title>
                    <Carrousel>
                        {movieList.map(({imdb_id, title, uri, description, year}:MovieProps) => (
                            <Card 
                                description={description}
                                func={() => {
                                    toggleModal();
                                    setCurrClicMovie({
                                        imdb_id,
                                        title,
                                        uri,
                                        description,
                                        year
                                    });
                                }}
                                key={imdb_id}
                                source={uri} 
                                name={title}
                            />
                        ))}
                    </Carrousel>
                </ListWrapper>
            </ListContainer>
            {(isModalVisible) && <MovieCardModal visible={isModalVisible} movie={currClicMovie}/> }
        </Container>
    )
};