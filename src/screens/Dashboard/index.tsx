import React, { useEffect, useState } from 'react';
import { Modalize } from 'react-native-modalize';

// components
import { Card } from '../../components/Card';
import { MovieCardModal } from '../../components/MovieCardModal';
import { Header } from '../../components/Header'

// styled components
import {
    Container,
    ListContainer,
    ListWrapper,
    Title,
    Carrousel
} from './styles';

// rapidapi
import { rapidApi } from '../../services/rapidApi'

// types
interface MovieProps {
    title: string,
    description: string,
    uri: string,
    year: string,
    imdb_id:string,
    isCatalog: boolean
}

export const Dashboard = (): JSX.Element => {

    // app state
    const [movieList, setMovieList] = useState<MovieProps[]>([]);
    const [movieList2, setMovieList2] = useState<MovieProps[]>([]);
    const [currClicMovie, setCurrClicMovie] = useState<MovieProps>({} as MovieProps);

    // utils funcs
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

    // load movies from rapidApi
    useEffect(() => {
        const loadMovies = async () => {
            
            const response = await rapidApi.request({
                method: "GET",
                params: {
                    type: 'get-popular-movies',
                    page: `1`,
                    year: '2020'
                }
            });
            const results = response.data.movie_results;
            const movies = await Promise.all<MovieProps>(
                results.map(async (movie:MovieProps)=> {
                    return {
                        ...movie,
                        uri: await getDataUri(movie.imdb_id),
                        description: await getDataDesc(movie.imdb_id),
                    }
                })
            );
            setMovieList(movies);

            // resolves movies second list
            const response2 = await rapidApi.request({
                method: "GET",
                params: {
                    type: 'get-popular-movies',
                    page: `2`,
                    year: '2020'
                }
            });
            const results2 = response2.data.movie_results;
            const movies2 = await Promise.all<MovieProps>(
                results2.map(async (movie:MovieProps)=> {
                    return {
                        ...movie,
                        uri: await getDataUri(movie.imdb_id),
                        description: await getDataDesc(movie.imdb_id),
                    }
                })
            );
            setMovieList2(movies2);
        }
        loadMovies();
        return;
    }, []);

    // modal reference and Card onPress func
    const modRef = React.useRef<Modalize>(null);
    const onCardPress = (movie: MovieProps) => {
        modRef.current?.open();
        setCurrClicMovie(movie);
    }

    return (
        <Container>
            <Header />
            <ListContainer>
                <ListWrapper>
                    <Title>Filmes mais populares</Title>
                    <Carrousel>
                        {movieList.map((data:MovieProps) => (
                            <Card
                                callback={() => {onCardPress(data)}}
                                key={data.imdb_id}
                                source={data.uri} 
                                name={data.title}
                            />
                        ))}
                    </Carrousel>
                </ListWrapper>
                <ListWrapper>
                    <Title>Mais...</Title>
                    <Carrousel>
                        {movieList2.map((data:MovieProps) => (
                            <Card
                                callback={() => {onCardPress(data)}}
                                key={data.imdb_id}
                                source={data.uri} 
                                name={data.title}
                            />
                        ))}
                    </Carrousel>
                </ListWrapper>
            </ListContainer>
            <Modalize ref={modRef} adjustToContentHeight={true} snapPoint={300}>
                <MovieCardModal movie={currClicMovie} />
            </Modalize>
        </Container>
    )
};