import axios from "axios";
import { BASE_URL } from "./constants";

export const getSiteId = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/sites?id=${userId}`);
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getSites = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/sites`);
      return response.data
    } catch (err) {
        console.log(err)
    }
}

export const getTestId = async (testId) => {
    try {
      const response = await axios.get(`${BASE_URL}/tests?id=${testId}`);
      return response.data
    } catch (err) {
        console.log(err)
    }
}
export const getTests = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/tests`);
      return response.data
    } catch (err) {
        // console.error(err.toJSON())
        console.log(err)
    }
}