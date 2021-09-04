import styled from 'styled-components';

export const Container = styled.div`
    height: 99vh;

`
export const SearchContainer = styled.div`
    min-height: 50px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding-left: 20px;
    border: solid #884f8f 2px;

    @media(max-width: 800px) {
        justify-content: center;
        height: auto;
        padding: 10px;
    }

`
export const SearchTitle = styled.p`
    font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    color: #fff;
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 5px;
    margin-right: 100px;
    text-transform: uppercase;

    @media(max-width: 800px) {
        margin-right: 30px;
        margin-bottom: 20px;        
    }

`

export const ProfileContainer = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 20px;
    margin-bottom: 40px;

    @media(max-width: 800px) {
        justify-content: center;
        
    }

`
export const ProfileImageContainer = styled.div`
    height: 250px;
    width: 20%;
    min-width: 210px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    margin-bottom: 20px;

`

export const ProfileImageTitle = styled.p`
    font-family: 'roboto';
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 20px;

`

export const ProfileImage = styled.img`
    
    height: 200px;
    width: auto;
    border: solid 2px #884f8f;
    border-radius: 5px;
    

`
export const ProfileBioContainer = styled.div`
     width: 400px;
    height: 225px;
    background-color: #fff;
    border: solid #884f8f 1px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    margin-bottom: 20px;

`

export const ProfileBioTitle = styled.p`
    font-size: 1.2rem;
    font-weight: bolder;
    color: #031f4c;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

`

export const ProfileBio = styled.p`
    font-family: 'roboto';
    font-size: 1.0rem;
    margin-bottom: 5px;
    padding: 20px;
    border: solid #884f8f 1px;
    border-radius: 20px;
    height: 180px;
    width: 70%;
    min-width: 250px;
    word-wrap: wrap;
    overflow-y: auto;

`

export const RepoContainer = styled.div`
    height: auto;
    display: ${props => !props.reps ? 'none' : 'flex'};

    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;


    font-family: "Alliance No.1",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";   
    
    

    @media(max-width: 800px) {
        justify-content: center;
        height: auto;
        padding: 10px;
    }

`

export const RepoTitle = styled.p`
    font-size: 1.2rem;
    font-weight: bolder;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;

`

export const Repos = styled.div`
    height: auto;
    max-height: 400px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;
    overflow-y: auto;

    border: solid #884f8f 2px;
    border-radius: 5px;

    @media(max-width: 800px) {
        justify-content: center;
        height: auto;
        padding: 10px;
    }

`

