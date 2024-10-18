import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { ScreenLayout } from "../../components/ScreenLayout";
import { Calendar } from "react-native-calendars"; // Importa el componente Calendar

export function CalendarScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        {/* Aquí está el componente del calendario con un rango de fechas marcadas */}
        <View style={styles.calendarContainer}>
          <Calendar
            // Marcar los días del 13 de octubre al 16 de octubre
            markedDates={{
              "2024-10-13": {
                startingDay: true,
                color: "#309c18",
                textColor: "white",
              },
              "2024-10-14": { color: "#309c18", textColor: "white" },
              "2024-10-15": { color: "#309c18", textColor: "white" },
              "2024-10-16": {
                endingDay: true,
                color: "#309c18",
                textColor: "white",
              },
            }}
            markingType={"period"} // Define el tipo de marcado como un "periodo"
            theme={{
              textSectionTitleColor: "#b6c1cd", // Color de los títulos de las secciones
              selectedDayBackgroundColor: "#309c18", // Color del día seleccionado
              todayTextColor: "#309c18", // Color del día actual
              dayTextColor: "#2d4150", // Color del texto de los días
              textDisabledColor: "#d9e1e8", // Color del texto de los días deshabilitados
              arrowColor: "#309c18", // Color de las flechas
              monthTextColor: "#309c18", // Color del texto del mes
              indicatorColor: "#309c18", // Color del indicador de mes
              borderradius: 16,
            }}
            onDayPress={(day) => {
              console.log("selected day", day);
            }}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    borderRadius: 12, // Redondea los bordes del calendario
    overflow: "hidden", // Asegúrate de que el contenido no sobresalga
    backgroundColor: "white", // Color de fondo del calendario
    margin: 10, // Opcional: margenes para separar el calendario del resto de la interfaz
  },
});
