
import React from 'react';
import * as S from './styled';

import image from '../../assets/img/user.png'

import { useSelector } from 'react-redux';

import { SearchForm, UserInfo, RepoCard } from '../../components/index'

const Home = (props) => {

    const { user, repos } = useSelector((state) => state.gitInfos);   
    

    let imageUrl = '';

    if (user && user.image !== ''){
        imageUrl = user.image;
    }
    else{
        imageUrl = image;
    }

    console.log(user)
   
    return(
        <>
            <S.Container>
                <S.SearchContainer>
                    <S.SearchTitle> github search</S.SearchTitle>
                    <SearchForm />
                </S.SearchContainer>
                <S.ProfileContainer>
                    <S.ProfileImageContainer>
                        <S.ProfileImageTitle>
                            {user.name}
                        </S.ProfileImageTitle>
                        <S.ProfileImage src={imageUrl}/>
                    </S.ProfileImageContainer>
                    <UserInfo/>
                    <S.ProfileBioContainer>
                        <S.ProfileBioTitle>
                            Bio
                        </S.ProfileBioTitle>
                        <S.ProfileBio>
                            {user.bio}
                        </S.ProfileBio>
                    </S.ProfileBioContainer>
                </S.ProfileContainer>
                <S.RepoContainer reps={user.repositories}>
                    <S.RepoTitle>Repositories</S.RepoTitle>
                    <S.Repos>
                        {                        
                            repos.map((repo) => {  
                                
                                return(
                                    <RepoCard 
                                        key={repo.id}
                                        repo={repo}
                                    />
                                )                            
                            })
                        }
                    </S.Repos>
                    
                </S.RepoContainer>
            </S.Container>
        </>
    )
}

export default Home