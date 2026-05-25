import { Pressable, Text } from "react-native";
import { Mail, MapPin, Phone, Trash2, UserRound } from "lucide-react-native";
import { SettingsFieldRow } from "./SettingsFieldRow";
import { SettingsModal } from "./SettingsModal";
import { colors, styles } from "../../styles/styles";

export function AccountSettingsModal({ visible, account, onDeleteAccount, onClose }) {
  return (
    <SettingsModal title="Account Settings" visible={visible} onClose={onClose}>
      <SettingsFieldRow icon={UserRound} label="Name" value={account.name} />
      <SettingsFieldRow icon={UserRound} label="Avatar" value={account.avatar} actionLabel="Change" />
      <SettingsFieldRow icon={Mail} label="Email" value={account.email} disabled />
      <SettingsFieldRow icon={Phone} label="Phone" value={account.phone} />
      <SettingsFieldRow icon={MapPin} label="Address" value={account.address} />
      <Pressable onPress={onDeleteAccount} style={styles.deleteAccountButton}>
        <Trash2 size={18} color={colors.rose} strokeWidth={2.4} />
        <Text style={styles.deleteAccountText}>Delete Account</Text>
      </Pressable>
    </SettingsModal>
  );
}
