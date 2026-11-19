import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import BotonVolver from "../components/BotonVolver";
import TarjetaHobby from "../components/TarjetaHobby";

const Hobbies = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <BotonVolver />

      <View style={estilos.encabezado}>
        <Text style={estilos.nombre}>Kevin Johansen Rondon Novoa</Text>
        <Text style={estilos.profesion}>Intereses / Hobbies</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaHobby
          nombre="Videojuegos"
          descripcion="Me gusta jugar en mi tiempo libre"
          icono="game-controller-outline"
          onPress={() =>
            Alert.alert("Videojuegos", "Detalles adicionales de este pasatiempo.")
          }
        />
        <TarjetaHobby
          nombre="Música"
          descripcion="Escucho música mientras programo"
          icono="musical-notes-outline"
          onPress={() =>
            Alert.alert("Música", "Detalles adicionales de este pasatiempo.")
          }
        />
        <TarjetaHobby
          nombre="Deporte"
          descripcion="Practico deporte para desconectarme y mantener un entrenamiento en el gimnasio"
          icono="football-outline"
          onPress={() =>
            Alert.alert("Deporte", "Detalles adicionales de este pasatiempo.")
          }
        />
      </View>
    </ScrollView>
  );
};

export default Hobbies;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  encabezado: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a" },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    elevation: 1,
  },
});