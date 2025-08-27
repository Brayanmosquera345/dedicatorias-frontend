import axios from "axios";
const urlBase = import.meta.env.VITE_API_URL;

class PexelsService {

    async searchImages(query, page = 1, perPage = 10) {
        try {
            const response = await axios.get(`${urlBase}/pexels/search?query=${query}&page=${page}&perPage=${perPage}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new PexelsService();