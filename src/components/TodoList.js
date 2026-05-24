import { useState } from "react";
import { Keyboard, Pressable, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "../styles/styles";

export function TodoList({ group, addTodo, toggleTodo }) {
  const [title, setTitle] = useState("");

  function submit() {
    const nextTitle = title.trim();

    if (!nextTitle) {
      return;
    }

    addTodo(group.id, nextTitle);
    setTitle("");
    Keyboard.dismiss();
  }

  return (
    <View style={styles.chartCard}>
      <View style={styles.rowBetween}>
        <Text style={styles.sectionTitle}>Groceries and todos</Text>
        <Text style={styles.mutedText}>{group.todos.filter((todo) => !todo.completed).length} open</Text>
      </View>
      <View style={styles.compactInputRow}>
        <TextInput value={title} onChangeText={setTitle} onSubmitEditing={submit} placeholder="Quick add item" placeholderTextColor="#7c8594" style={styles.compactInput} />
        <Pressable onPress={submit} style={styles.squareButton}>
          <Ionicons name="add" size={22} color="#ffffff" />
        </Pressable>
      </View>
      {group.todos.map((todo) => (
        <Pressable key={todo.id} onPress={() => toggleTodo(group.id, todo.id)} style={styles.todoRow}>
          <View style={[styles.check, todo.completed && styles.checkDone]}>
            {todo.completed ? <Ionicons name="checkmark" size={15} color="#ffffff" /> : null}
          </View>
          <Text style={[styles.todoText, todo.completed && styles.todoDone]}>{todo.title}</Text>
        </Pressable>
      ))}
    </View>
  );
}
