import { Pressable, Text, View } from "react-native";
import { Pencil } from "lucide-react-native";
import { colors, styles } from "../../styles/styles";

export function SettingsFieldRow({ icon: Icon, label, value, disabled, actionLabel = "Edit" }) {
  return (
    <View style={styles.settingsFieldRow}>
      <Icon size={20} color={colors.primarySoft} strokeWidth={2.2} />
      <View style={styles.settingsFieldCopy}>
        <Text style={styles.settingsFieldLabel}>{label}</Text>
        <Text style={[styles.settingsFieldValue, disabled && styles.settingsDisabledText]}>{value}</Text>
      </View>
      {disabled ? (
        <Text style={styles.settingsLockText}>Locked</Text>
      ) : (
        <Pressable style={styles.settingsEditButton}>
          <Pencil size={16} color={colors.primarySoft} strokeWidth={2.3} />
          <Text style={styles.settingsEditText}>{actionLabel}</Text>
        </Pressable>
      )}
    </View>
  );
}
