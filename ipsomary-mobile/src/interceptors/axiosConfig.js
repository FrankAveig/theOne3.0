import axios from "axios";
import * as SecureStore from "expo-secure-store";
import Constants from "expo-constants"; // Importar las variables de entorno

// Obtener la URL de la API desde las variables de entorno

const apiUrl = Constants.expoConfig?.extra?.apiUrl; // Usar expoConfig en lugar de manifest

// Crear una instancia de Axios
const api = axios.create({
  baseURL: apiUrl, // Ahora la baseURL viene de las variables de entorno
});

// Interceptor para agregar el token en cada solicitud
api.interceptors.request.use(
  async (config) => {
    try {
      // Obtener el token de SecureStore
      const token = await SecureStore.getItemAsync("authToken");
      if (token) {
        // Si el token existe, agregarlo a los headers
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.log("Error al obtener el token", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
