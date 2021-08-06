import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';

import { Wrapper, ContainerAside, Search, Logo, CarouselTitle, Carousel, ModalTitle, ModalContent } from './styles';

import { ImageCard as Card } from '../../components/imageCard/index';
import { RestaurantCard } from '../../components/RestaurantCard/index';
import { Modal } from '../../components/Modal/index';
import { Loader } from '../../components/Loader/index';
import { Skeleton } from '../../components/Skeleton/index';
import GoogleApiWrapper from '../../components/Map/index';

export default function Home() {
    const [inputValue, setInputValue] = useState('');
    const [modalOpened, setModalOpened] = useState(false);
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const { restaurants, restaurantSelected } = useSelector(state => state.restaurants);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true
    };

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            setQuery(inputValue);
        }
    };

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    };

    return(
        <Wrapper>
            <ContainerAside>
                <Search>
                    <Logo src={ logo } alt="logo do restaurante" />
                    <TextField
                        label='Pesquisar Restaurantes'
                        outlined
                        trailingIcon={ <MaterialIcon role="button" icon="search"/> }
                        onTrailingIconSelect={ () => setQuery(inputValue) }>
                        <Input
                            value={ inputValue }
                            onChange={ e => setInputValue(e.target.value) } 
                            onKeyPress = { handleKeyPress }
                        />
                    </TextField>
                    { restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>Na sua área</CarouselTitle>
                            <Carousel { ...settings }>
                                { restaurants.map(restaurant => {
                                    return(
                                        <Card 
                                            key={ restaurant.place_id }
                                            photo={ restaurant.photos ? restaurant.photos[0].getUrl() : restaurante }
                                            title={ restaurant.name }
                                        /> 
                                    );
                                }) }
                            </Carousel>
                        </>
                    ) : ( 
                        <Loader />
                    )}
                </Search>
                { restaurants.map(restaurant => {
                    return(
                        <RestaurantCard 
                            key={ restaurant.place_id } 
                            restaurant={ restaurant }
                            onClick={ () => handleOpenModal(restaurant.place_id) }
                        />
                    );
                }) }
            </ContainerAside>
            <GoogleApiWrapper query={ query } placeId={ placeId } />
            <Modal open={ modalOpened } onClose={ () => setModalOpened(!modalOpened) }>
                { restaurantSelected ? (
                    <>
                        <ModalTitle>{ restaurantSelected?.name }</ModalTitle>
                        <ModalContent>{ restaurantSelected?.formatted_phone_number }</ModalContent>
                        <ModalContent>{ restaurantSelected?.formatted_address }</ModalContent>
                        <ModalContent>
                            { restaurantSelected?.opening_hours?.isOpen() ? 'Aberto agora :)' : 'Fechado agora :(' }
                        </ModalContent>
                    </>
                ) : (
                    <>
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                        <Skeleton width="10px" height="10px" />
                    </>
                )}
                
            </Modal>
        </Wrapper>
    );
};
