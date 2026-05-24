import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { ChevronRight, Plus } from "lucide-react-native";
import { colors, styles } from "../styles/styles";
import { getSpent, money } from "../utils/expenseUtils";
import { Avatar } from "./Avatar";
import { Stat } from "./Stat";

function InlineQuickAdd({ onSubmit }) {
  const [value, setValue] = useState("");

  function submit() {
    const title = value.trim();

    if (!title) {
      return;
    }

    onSubmit(title);
    setValue("");
  }

  return (
    <View style={styles.inlineAdd}>
      <TextInput value={value} onChangeText={setValue} onSubmitEditing={submit} placeholder="Add todo to group" placeholderTextColor="#7c8594" style={styles.inlineInput} />
      <Pressable onPress={submit} style={styles.inlineButton}>
        <Plus size={18} color={colors.text} strokeWidth={2.5} />
      </Pressable>
    </View>
  );
}

export function GroupCard({ group, onOpen, addTodo }) {
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
      <InlineQuickAdd onSubmit={(title) => addTodo(group.id, title)} />
    </Pressable>
  );
}
