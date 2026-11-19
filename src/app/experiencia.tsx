import { ScrollView, StyleSheet, Text, View } from "react-native";
import BotonVolver from "../components/BotonVolver";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

const Experiencia = () => {
  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <BotonVolver />

      <View style={estilos.encabezado}>
        <Text style={estilos.nombre}>Kevin Johansen Rondon Novoa</Text>
        <Text style={estilos.profesion}>Experiencia Laboral</Text>
      </View>

      <View style={estilos.seccion}>
        <TarjetaExperiencia
          descripcion="Sin Experiencia, solamente Experiencia Informal"
       />
      </View>
    </ScrollView>
  );
};

export default Experiencia;

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