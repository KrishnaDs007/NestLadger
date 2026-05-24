import { Pressable } from "react-native";
import { Settings } from "lucide-react-native";
import { colors, styles } from "../styles/styles";

export function SettingsButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.headerIconButton}>
      <Settings size={22} color={colors.primarySoft} strokeWidth={2.4} />
    </Pressable>
  );
}
