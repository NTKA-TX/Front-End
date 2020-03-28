import styled from 'styled-components';

import * as color from './colors'

//AppRouter
export const Nav = styled.div`
    background-color: ${color.black};
    height: 100px;
    background: #1C1C1C;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    a {
        text-decoration: none;
        color: #F0F0F0;
        font-size: 18px;
        cursor: pointer;
        @media (max-width: 500px) {
            display: flex;
            justify-content: center;
            margin: 0 auto;
        }
    }
`;

export const AboutContainer = styled.div`
    margin-top: 20px;
`
export const TextContainer = styled.div`
    background: ${color.black};
    color: white;

    border: solid ${color.black} 5px;
    border-radius: 40px;
    margin-right: 10px;
    h1 {
        font-size: 4rem;
    }
    p{
        font-size: 2rem;
    }


`

export const Section = styled.div`
    display: flex;
    justify-content: center

`
export const PayPal = styled.div`
    
`