import { ScrollView, Text, View } from "react-native";
import { Avatar } from "../components/Avatar";
import { GroupCard } from "../components/GroupCard";
import { HomeExpenseSummary } from "../components/HomeExpenseSummary";
import { HomeExpenseTrend } from "../components/HomeExpenseTrend";
import { currentUser } from "../data/mockData";
import { styles } from "../styles/styles";

export function HomeScreen({ groups, setSelectedGroup, addTodo }) {
  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.pageHeader}>
        <View>
          <Text style={styles.kicker}>Family wallet</Text>
          <Text style={styles.title}>Dashboard</Text>
        </View>
        <Avatar label={currentUser.avatar} />
      </View>
      <HomeExpenseSummary groups={groups} />
      <HomeExpenseTrend groups={groups} />
      <Text style={styles.sectionTitle}>Your groups</Text>
      {groups.map((group) => (
        <GroupCard key={group.id} group={group} onOpen={setSelectedGroup} addTodo={addTodo} />
      ))}
    </ScrollView>
  );
}
