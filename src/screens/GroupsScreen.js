import { Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "../components/Avatar";
import { styles } from "../styles/styles";

export function GroupsScreen({ groups, selectedGroup, setSelectedGroup, createGroup, addMember, removeMember }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.kicker}>Admin tools</Text>
          <Text style={styles.title}>Groups</Text>
        </View>
        <Pressable onPress={createGroup} style={styles.squareButton}>
          <Ionicons name="add" size={22} color="#ffffff" />
        </Pressable>
      </View>
      {groups.map((group) => (
        <Pressable key={group.id} onPress={() => setSelectedGroup(group.id)} style={[styles.groupCard, selectedGroup.id === group.id && styles.selectedCard]}>
          <View style={styles.rowBetween}>
            <Text style={styles.groupTitle}>{group.name}</Text>
            <Pressable style={styles.editButton}>
              <Ionicons name="create-outline" size={18} color="#2563eb" />
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
                    <Ionicons name="close-circle" size={18} color="#c2410c" />
                  </Pressable>
                ) : null}
              </View>
            ))}
          </View>
          <View style={styles.groupActions}>
            <Pressable onPress={() => addMember(group.id)} style={styles.secondaryButton}>
              <Ionicons name="person-add-outline" size={17} color="#2563eb" />
              <Text style={styles.secondaryButtonText}>Add member</Text>
            </Pressable>
            <Pressable style={styles.secondaryButton}>
              <Ionicons name="mail-outline" size={17} color="#2563eb" />
              <Text style={styles.secondaryButtonText}>Invite</Text>
            </Pressable>
            <Pressable style={styles.splitButton}>
              <Ionicons name="git-compare-outline" size={17} color="#ffffff" />
              <Text style={styles.splitButtonText}>Split bills</Text>
            </Pressable>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
