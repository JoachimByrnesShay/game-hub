import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: `acc3eca0b497482bb3d6a9c71faae327`
    }
})