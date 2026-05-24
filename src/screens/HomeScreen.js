import { ScrollView, Text, View } from "react-native";
import { GroupCard } from "../components/GroupCard";
import { HomeExpenseSummary } from "../components/HomeExpenseSummary";
import { HomeExpenseTrend } from "../components/HomeExpenseTrend";
import { SettingsButton } from "../components/SettingsButton";
import { styles } from "../styles/styles";

export function HomeScreen({ groups, setSelectedGroup, openTodoGroup, openSettings }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.pageHeader}>
        <View>
          <Text style={styles.kicker}>Good morning</Text>
          <Text style={styles.title}>NestLedger</Text>
        </View>
        <SettingsButton onPress={openSettings} />
      </View>
      <HomeExpenseSummary groups={groups} />
      <HomeExpenseTrend groups={groups} />
      <Text style={styles.sectionTitle}>Your groups</Text>
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} onOpen={setSelectedGroup} openTodoGroup={openTodoGroup} />
      ))}
    </ScrollView>
  );
}
