import { StyleSheet, Text, View } from "react-native";

type Props = {
  cargo?: string;
  empresa?: string;
  periodo?: string;
  descripcion: string;
};

const TarjetaExperiencia = ({
  cargo,
  empresa,
  periodo,
  descripcion,
}: Props) => {
  return (
    <View style={estilos.tarjeta}>
      {cargo ? <Text style={estilos.cargo}>{cargo}</Text> : null}
      {empresa ? <Text style={estilos.empresa}>{empresa}</Text> : null}
      {periodo ? <Text style={estilos.periodo}>{periodo}</Text> : null}
      <Text style={estilos.descripcion}>{descripcion}</Text>
    </View>
  );
};

export default TarjetaExperiencia;

const estilos = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#ffffff",
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  cargo: { fontSize: 16, fontWeight: "bold", color: "#0f172a" },
  empresa: { fontSize: 14, color: "#2563eb", fontWeight: "600" },
  periodo: { fontSize: 12, color: "#888", marginBottom: 6 },
  descripcion: { fontSize: 14, color: "#475569", lineHeight: 20 },
});
