import axios from "../../interceptors/axiosConfig"; // Asegúrate de que está configurado con tu interceptor
import * as SecureStore from "expo-secure-store";

async function login(email, password) {
  try {
    const response = await axios.post("api/v1/user/auth/login", {
      email: email,
      password: password,
    });

    if (response.status === 200) {
      const { token, type } = response.data.data;

      await SecureStore.setItemAsync("authToken", token);
      console.log("Token almacenado exitosamente:", token);

      return response.data;
    } else {
      throw new Error("Login fallido");
    }
  } catch (error) {
    throw error;
  }
}

export default login;
