import axios from "axios";
const urlBase = import.meta.env.VITE_API_URL;

class DedicationService {
    async createDedication(data) {
        try {
            const response = await axios.post(`${urlBase}/dedications`, data);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async getDedication(id) {
        try {
            const response = await axios.get(`${urlBase}/dedications/${id}`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAllDedications() {
        try {
            const response = await axios.get(`${urlBase}/dedications`);
            return response.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default new DedicationService();