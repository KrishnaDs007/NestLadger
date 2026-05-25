import { Modal, Pressable, Text, View } from "react-native";
import { X } from "lucide-react-native";
import { colors, styles } from "../../styles/styles";

export function SettingsModal({ title, visible, onClose, children }) {
  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <View style={styles.settingsModalBackdrop}>
        <View style={styles.settingsModalCard}>
          <View style={styles.rowBetween}>
            <Text style={styles.settingsModalTitle}>{title}</Text>
            <Pressable onPress={onClose} style={styles.settingsCloseButton}>
              <X size={20} color={colors.text} strokeWidth={2.4} />
            </Pressable>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}
