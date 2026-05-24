import { Pressable, Text } from "react-native";
import { styles } from "../styles/styles";

export function PillButton({ active, children, onPress }) {
  return (
    <Pressable onPress={onPress} style={[styles.pillButton, active && styles.pillButtonActive]}>
      <Text style={[styles.pillText, active && styles.pillTextActive]}>{children}</Text>
    </Pressable>
  );
}
