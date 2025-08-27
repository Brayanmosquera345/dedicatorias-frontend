import axios from "axios";
const urlBase = import.meta.env.VITE_API_URL;

class DeezerService {
  async serachSongs(query) {
    try {
      const response = await axios.get(
        `${urlBase}/deezer/search?q=${query}`
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new DeezerService();
