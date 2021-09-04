import React, { useState } from 'react';
import * as S from './styled';

import { useSelector } from 'react-redux';

const RepoCard = (props) => {

    
    return(
        <S.Container>
            <S.Title>{props.repo.name}</S.Title>
            <S.Field>{props.repo.description}</S.Field>            
            <S.Field>
                URL: 
                <S.Link href={props.repo.url}>
                    {props.repo.url}
                </S.Link> 
            </S.Field>
        </S.Container>
    )
}

export default RepoCard;