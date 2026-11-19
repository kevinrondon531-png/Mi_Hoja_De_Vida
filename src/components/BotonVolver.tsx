import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = {
  texto?: string;
};

const BotonVolver = ({ texto = "Volver" }: Props) => {
  const router = useRouter();

  const volver = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  };

  return (
    <TouchableOpacity
      style={estilos.boton}
      onPress={volver}
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityLabel="Volver al inicio"
    >
      <Ionicons name="arrow-back" size={18} color="#2563eb" />
      <Text style={estilos.texto}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default BotonVolver;

const estilos = StyleSheet.create({
  boton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: "#e0e7ff",
  },
  texto: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "bold",
    color: "#2563eb",
  },
});
