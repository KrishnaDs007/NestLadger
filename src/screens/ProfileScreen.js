import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Avatar } from "../components/Avatar";
import { currentUser } from "../data/mockData";
import { styles } from "../styles/styles";

export function ProfileScreen({ groups }) {
  const [showGroups, setShowGroups] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.profileHeader}>
        <Avatar label={currentUser.avatar} />
        <Text style={styles.profileName}>Alex Johnson</Text>
        <Text style={styles.profileEmail}>alex.j@example.com</Text>
      </View>
      <View style={styles.chartCard}>
        <Pressable onPress={() => setShowGroups((current) => !current)} style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Manage Roommates</Text>
          <Ionicons name={showGroups ? "chevron-up" : "chevron-down"} size={20} color="#64748b" />
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
        {[
          ["person-outline", "Account Settings"],
          ["notifications-outline", "Notification Preferences"],
          ["card-outline", "Payment Methods"],
          ["lock-closed-outline", "Privacy & Security"]
        ].map(([icon, label]) => (
          <View key={label} style={styles.menuRow}>
            <Ionicons name={icon} size={24} color="#8bceff" />
            <Text style={styles.menuRowText}>{label}</Text>
            <Ionicons name="chevron-forward" size={20} color="rgba(248,250,252,0.55)" />
          </View>
        ))}
      </View>
      <Pressable style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>
    </ScrollView>
  );
}
