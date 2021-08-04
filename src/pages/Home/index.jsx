import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';

import { Wrapper, ContainerAside, Search, Logo, Map, CarouselTitle, Carousel } from './styles';
import { ImageCard as Card } from '../../components/imageCard/index';
import { RestaurantCard } from '../../components/RestaurantCard/index';

export default function Home() {
    const [inputValue, setInputValue] = useState('');

    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

    return(
        <Wrapper>
            <ContainerAside>
                <Search>
                    <Logo src={ logo } alt="logo do restaurante" />
                    <TextField
                        label='Pesquisar Restaurantes'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}
                    >
                        <Input
                            value={ inputValue }
                            onChange={ e => setInputValue(e.target.value) } 
                        />
                    </TextField>
                    <CarouselTitle>Na sua área</CarouselTitle>
                    <Carousel { ...settings }>
                        <Card photo={ restaurant } title="Nome do Restaurante" />
                        <Card photo={ restaurant } title="Nome do Restaurante" />
                        <Card photo={ restaurant } title="Nome do Restaurante" />
                        <Card photo={ restaurant } title="Nome do Restaurante" />
                        <Card photo={ restaurant } title="Nome do Restaurante" />
                        <Card photo={ restaurant } title="Nome do Restaurante" />
                    </Carousel>
                </Search>
                <RestaurantCard />
            </ContainerAside>
            <Map></Map>
        </Wrapper>
    );
};