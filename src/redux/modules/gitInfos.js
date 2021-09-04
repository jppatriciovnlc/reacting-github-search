export const Types = {
    SET_USER : 'gitInfos/SET_USER',
    SET_USER_NAME : 'gitInfos/SET_USER_NAME',
    SET_USER_IMG : 'gitInfos/SET_USER_IMG',
    SET_USER_BIO : 'gitInfos/SET_USER_BIO',
    SET_REPOS : 'gitInfos/SET_REPOS'
}

const initialState = {
    user : '',
    repos : []

}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case Types.SET_USER:
            return{ ...state, user: action.payload };
        case Types.SET_REPOS:
            return{ ...state, repos: action.payload };

        default:
                return state;
    }

}
export default reducer


export const setUser = (user) => {
    return{
        type: Types.SET_USER,
        payload: user
    }
}

export const setRepos = (repos) => {
    return{
        type: Types.SET_REPOS,
        payload: repos
    }
}

