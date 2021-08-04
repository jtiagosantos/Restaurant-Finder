import styled from 'styled-components';

export const Card = styled.div`
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${ props => props.photo });
    background-size: cover;

    display: flex;
    padding: 10px;
`;

export const NameRestaurant = styled.span`
    font-family: ${ props => props.theme.fonts.regular };
    color: #fff;
    font-size: 16px;
`;