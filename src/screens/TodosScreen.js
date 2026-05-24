import { Pressable, ScrollView, Text, View } from "react-native";
import { Check } from "lucide-react-native";
import { BackButton } from "../components/BackButton";
import { PillButton } from "../components/PillButton";
import { SettingsButton } from "../components/SettingsButton";
import { colors, styles } from "../styles/styles";
import { getAllTodos, getPendingTodos } from "../utils/expenseUtils";

export function TodosScreen({ groups, toggleTodo, openSettings, goBack }) {
  const todos = getAllTodos(groups);
  const pendingCount = getPendingTodos(groups).length;
  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.pageHeader}>
        <BackButton onPress={goBack} />
        <View>
          <Text style={styles.title}>Todos</Text>
        </View>
        <View style={styles.headerActions}>
          <View style={styles.todoCountBadge}>
            <Text style={styles.todoCountNumber}>{pendingCount}</Text>
            <Text style={styles.todoCountLabel}>open</Text>
          </View>
          <SettingsButton onPress={openSettings} />
        </View>
      </View>

      <View style={styles.chipRow}>
        <PillButton active>All</PillButton>
        <PillButton>Chores</PillButton>
        <PillButton>Groceries</PillButton>
        <PillButton>Bills</PillButton>
      </View>

      <Text style={styles.kicker}>Pending</Text>
      {pendingTodos.map((todo) => (
        <Pressable key={`${todo.groupId}-${todo.id}`} onPress={() => toggleTodo(todo.groupId, todo.id)} style={styles.todoListCard}>
          <View style={[styles.check, todo.completed && styles.checkDone]}>
            {todo.completed ? <Check size={15} color={colors.text} strokeWidth={3} /> : null}
          </View>
          <View style={styles.todoListCopy}>
            <Text style={[styles.todoText, todo.completed && styles.todoDone]}>{todo.title}</Text>
            <Text style={styles.expenseMeta}>{todo.groupName} . updated recently</Text>
          </View>
        </Pressable>
      ))}

      <Text style={[styles.kicker, { marginTop: 18, marginBottom: 12 }]}>Completed</Text>
      {completedTodos.map((todo) => (
        <Pressable key={`${todo.groupId}-${todo.id}`} onPress={() => toggleTodo(todo.groupId, todo.id)} style={styles.todoListCard}>
          <View style={[styles.check, styles.checkDone]}>
            <Check size={15} color={colors.text} strokeWidth={3} />
          </View>
          <View style={styles.todoListCopy}>
            <Text style={[styles.todoText, styles.todoDone]}>{todo.title}</Text>
            <Text style={styles.expenseMeta}>{todo.groupName} . done</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}
