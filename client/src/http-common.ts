import axios, { AxiosInstance } from "axios";
import useCompression from "@/composables/compression"

const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:3001",
});

// Add a response interceptor
const {saveCompressedFile, saveCompressedText} = useCompression();

apiClient.interceptors.response.use((response) => {
        if (response.config.url === "/file")
            saveCompressedFile(response.data)
        else if (response.config.url === "/text")
            saveCompressedText(response.data)
        return response;
    }, function (error) {
        // Do something with response error
        alert(error.message)
        return Promise.reject(error);
    });
export default apiClient;