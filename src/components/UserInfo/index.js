import React, { useState } from 'react';
import * as S from './styled';

import { useSelector } from 'react-redux';



const UserInfo = () => {

    const { user } = useSelector((state) => state.gitInfos);   


    return(
        <S.Container>
            <S.Title>Info</S.Title>
            <S.Field>Company: {user.company}</S.Field>
            <S.Field>Followers: {user.followers}</S.Field>
            <S.Field>Following:  {user.following}</S.Field>
            <S.Field>
                URL: 
                <S.Link href={user.url}>
                    {user.url}
                </S.Link> 
            </S.Field>
            <S.Field>
                Blog: 
                <S.Link href={user.blog}>
                    {user.blog}
                </S.Link>
            </S.Field>
            <S.Field>Repositories: {user.repositories}</S.Field>
        </S.Container>
    )
}

export default UserInfo;