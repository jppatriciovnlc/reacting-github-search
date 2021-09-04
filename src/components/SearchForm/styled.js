import styled from 'styled-components';
import { TextField } from '@material-ui/core';


export const Container = styled.div`


`

export const Input = styled.input`
    border: solid #884f8f 3px;
    border-radius: 5px;
    background-color: #fff;
    color: #884f8f;
    font-weight: 500;
    font-size: 1rem;
    padding-left: 5px;
    width: 400px;
    height: 30px;

    &:focus {
             
        outline: none;
        background-color: #884f8f;
        color: #fff;
        border: solid #fff 3px;
    }

    @media(max-width: 800px) {
        width: 300px;
        
    }

`

export const Button = styled.button`
    background-color: #2ea54f;
    color: #fff;
    font-size: 1rem;
    height: 36px;
    width: 80px;
    border: none;
    border-radius: 5px;
    margin-left: 5px;
`
