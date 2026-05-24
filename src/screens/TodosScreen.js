import { Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PillButton } from "../components/PillButton";
import { styles } from "../styles/styles";
import { getAllTodos, getPendingTodos } from "../utils/expenseUtils";

export function TodosScreen({ groups, toggleTodo }) {
  const todos = getAllTodos(groups);
  const pendingCount = getPendingTodos(groups).length;
  const pendingTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.pageHeader}>
        <View>
          <Text style={styles.title}>Todos</Text>
        </View>
        <View style={styles.todoCountBadge}>
          <Text style={styles.todoCountNumber}>{pendingCount}</Text>
          <Text style={styles.todoCountLabel}>open</Text>
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
            {todo.completed ? <Ionicons name="checkmark" size={15} color="#ffffff" /> : null}
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
            <Ionicons name="checkmark" size={15} color="#ffffff" />
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
