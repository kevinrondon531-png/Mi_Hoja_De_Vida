import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  nombre: string;
  descripcion: string;
  icono: ComponentProps<typeof Ionicons>["name"];
  onPress: () => void;
};

const TarjetaHobby = ({ nombre, descripcion, icono, onPress }: Props) => {
  return (
    <TouchableOpacity style={estilos.tarjeta} onPress={onPress} activeOpacity={0.7}>
      <View style={estilos.iconoContenedor}>
        <Ionicons name={icono} size={28} color="#2563eb" />
      </View>
      <View style={estilos.textos}>
        <Text style={estilos.nombre}>{nombre}</Text>
        <Text style={estilos.descripcion}>{descripcion}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TarjetaHobby;

const estilos = StyleSheet.create({
  tarjeta: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  iconoContenedor: { marginRight: 14 },
  textos: { flex: 1 },
  nombre: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  descripcion: { fontSize: 14, color: "#555" },
});