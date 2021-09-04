import api from '../apiGit';

const GetRepos = (user) => {

    let repos = {}

    return(
        api.get(`/${user}/repos`)
            .then(response => {
                repos = response.data;
                return(repos);
            })
            .catch(err => {
                console.log(err);
                return null;
            })
    )
}

export default GetRepos;