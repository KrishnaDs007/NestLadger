import { Pressable, ScrollView, Text, View } from "react-native";
import { Mail, Pencil, Plus, Scale, UserMinus, UserPlus } from "lucide-react-native";
import { Avatar } from "../components/Avatar";
import { BackButton } from "../components/BackButton";
import { SettingsButton } from "../components/SettingsButton";
import { colors, styles } from "../styles/styles";

export function GroupsScreen({ groups, selectedGroup, setSelectedGroup, createGroup, addMember, removeMember, openSettings, goBack }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.pageHeader}>
        <BackButton onPress={goBack} />
        <View>
          <Text style={styles.kicker}>Admin tools</Text>
          <Text style={styles.title}>Groups</Text>
        </View>
        <View style={styles.headerActions}>
          <Pressable onPress={createGroup} style={styles.squareButton}>
            <Plus size={22} color={colors.text} strokeWidth={2.5} />
          </Pressable>
          <SettingsButton onPress={openSettings} />
        </View>
      </View>
      {groups.map((group) => (
        <Pressable key={group.id} onPress={() => setSelectedGroup(group.id)} style={[styles.groupCard, selectedGroup.id === group.id && styles.selectedCard]}>
          <View style={styles.rowBetween}>
            <Text style={styles.groupTitle}>{group.name}</Text>
            <Pressable style={styles.editButton}>
              <Pencil size={17} color={colors.primarySoft} strokeWidth={2.3} />
              <Text style={styles.editText}>Edit</Text>
            </Pressable>
          </View>
          <View style={styles.memberList}>
            {group.members.map((member) => (
              <View key={member.id} style={styles.memberChip}>
                <Avatar label={member.avatar} small />
                <Text style={styles.memberName}>{member.name}</Text>
                {member.id !== "krishna" ? (
                  <Pressable onPress={() => removeMember(group.id, member.id)}>
                    <UserMinus size={18} color={colors.rose} strokeWidth={2.3} />
                  </Pressable>
                ) : null}
              </View>
            ))}
          </View>
          <View style={styles.groupActions}>
            <Pressable onPress={() => addMember(group.id)} style={styles.secondaryButton}>
              <UserPlus size={17} color={colors.primarySoft} strokeWidth={2.3} />
              <Text style={styles.secondaryButtonText}>Add member</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton}>
              <Mail size={17} color={colors.primarySoft} strokeWidth={2.3} />
              <Text style={styles.secondaryButtonText}>Invite</Text>
            </Pressable>
            <Pressable style={styles.splitButton}>
              <Scale size={17} color={colors.text} strokeWidth={2.3} />
              <Text style={styles.splitButtonText}>Split bills</Text>
            </Pressable>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
