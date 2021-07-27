import axios from 'axios';

export default async function getData(userId){
    let {data : user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`);
    let {data : posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

    let result = {
        ['']:user,
        ['posts']: posts
    };

    console.log(result);
    
};