import { Ionicons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  textoBoton: string;
  nombreIcono: ComponentProps<typeof Ionicons>["name"];
  colorBoton: string;
  onPress: () => void;
};

const MiBoton = ({ textoBoton, nombreIcono, colorBoton, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[estilos.boton, { backgroundColor: colorBoton }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Ionicons name={nombreIcono} size={20} color="#fff" />
      <Text style={estilos.texto}>{textoBoton}</Text>
    </TouchableOpacity>
  );
};

export default MiBoton;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    marginVertical: 4,
    borderRadius: 8,
  },
  texto: { color: "#fff", fontSize: 14, fontWeight: "bold", marginLeft: 8 },
});