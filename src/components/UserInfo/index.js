import React, { useState } from 'react';
import * as S from './styled';

import { useSelector } from 'react-redux';



const UserInfo = () => {

    const { user } = useSelector((state) => state.gitInfos);   


    return(
        <S.Container>
            <S.Title>Info</S.Title>
            <S.FieldContainer>
                <S.Field>Company:</S.Field>
                <S.Value>{user.company}</S.Value>
            </S.FieldContainer>
            <S.FieldContainer>
                <S.Field>Followers:</S.Field>
                <S.Value>{user.followers}</S.Value>
            </S.FieldContainer>
            <S.FieldContainer>
                <S.Field>Following:</S.Field>
                <S.Value>{user.following}</S.Value>
            </S.FieldContainer>    
            <S.FieldContainer>
                <S.Field>URL:</S.Field>
                <S.Link href={user.url}>
                    {user.url}
                </S.Link> 
            </S.FieldContainer> 
            <S.FieldContainer>
                <S.Field>Blog:</S.Field>
                <S.Link href={user.blog}>
                    {user.blog}
                </S.Link>
            </S.FieldContainer> 
            <S.FieldContainer>
                <S.Field>Repositories:</S.Field>
                <S.Value>{user.repositories}</S.Value>
            </S.FieldContainer>        
           
        </S.Container>
    )
}

export default UserInfo;