import api from '../apiGit';

const returnedUser = {
    name: '',
    image: '',
    bio: '',
    company: '',
    followers: '',
    following: '',
    blog: '',
    url: '',
    login: '',
    repositories: '',
}

const GetUser = (user) => {

return (
    api.get(`/${user}`)
            .then(response => {
                returnedUser.name = response.data.name;
                returnedUser.image = response.data.avatar_url;
                returnedUser.bio = response.data.bio;
                returnedUser.company = response.data.company;
                returnedUser.followers = response.data.followers;
                returnedUser.following = response.data.following;
                returnedUser.blog = response.data.blog;
                returnedUser.url = response.data.html_url;
                returnedUser.login = response.data.login;
                returnedUser.repositories = response.data.public_repos;
               
                return(returnedUser);
            })
            .catch(err => {
                console.log(err);
                alert("User Not Found")
                return null;
            })
)   

    //return null
}

export default GetUser;