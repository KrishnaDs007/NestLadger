import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { tabs } from "../data/mockData";
import { colors, styles } from "../styles/styles";

function NavItem({ tab, activeTab, setActiveTab }) {
  const isActive = activeTab === tab.id;

  return (
    <Pressable onPress={() => setActiveTab(tab.id)} style={styles.navItem}>
      <Ionicons name={tab.icon} size={24} color={isActive ? colors.primary : colors.muted} />
      <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>{tab.label}</Text>
    </Pressable>
  );
}

export function BottomNav({ activeTab, setActiveTab, openMenu }) {
  return (
    <View style={styles.bottomNav}>
      {tabs.slice(0, 2).map((tab) => (
        <NavItem key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
      ))}
      <Pressable onPress={openMenu} style={styles.fab}>
        <Ionicons name="add" size={30} color="#ffffff" />
      </Pressable>
      {tabs.slice(2).map((tab) => (
        <NavItem key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
      ))}
    </View>
  );
}
