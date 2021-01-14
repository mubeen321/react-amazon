import axios from 'axios';

const instance=axios.create({
    baseUrl:"http://localhost:5001/fir-634ba/us-central1/api"
})


export default instance;