import React from 'react';

// components
import { Card } from '../../components/Card';

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

export const Dashboard = (): JSX.Element => {
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
                        <Card 
                            source='https://www.cafecomfilme.com.br/media/k2/items/cache/8ffd18e59bf9d59135c7eafc3068ae79_XL.jpg?t=20200206_184920' 
                            name="Rambo: Programado para matar"
                        />
                        <Card 
                            source='https://http2.mlstatic.com/D_NQ_NP_697417-MLB32324366598_092019-W.jpg'
                            name="Rambo: Last blood"
                        />
                        <Card 
                            source='https://www.cafecomfilme.com.br/media/k2/items/cache/8ffd18e59bf9d59135c7eafc3068ae79_XL.jpg?t=20200206_184920' 
                            name="Rambo: Programado para matar"
                        />
                        <Card 
                            source='https://http2.mlstatic.com/D_NQ_NP_697417-MLB32324366598_092019-W.jpg'
                            name="Rambo: Last blood"
                        />
                    </Carrousel>
                </ListWrapper>
                <ListWrapper>
                    <Title>Filmes de comédia</Title>
                    <Carrousel>
                        <Card 
                            source='https://3.bp.blogspot.com/-vmQn-03c6Ck/VRSTqjnYbFI/AAAAAAAALWo/dcPV--0gbPE/s1600/Debi-E-Loide-Dois-Idiotas.jpg' 
                            name="Debi e Lóide: Dois idiotas em apuros"
                        />
                        <Card 
                            source='https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg' 
                            name="As branquelas."
                        />
                        <Card 
                            source='https://3.bp.blogspot.com/-vmQn-03c6Ck/VRSTqjnYbFI/AAAAAAAALWo/dcPV--0gbPE/s1600/Debi-E-Loide-Dois-Idiotas.jpg' 
                            name="Debi e Lóide: Dois idiotas em apuros"
                        />
                        <Card 
                            source='https://br.web.img3.acsta.net/medias/nmedia/18/97/52/82/20534159.jpg' 
                            name="As branquelas."
                        />
                    </Carrousel>
                </ListWrapper>
            </ListContainer>
        </Container>
    )
};