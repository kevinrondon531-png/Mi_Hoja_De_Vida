import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Alert, Image, Linking, ScrollView, StyleSheet, Text, View } from "react-native";
import MiBoton from "../components/MiBoton";

const Inicio = () => {
  const router = useRouter();

  return (
    <ScrollView style={estilos.contenedor} contentContainerStyle={estilos.contenido}>
      <View style={estilos.avatarContenedor}>
        <Image source={require("../../assets/images/KevinR.jpg")} style={estilos.foto}/>
        <Text style={estilos.nombre}>Kevin Johansen Rondón Novoa</Text>
        <Text style={estilos.profesion}>Tecnólogo en Análisis y Desarrollo de Software</Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Perfil Profesional</Text>
        <Text style={estilos.parrafo}>
        Aprendiz del SENA en Análisis y Desarrollo de Software, apasionado por el
        desarrollo web y de aplicaciones móviles. Con conocimientos en Python,
        JavaScript, HTML y CSS, y manejo de herramientas como Git, GitHub y Figma.
        Me gusta aprender, adaptarme rápido y aportar al equipo desde el primer día.

        Kevin Johansen Rondón Novoa 
        (320) 220-3188
        </Text>
      </View>

      <View style={estilos.seccion}>
        <Text style={estilos.subtitulo}>Contacto</Text>

        <MiBoton
          textoBoton="Enviar Correo"
          nombreIcono="mail"
          colorBoton="#E8D464"
          onPress={() => Alert.alert("Contacto", "Kevinrondon531@gmail.com")}
        />
        <MiBoton
          textoBoton="Llamar"
          nombreIcono="call"
          colorBoton="#5B7FE8"
          onPress={() => Alert.alert("Contacto", "Teléfono: 320 220 3188")}
        />
        <MiBoton
          textoBoton="Ver Perfil LinkedIn"
          nombreIcono="logo-linkedin"
          colorBoton="#0A66C2"
          onPress={() => Linking.openURL("https://www.linkedin.com/feed/")}
        />
        <MiBoton
          textoBoton="Facebook"
          nombreIcono="logo-facebook"
          colorBoton="#1877F2"
          onPress={() => Alert.alert("Facebook", "facebook.com/tu-usuario")}
        />
        <MiBoton
          textoBoton="Instagram"
          nombreIcono="logo-instagram"
          colorBoton="#E1306C"
          onPress={() => Alert.alert("Instagram", "@tu_usuario")}
        />
        <MiBoton
          textoBoton="GitHub"
          nombreIcono="logo-github"
          colorBoton="#24292f"
          onPress={() => Linking.openURL("https://github.com/kevinrondon531-png")}
        />
        <MiBoton
          textoBoton="Estudios"
          nombreIcono="school"
          colorBoton="#EF6F63"
          onPress={() => router.push("/estudios")}
        />
        <MiBoton
          textoBoton="Hobbies"
          nombreIcono="heart"
          colorBoton="#9333ea"
          onPress={() => router.push("/hobbies")}
        />
      </View>
    </ScrollView>
  );
};

export default Inicio;

const estilos = StyleSheet.create({
  contenedor: { flex: 1, backgroundColor: "#f8fafc" },
  contenido: { padding: 20 },
  avatarContenedor: { alignItems: "center", marginBottom: 20 },
  nombre: { fontSize: 24, fontWeight: "bold", color: "#0f172a", marginTop: 8 },
  profesion: { fontSize: 16, color: "#2563eb", fontWeight: "600" },
  seccion: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    elevation: 1,
  },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#2563eb",
},
  subtitulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 8,
  },
  parrafo: { fontSize: 14, color: "#475569", lineHeight: 20 },
});