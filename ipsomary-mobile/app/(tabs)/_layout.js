import { Tabs } from "expo-router";
import { CalendarIcon, ListIcon, MenuIcon } from "./icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "white",
          height: 60,
          shadowColor: "transparent",
          paddingTop: 10,
          paddingBottom: 10,
        },
        tabBarActiveTintColor: "#309c18", // Color de íconos y texto cuando están activos
        tabBarInactiveTintColor: "#ccc", // Color de íconos y texto cuando están inactivos
        tabBarIcon: ({ color, focused }) => {
          let IconComponent;

          // Asignar el ícono en función de la ruta
          switch (route.name) {
            case "calendar":
              IconComponent = CalendarIcon;
              break;
            case "list":
              IconComponent = ListIcon;
              break;
            case "menu":
              IconComponent = MenuIcon;
              break;
            default:
              IconComponent = CalendarIcon;
          }

          return (
            <IconComponent width={20} height={20} fill={color} /> // Cambia el color del ícono usando la propiedad fill
          );
        },
      })}
    >
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendario",
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: "Lista",
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          title: "Menú",
        }}
      />
    </Tabs>
  );
}
