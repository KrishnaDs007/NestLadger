import { Animated, Pressable, Text, useWindowDimensions, View } from "react-native";
import { useEffect, useRef, useState } from "react";
import { CheckCircle2, Home, Plus, ReceiptText, UsersRound } from "lucide-react-native";
import { tabs } from "../data/mockData";
import { colors, styles } from "../styles/styles";

const navIcons = {
  home: Home,
  todos: CheckCircle2,
  expenses: ReceiptText,
  groups: UsersRound
};

const highlighterSize = 48;

function NavItem({ tab, activeTab, setActiveTab, onLayout }) {
  const isActive = activeTab === tab.id;
  const Icon = navIcons[tab.id];

  return (
    <Pressable onLayout={(event) => onLayout(tab.id, event)} onPress={() => setActiveTab(tab.id)} style={styles.navItem}>
      <Icon size={24} color={isActive ? colors.dark : colors.muted} strokeWidth={isActive ? 2.8 : 2.2} />
      <Text style={[styles.navLabel, isActive && styles.navLabelActive]}>{tab.label}</Text>
    </Pressable>
  );
}

export function BottomNav({ activeTab, setActiveTab, openMenu }) {
  const { width } = useWindowDimensions();
  const translateX = useRef(new Animated.Value(0)).current;
  const [navCenters, setNavCenters] = useState({});

  function updateNavCenter(tabId, event) {
    const { x, width: itemWidth } = event.nativeEvent.layout;
    const center = x + itemWidth / 2;

    setNavCenters((currentCenters) => {
      if (currentCenters[tabId] === center) {
        return currentCenters;
      }

      return { ...currentCenters, [tabId]: center };
    });
  }

  useEffect(() => {
    const activeCenter = navCenters[activeTab];

    if (activeCenter === undefined) {
      return;
    }

    Animated.spring(translateX, {
      damping: 18,
      mass: 0.7,
      stiffness: 180,
      toValue: activeCenter - highlighterSize / 2,
      useNativeDriver: false
    }).start();
  }, [activeTab, navCenters, translateX, width]);

  return (
    <View style={styles.bottomNav}>
      <Animated.View style={[styles.navHighlighter, { transform: [{ translateX }] }]} />
      {tabs.slice(0, 2).map((tab) => (
        <NavItem key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} onLayout={updateNavCenter} />
      ))}
      <Pressable onPress={openMenu} style={styles.fab}>
        <Plus size={32} color={colors.text} strokeWidth={2.4} />
      </Pressable>
      {tabs.slice(2).map((tab) => (
        <NavItem key={tab.id} tab={tab} activeTab={activeTab} setActiveTab={setActiveTab} onLayout={updateNavCenter} />
      ))}
    </View>
  );
}
