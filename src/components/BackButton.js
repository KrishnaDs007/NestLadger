import { Pressable } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import { colors, styles } from "../styles/styles";

export function BackButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.headerIconButton}>
      <ArrowLeft size={23} color={colors.primarySoft} strokeWidth={2.4} />
    </Pressable>
  );
}
