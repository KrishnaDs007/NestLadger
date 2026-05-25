import { Pressable, ScrollView, Text, View } from "react-native";
import { Mail, Trash2 } from "lucide-react-native";
import { Avatar } from "../Avatar";
import { SettingsModal } from "./SettingsModal";
import { colors, styles } from "../../styles/styles";

export function FriendsModal({ visible, friends, onClose, onInvite, onRemove }) {
  return (
    <SettingsModal title="Manage Friends" visible={visible} onClose={onClose}>
      <ScrollView style={styles.settingsModalScroll} contentContainerStyle={styles.settingsModalList}>
        {friends.map((friend) => (
          <View key={`${friend.groupId}-${friend.id}`} style={styles.friendRow}>
            <Avatar label={friend.avatar} small />
            <View style={styles.friendCopy}>
              <Text style={styles.friendName}>{friend.name}</Text>
              <Text style={styles.friendMeta}>{friend.groupName}</Text>
            </View>
            {friend.id === "krishna" ? (
              <Text style={styles.settingsLockText}>You</Text>
            ) : (
              <Pressable onPress={() => onRemove(friend)} style={styles.friendRemoveButton}>
                <Trash2 size={17} color={colors.rose} strokeWidth={2.4} />
                <Text style={styles.friendRemoveText}>Remove</Text>
              </Pressable>
            )}
          </View>
        ))}
      </ScrollView>
      <Pressable onPress={onInvite} style={styles.primarySettingsButton}>
        <Mail size={18} color={colors.text} strokeWidth={2.4} />
        <Text style={styles.primarySettingsButtonText}>Invite Friend</Text>
      </Pressable>
    </SettingsModal>
  );
}
