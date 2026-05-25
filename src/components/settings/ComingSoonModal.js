import { Text, View } from "react-native";
import { SettingsModal } from "./SettingsModal";
import { styles } from "../../styles/styles";

export function ComingSoonModal({ visible, onClose }) {
  return (
    <SettingsModal title="Coming Soon" visible={visible} onClose={onClose}>
      <View style={styles.comingSoonPanel}>
        <Text style={styles.superText}>Coming soon</Text>
        <Text style={styles.settingsHelpText}>This section will be added after the core family expenses, todos, friends, and payment settings flows are complete.</Text>
      </View>
    </SettingsModal>
  );
}
