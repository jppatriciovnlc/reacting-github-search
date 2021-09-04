import styled from 'styled-components';

export const Container = styled.div`
    width: 250px;
    background-color: #fff;
    color: #031f4c;
    border: solid #884f8f 1px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";    
    overflow-y: auto;
    margin: 5px;

   
`

export const Title = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    
`

export const FieldContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;    
`

export const Field = styled.p`    
    font-size: 0.8rem;
    word-wrap: break-word;
`

export const Link = styled.a`
    font-size: 0.8rem;
    text-decoration: none;
    color: #031f4c;
    margin-left: 10px;
`
