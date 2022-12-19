import axios from 'axios';

const SylvesterAPI = axios.create({
    baseURL: "http://localhost:8081/sylvester",
    headers: {
        "Content-Type": "application/json"
    }
})

export default SylvesterAPI;