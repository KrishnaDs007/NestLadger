import { useMemo, useState } from "react";
import { Modal, Pressable, SafeAreaView, Text, View } from "react-native";
import { CreditCard, UserRound, UsersRound } from "lucide-react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { BottomNav } from "./src/components/BottomNav";
import { initialGroups } from "./src/data/mockData";
import { AuthScreen } from "./src/screens/AuthScreen";
import { ExpensesScreen } from "./src/screens/ExpensesScreen";
import { GroupsScreen } from "./src/screens/GroupsScreen";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { TodosScreen } from "./src/screens/TodosScreen";
import { colors, styles } from "./src/styles/styles";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [activeTab, setActiveTab] = useState("home");
  const [groups, setGroups] = useState(initialGroups);
  const [selectedGroupId, setSelectedGroupId] = useState("family");
  const [focusedTodoGroupId, setFocusedTodoGroupId] = useState("family");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const selectedGroup = useMemo(
    () => groups.find((group) => group.id === selectedGroupId) || groups[0],
    [groups, selectedGroupId]
  );

  function updateGroup(groupId, updater) {
    setGroups((currentGroups) =>
      currentGroups.map((group) => (group.id === groupId ? updater(group) : group))
    );
  }

  function addTodo(groupId, title) {
    const now = new Date().toISOString();

    updateGroup(groupId, (group) => ({
      ...group,
      todos: [{ id: Date.now().toString(), title, completed: false, updatedAt: now }, ...group.todos]
    }));
  }

  function toggleTodo(groupId, todoId) {
    const now = new Date().toISOString();

    updateGroup(groupId, (group) => ({
      ...group,
      todos: group.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed, updatedAt: now } : todo
      )
    }));
  }

  function removeTodo(groupId, todoId) {
    updateGroup(groupId, (group) => ({
      ...group,
      todos: group.todos.filter((todo) => todo.id !== todoId)
    }));
  }

  function addExpense() {
    updateGroup(selectedGroup.id, (group) => ({
      ...group,
      expenses: [
        {
          id: Date.now().toString(),
          title: "New grocery spend",
          category: "Food",
          amount: 999,
          day: "Today",
          date: "2026-05-24",
          settled: false
        },
        ...group.expenses
      ]
    }));
    setActiveTab("expenses");
    setIsMenuOpen(false);
  }

  function createGroup() {
    const id = Date.now().toString();

    setGroups((currentGroups) => [
      {
        id,
        name: `New Family ${currentGroups.length + 1}`,
        budget: 30000,
        target: 5000,
        adminId: "krishna",
        members: [{ id: "krishna", name: "Krishna", avatar: "KD" }],
        todos: [],
        expenses: []
      },
      ...currentGroups
    ]);
    setSelectedGroupId(id);
    setActiveTab("groups");
    setIsMenuOpen(false);
  }

  function addMember(groupId) {
    updateGroup(groupId, (group) => ({
      ...group,
      members: [...group.members, { id: Date.now().toString(), name: "New member", avatar: "NM" }]
    }));
  }

  function removeMember(groupId, memberId) {
    updateGroup(groupId, (group) => ({
      ...group,
      members: group.members.filter((member) => member.id !== memberId)
    }));
  }

  function openGroup(groupId) {
    setSelectedGroupId(groupId);
    setActiveTab("groups");
  }

  function openTodoGroup(groupId) {
    setSelectedGroupId(groupId);
    setFocusedTodoGroupId(groupId);
    setActiveTab("todos");
  }

  function openSettings() {
    setActiveTab("profile");
  }

  function goHome() {
    setActiveTab("home");
  }

  if (!isLoggedIn) {
    return <AuthScreen mode={authMode} setMode={setAuthMode} onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ExpoStatusBar style="dark" />
      <View style={styles.appShell}>
        {activeTab === "home" ? (
          <HomeScreen groups={groups} setSelectedGroup={openGroup} openTodoGroup={openTodoGroup} openSettings={openSettings} />
        ) : null}
        {activeTab === "todos" ? <TodosScreen groups={groups} focusGroupId={focusedTodoGroupId} setFocusGroupId={setFocusedTodoGroupId} addTodo={addTodo} toggleTodo={toggleTodo} removeTodo={removeTodo} openSettings={openSettings} goBack={goHome} /> : null}
        {activeTab === "groups" ? (
          <GroupsScreen groups={groups} selectedGroup={selectedGroup} setSelectedGroup={setSelectedGroupId} createGroup={createGroup} addMember={addMember} removeMember={removeMember} openSettings={openSettings} goBack={goHome} />
        ) : null}
        {activeTab === "expenses" ? <ExpensesScreen group={selectedGroup} addExpense={addExpense} openSettings={openSettings} goBack={goHome} /> : null}
        {activeTab === "profile" ? <ProfileScreen groups={groups} goBack={goHome} /> : null}

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} openMenu={() => setIsMenuOpen(true)} />

        <Modal transparent visible={isMenuOpen} animationType="fade" onRequestClose={() => setIsMenuOpen(false)}>
          <Pressable style={styles.menuBackdrop} onPress={() => setIsMenuOpen(false)}>
            <View style={styles.quickMenu}>
              <Pressable onPress={addExpense} style={styles.quickMenuItem}>
                <CreditCard size={22} color={colors.primarySoft} strokeWidth={2.3} />
                <Text style={styles.quickMenuText}>Add spend</Text>
              </Pressable>
              <Pressable onPress={createGroup} style={styles.quickMenuItem}>
                <UsersRound size={22} color={colors.primarySoft} strokeWidth={2.3} />
                <Text style={styles.quickMenuText}>Create group</Text>
              </Pressable>
              <Pressable onPress={() => { setActiveTab("profile"); setIsMenuOpen(false); }} style={styles.quickMenuItem}>
                <UserRound size={22} color={colors.primarySoft} strokeWidth={2.3} />
                <Text style={styles.quickMenuText}>Settings</Text>
              </Pressable>
            </View>
          </Pressable>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
