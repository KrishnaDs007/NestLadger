import { Pressable, Text, View } from "react-native";
import { ChevronRight, Plus } from "lucide-react-native";
import { colors, styles } from "../styles/styles";
import { getSpent, money } from "../utils/expenseUtils";
import { Avatar } from "./Avatar";
import { Stat } from "./Stat";

function InlineQuickAdd({ onPress }) {
  return (
    <Pressable
      onPress={(event) => {
        event.stopPropagation?.();
        onPress();
      }}
      style={styles.inlineAdd}
    >
      <Text style={styles.inlineInputText}>Add todo to this group</Text>
      <View style={styles.inlineButton}>
        <Plus size={18} color={colors.text} strokeWidth={2.5} />
      </View>
    </Pressable>
  );
}

export function GroupCard({ group, onOpen, openTodoGroup }) {
  const spent = getSpent(group);
  const avatars = group.members.slice(0, 4);

  return (
    <Pressable onPress={() => onOpen(group.id)} style={styles.groupCard}>
      <View style={styles.rowBetween}>
        <Text style={styles.groupTitle}>{group.name}</Text>
        <ChevronRight size={20} color={colors.muted} strokeWidth={2.3} />
      </View>
      <View style={styles.avatarStack}>
        {avatars.map((member) => (
          <Avatar key={member.id} label={member.avatar} small />
        ))}
        {group.members.length > 4 ? <Text style={styles.moreMembers}>+{group.members.length - 4}</Text> : null}
      </View>
      <View style={styles.groupStats}>
        <Stat label="Target" value={money(group.target)} />
        <Stat label="Expense" value={money(spent)} />
      </View>
      <InlineQuickAdd onPress={() => openTodoGroup(group.id)} />
    </Pressable>
  );
}
