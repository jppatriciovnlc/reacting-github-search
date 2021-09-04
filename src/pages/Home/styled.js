import styled from 'styled-components';

export const Container = styled.div`
    

`
export const SearchContainer = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding-left: 20px;;

    @media(max-width: 800px) {
        justify-content: center;
        height: auto;
        padding: 10px;
    }

`

export const SearchTitle = styled.p`
    font-family: 'roboto';
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
    margin-right: 100px;
    text-transform: uppercase;

    @media(max-width: 800px) {
        margin-right: 30px;
        margin-bottom: 20px;
        
    }

`

export const ProfileContainer = styled.div`
    border: solid red 1px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    @media(max-width: 800px) {
        justify-content: center;
        
    }

`
export const ProfileImageContainer = styled.div`
    border: solid blue 1px;
    height: 250px;
    width: 20%;
    min-width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

`

export const ProfileImageTitle = styled.p`
    font-family: 'roboto';
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 5px;

`

export const ProfileImage = styled.img`
    
    height: 200px;
    width: auto;
    border: solid 1px #a0a0a0;
    border-radius: 5px;
    

`
export const ProfileBioContainer = styled.div`
    border: solid red 1px;
    height: 250px;    
    width: 50%;
    min-width: 300px;
    display: flex;
    flex-direction: column;    
    align-items: center;

`

export const ProfileBioTitle = styled.p`
    font-family: 'roboto';
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;

`

export const ProfileBio = styled.p`
    font-family: 'roboto';
    font-size: 1.0rem;
    margin-bottom: 5px;
    padding: 20px;
    border: solid green 1px;
    height: 180px;
    width: 70%;
    min-width: 250px;
    word-wrap: wrap;
    overflow-y: auto;

`

export const RepoContainer = styled.div`
    height: calc(95vh - 300px);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 5px;

`