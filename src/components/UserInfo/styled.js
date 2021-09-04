import styled from 'styled-components';


export const Container = styled.div`
    width: 400px;
    height: 225px;
    background-color: #fff;
    border: solid #884f8f 1px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    margin-bottom: 20px;
    margin-right: 20px;

    @media(max-width: 800px) {
        margin-right: 0;
        
    }
`

export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bolder;
    color: #031f4c;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

export const FieldContainer = styled.div`
    display: flex;
    color: #031f4c;
`

export const Field = styled.p`
    display: flex;
    justify-content: left;
    margin-bottom: 10px;
    margin-right: 10px;
    font-size: 1.0rem;
    font-weight: bold;
    word-wrap: break-word;
`

export const Value = styled.p`
    display: flex;
    justify-content: left;
    margin-bottom: 10px;
    font-size: 1.0rem;
    word-wrap: break-word;
`

export const Link = styled.a`
    font-size: 1.0rem;
    text-decoration: none;
    color: #031f4c;
    
`
