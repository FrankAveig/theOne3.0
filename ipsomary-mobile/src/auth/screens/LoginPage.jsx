import React, { useState } from "react";
import { useRouter, Stack } from "expo-router"; // Importa useRouter
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import splash from "../../../assets/splash.png";
import ArrowIcon from "../../../assets/images/icons/arrow.svg";
import EyeIcon from "../../../assets/images/icons/eye-solid.svg";
import EyeSlashIcon from "../../../assets/images/icons/eye-slash-solid.svg";
import login from "../services/authServices";
import { ScreenLayout } from "../../components/ScreenLayout";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Por favor, introduce un correo válido")
    .required("El correo es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .min(2, "La contraseña debe tener al menos 6 caracteres"),
});

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const router = useRouter(); // Inicializa el router

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (values) => {
    setLoading(true);
    setErrorMessage("");
    try {
      await login(values.email, values.password);

      router.push("/calendar"); // Redirige a la página de calendario
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else if (error.request) {
        setErrorMessage(
          "No se recibió respuesta del servidor. Inténtalo de nuevo."
        );
      } else {
        setErrorMessage("Ocurrió un error inesperado.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Image source={splash} style={styles.backgroundImg} />
      <View style={styles.cardLogin}>
        <Text style={styles.subTitle}>Bienvenido</Text>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <TextInput
                style={[
                  styles.input,
                  touched.email && errors.email ? styles.inputError : null,
                ]}
                placeholder="Correo"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <View style={styles.passwordContainer}>
                <TextInput
                  style={[
                    styles.input,
                    touched.password && errors.password
                      ? styles.inputError
                      : null,
                    styles.passwordInput,
                  ]}
                  placeholder="Contraseña"
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={togglePasswordVisibility}
                  style={styles.eyeIcon}
                >
                  {showPassword ? (
                    <EyeSlashIcon width={20} height={20} />
                  ) : (
                    <EyeIcon width={20} height={20} />
                  )}
                </TouchableOpacity>
              </View>

              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}

              {errorMessage !== "" && (
                <Text style={styles.errorText}>{errorMessage}</Text>
              )}

              <Pressable
                onPress={handleSubmit}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#309c18c5" : "#309c18",
                  },
                  styles.button,
                ]}
              >
                {loading ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <ArrowIcon width={50} height={50} />
                )}
              </Pressable>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "gray",
    borderRadius: 10,
    backgroundColor: "white",
    padding: 5,
    paddingLeft: 10,
    width: "80%",
    marginBottom: 5,
  },
  inputError: {
    borderColor: "#FF6347",
    borderWidth: 1.5,
  },
  passwordContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
  passwordInput: {
    flex: 1,
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 20,
    color: "gray",
  },
  button: {
    padding: 10,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    position: "absolute",
    bottom: -30,
    right: -10,
  },
  backgroundImg: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  cardLogin: {
    position: "relative",
    backgroundColor: "rgba(255, 255, 255, 0.89)",
    borderRadius: 40,
    padding: 20,
    paddingBottom: 40,
    width: "80%",
    alignItems: "center",
  },
  errorText: {
    color: "#FF6347",
    fontSize: 12,
    alignSelf: "flex-start",
    marginLeft: "10%",
    marginBottom: 10,
  },
});
