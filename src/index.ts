import axios from "axios";
axios
.get<boolean>("https://jsonplaceholder.typicode.com/users/1")
.then(res => {
    console.log('woo');
    const {data} = res;
}).catch(e => {
    console.log('error', e)
})