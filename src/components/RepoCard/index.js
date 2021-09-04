import React, { useState } from 'react';
import * as S from './styled';

import { useSelector } from 'react-redux';

const RepoCard = (props) => {

    
    return(
        <S.Container>
            <S.Title>{props.repo.name}</S.Title>
            <S.FieldContainer>
                <S.Field>{props.repo.description}</S.Field>            
            </S.FieldContainer>   
            <S.FieldContainer>
                <S.Field>URL:</S.Field>  
                <S.Link href={props.repo.url}>
                    {props.repo.url}
                </S.Link>           
            </S.FieldContainer>    
        </S.Container>
    )
}

export default RepoCard;