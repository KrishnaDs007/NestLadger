import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Bell, ChevronDown, ChevronRight, ChevronUp, CreditCard, Lock, UserRound } from "lucide-react-native";
import { Avatar } from "../components/Avatar";
import { BackButton } from "../components/BackButton";
import { currentUser } from "../data/mockData";
import { colors, styles } from "../styles/styles";

const profileRows = [
  { icon: UserRound, label: "Account Settings" },
  { icon: Bell, label: "Notification Preferences" },
  { icon: CreditCard, label: "Payment Methods" },
  { icon: Lock, label: "Privacy & Security" }
];

export function ProfileScreen({ groups, goBack }) {
  const [showGroups, setShowGroups] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.pageHeader}>
        <BackButton onPress={goBack} />
        <Text style={styles.title}>Settings</Text>
        <View style={styles.headerSpacer} />
      </View>
      <View style={styles.profileHeader}>
        <Avatar label={currentUser.avatar} />
        <Text style={styles.profileName}>Alex Johnson</Text>
        <Text style={styles.profileEmail}>alex.j@example.com</Text>
      </View>
      <View style={styles.chartCard}>
        <Pressable onPress={() => setShowGroups((current) => !current)} style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Manage Roommates</Text>
          {showGroups ? (
            <ChevronUp size={20} color={colors.muted} strokeWidth={2.3} />
          ) : (
            <ChevronDown size={20} color={colors.muted} strokeWidth={2.3} />
          )}
        </Pressable>
        {showGroups ? (
          groups.map((group) => (
            <View key={group.id} style={styles.profileGroupRow}>
              <Text style={styles.expenseTitle}>{group.name}</Text>
              <Text style={styles.mutedText}>{group.members.length} members</Text>
            </View>
          ))
        ) : (
          <Text style={styles.mutedText}>Tap to show all group links.</Text>
        )}
      </View>
      <View style={styles.menuListCard}>
        {profileRows.map(({ icon: Icon, label }) => (
          <View key={label} style={styles.menuRow}>
            <Icon size={24} color={colors.primarySoft} strokeWidth={2.2} />
            <Text style={styles.menuRowText}>{label}</Text>
            <ChevronRight size={20} color="rgba(248,250,252,0.55)" strokeWidth={2.3} />
          </View>
        ))}
      </View>
      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}
