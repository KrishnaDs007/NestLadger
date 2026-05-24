import { useEffect, useMemo, useRef, useState } from "react";
import { Keyboard, Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { Check, Plus, Trash2 } from "lucide-react-native";
import { BackButton } from "../components/BackButton";
import { PillButton } from "../components/PillButton";
import { SettingsButton } from "../components/SettingsButton";
import { colors, styles } from "../styles/styles";
import { getAllTodos, getPendingTodos } from "../utils/expenseUtils";

function formatUpdatedAt(value) {
  if (!value) {
    return "Updated recently";
  }

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

export function TodosScreen({ groups, focusGroupId, setFocusGroupId, addTodo, toggleTodo, removeTodo, openSettings, goBack }) {
  const [title, setTitle] = useState("");
  const [viewGroupId, setViewGroupId] = useState(focusGroupId || "all");
  const inputRef = useRef(null);
  const todos = getAllTodos(groups);
  const pendingCount = getPendingTodos(groups).length;
  const focusedGroup = useMemo(
    () => groups.find((group) => group.id === focusGroupId) || groups[0],
    [focusGroupId, groups]
  );
  const visibleTodos = viewGroupId === "all" ? todos : todos.filter((todo) => todo.groupId === viewGroupId);
  const pendingTodos = visibleTodos.filter((todo) => !todo.completed);
  const completedTodos = visibleTodos.filter((todo) => todo.completed);

  useEffect(() => {
    setViewGroupId(focusGroupId || "all");
  }, [focusGroupId]);

  useEffect(() => {
    if (viewGroupId === "all") {
      return undefined;
    }

    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 180);

    return () => clearTimeout(timer);
  }, [viewGroupId]);

  function submitTodo() {
    const nextTitle = title.trim();

    if (!nextTitle || !focusedGroup) {
      return;
    }

    addTodo(focusedGroup.id, nextTitle);
    setTitle("");
    Keyboard.dismiss();
  }

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
        <PillButton active={viewGroupId === "all"} onPress={() => setViewGroupId("all")}>All</PillButton>
        {groups.map((group) => (
          <PillButton
            key={group.id}
            active={viewGroupId === group.id}
            onPress={() => {
              setFocusGroupId(group.id);
              setViewGroupId(group.id);
            }}
          >
            {group.name}
          </PillButton>
        ))}
      </View>

      <View style={styles.todoAddCard}>
        <Text style={styles.cardEyebrow}>Add to {focusedGroup?.name}</Text>
        <View style={styles.todoAddInputRow}>
          <TextInput
            ref={inputRef}
            value={title}
            onChangeText={setTitle}
            onSubmitEditing={submitTodo}
            placeholder="New grocery, chore, or bill"
            placeholderTextColor="#7c8594"
            returnKeyType="done"
            style={styles.todoAddInput}
          />
          <Pressable onPress={submitTodo} style={styles.todoAddButton}>
            <Plus size={21} color={colors.text} strokeWidth={2.6} />
          </Pressable>
        </View>
      </View>

      <Text style={styles.kicker}>Pending</Text>
      {pendingTodos.map((todo) => (
        <View key={`${todo.groupId}-${todo.id}`} style={styles.todoListCard}>
          <Pressable onPress={() => toggleTodo(todo.groupId, todo.id)} style={[styles.check, todo.completed && styles.checkDone]}>
            {todo.completed ? <Check size={15} color={colors.text} strokeWidth={3} /> : null}
          </Pressable>
          <Pressable onPress={() => setFocusGroupId(todo.groupId)} style={styles.todoListCopy}>
            <Text style={[styles.todoText, todo.completed && styles.todoDone]}>{todo.title}</Text>
            <Text style={styles.todoGroupMeta}>{todo.groupName}</Text>
            <Text style={styles.todoTimeMeta}>{formatUpdatedAt(todo.updatedAt)}</Text>
          </Pressable>
          <Pressable onPress={() => removeTodo(todo.groupId, todo.id)} style={styles.todoDeleteButton}>
            <Trash2 size={18} color={colors.rose} strokeWidth={2.4} />
          </Pressable>
        </View>
      ))}

      <Text style={[styles.kicker, { marginTop: 18, marginBottom: 12 }]}>Completed</Text>
      {completedTodos.map((todo) => (
        <View key={`${todo.groupId}-${todo.id}`} style={styles.todoListCard}>
          <Pressable onPress={() => toggleTodo(todo.groupId, todo.id)} style={[styles.check, styles.checkDone]}>
            <Check size={15} color={colors.text} strokeWidth={3} />
          </Pressable>
          <Pressable onPress={() => setFocusGroupId(todo.groupId)} style={styles.todoListCopy}>
            <Text style={[styles.todoText, styles.todoDone]}>{todo.title}</Text>
            <Text style={styles.todoGroupMeta}>{todo.groupName}</Text>
            <Text style={styles.todoTimeMeta}>{formatUpdatedAt(todo.updatedAt)}</Text>
          </Pressable>
          <Pressable onPress={() => removeTodo(todo.groupId, todo.id)} style={styles.todoDeleteButton}>
            <Trash2 size={18} color={colors.rose} strokeWidth={2.4} />
          </Pressable>
        </View>
      ))}
    </ScrollView>
  );
}
