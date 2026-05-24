import { Animated, Pressable, Text, useWindowDimensions, View } from "react-native";
import { useEffect, useRef } from "react";
import { CheckCircle2, Home, Plus, ReceiptText, UsersRound } from "lucide-react-native";
import { tabs } from "../data/mockData";
import { colors, styles } from "../styles/styles";

const navIcons = {
  home: Home,
  todos: CheckCircle2,
  expenses: ReceiptText,
  groups: UsersRound
};

const navSlots = {
  home: 0,
  todos: 1,
  expenses: 3,
  groups: 4
};

function NavItem({ tab, activeTab, setActiveTab }) {
  const isActive = activeTab === tab.id;
  const Icon = navIcons[tab.id];

  return (
    <Pressable onPress={() => setActiveTab(tab.id)} style={styles.navItem}>
      <Icon size={24} color={isActive ? colors.dark : colors.muted} strokeWidth={isActive ? 2.8 : 2.2} />
      <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>{tab.label}</Text>
    </Pressable>
  );
}

export function BottomNav({ activeTab, setActiveTab, openMenu }) {
  const { width } = useWindowDimensions();
  const translateX = useRef(new Animated.Value(0)).current;
  const navInnerWidth = width - 64;
  const slotWidth = navInnerWidth / 5;
  const highlighterOffset = slotWidth / 2 - 24;

  useEffect(() => {
    const slot = navSlots[activeTab] ?? 0;

    Animated.spring(translateX, {
      damping: 18,
      mass: 0.7,
      stiffness: 180,
      toValue: slot * slotWidth + highlighterOffset,
      useNativeDriver: true
    }).start();
  }, [activeTab, highlighterOffset, slotWidth, translateX]);

  return (
    <View style={styles.bottomNav}>
      <Animated.View pointerEvents="none" style={[styles.navHighlighter, { transform: [{ translateX }] }]} />
      {tabs.slice(0, 2).map((tab) => (
        <NavItem key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
      ))}
      <Pressable onPress={openMenu} style={styles.fab}>
        <Plus size={32} color={colors.text} strokeWidth={2.4} />
      </Pressable>
      {tabs.slice(2).map((tab) => (
        <NavItem key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} />
      ))}
    </View>
  );
}
