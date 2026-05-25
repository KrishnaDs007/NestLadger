import { Pressable, Text, View } from "react-native";
import { AlertTriangle } from "lucide-react-native";
import { SettingsModal } from "./SettingsModal";
import { colors, styles } from "../../styles/styles";

export function ConfirmModal({ visible, title, message, confirmLabel, onCancel, onConfirm }) {
  return (
    <SettingsModal title={title} visible={visible} onClose={onCancel}>
      <View style={styles.dangerNotice}>
        <AlertTriangle size={22} color={colors.rose} strokeWidth={2.4} />
        <Text style={styles.dangerNoticeText}>{message}</Text>
      </View>
      <View style={styles.settingsButtonRow}>
        <Pressable onPress={onCancel} style={styles.secondarySettingsButton}>
          <Text style={styles.secondarySettingsButtonText}>Cancel</Text>
        </Pressable>
        <Pressable onPress={onConfirm} style={styles.dangerSettingsButton}>
          <Text style={styles.dangerSettingsButtonText}>{confirmLabel}</Text>
        </Pressable>
      </View>
    </SettingsModal>
  );
}
