import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export function Avatar({ label, small }) {
  return (
    <View style={[styles.avatar, small && styles.avatarSmall]}>
      <Text style={[styles.avatarText, small && styles.avatarTextSmall]}>{label}</Text>
    </View>
  );
}
