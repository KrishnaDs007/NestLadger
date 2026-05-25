import { Text, View } from "react-native";
import { styles } from "../styles/styles";

export function Avatar({ label, small, large }) {
  return (
    <View style={[styles.avatar, small && styles.avatarSmall, large && styles.avatarLarge]}>
      <Text style={[styles.avatarText, small && styles.avatarTextSmall, large && styles.avatarTextLarge]}>{label}</Text>
    </View>
  );
}
