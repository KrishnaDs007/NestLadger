import { Pressable, Text, TextInput, View } from "react-native";
import { Mail } from "lucide-react-native";
import { SettingsModal } from "./SettingsModal";
import { colors, styles } from "../../styles/styles";

export function InviteFriendModal({ visible, groups, email, groupId, onEmailChange, onGroupChange, onSubmit, onClose }) {
  return (
    <SettingsModal title="Invite Friend" visible={visible} onClose={onClose}>
      <Text style={styles.settingsHelpText}>Send an invite by email and choose the group they should join.</Text>
      <View style={styles.settingsInputWrap}>
        <Mail size={19} color={colors.muted} strokeWidth={2.2} />
        <TextInput value={email} onChangeText={onEmailChange} placeholder="friend@example.com" placeholderTextColor="#7c8594" keyboardType="email-address" autoCapitalize="none" style={styles.settingsTextInput} />
      </View>
      <View style={styles.settingsChipWrap}>
        {groups.map((group) => (
          <Pressable key={group.id} onPress={() => onGroupChange(group.id)} style={[styles.settingsChip, groupId === group.id && styles.settingsChipActive]}>
            <Text style={[styles.settingsChipText, groupId === group.id && styles.settingsChipTextActive]}>{group.name}</Text>
          </Pressable>
        ))}
      </View>
      <Pressable onPress={onSubmit} style={styles.primarySettingsButton}>
        <Text style={styles.primarySettingsButtonText}>Send Invite</Text>
      </Pressable>
    </SettingsModal>
  );
}
