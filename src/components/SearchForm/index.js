import React, { useState } from 'react';
import * as S from './styled';
import { GetRepos, GetUser } from '../../services/GitApi';

import { useDispatch, useSelector } from 'react-redux';
import { setRepos, setUser } from '../../redux/modules/gitInfos';



const SearchForm = () => {
    const dispatch = useDispatch(); 
    const [ searchItem, setSearchItem] = useState("");


    const handleChange = (e) => {
        setSearchItem(e.target.value);
    }

    const handleClick = (e) => {        
        let getUser = GetUser;
        let getRepos = GetRepos;
        getUser(searchItem)
            .then((res) => {
                if(res != null){
                    dispatch(setUser(res));
                }  
            })
            .catch((err) => {
                console.log(err)
            })

        GetRepos(searchItem)
            .then((res) => {
                if(res != null){
                    dispatch(setRepos(res))
                }
            })
            .catch((err) => {
                console.log(err)
            })
        
        
    }

    return(
        <>
            <S.Container>               
                <S.Input 
                    id="inputSearch"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleChange(e) }
                />
                <S.Button
                    onClick={() => handleClick() }
                >
                    Search
                </S.Button>
                
            </S.Container>
            

           
        </>
    )
    
}

export default SearchForm;