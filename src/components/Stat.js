import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export function Stat({ label, value, danger }) {
  return (
    <View>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={[styles.statValue, danger && styles.dangerText]}>{value}</Text>
    </View>
  );
}
