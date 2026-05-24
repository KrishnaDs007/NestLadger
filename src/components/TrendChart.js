import { ScrollView, Text, View } from "react-native";
import { filters } from "../data/mockData";
import { styles } from "../styles/styles";
import { PillButton } from "./PillButton";

export function TrendChart({ expenses, filter, setFilter }) {
  const dayTotals = expenses.reduce((totals, expense) => {
    totals[expense.day] = (totals[expense.day] || 0) + expense.amount;
    return totals;
  }, {});
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const max = Math.max(...days.map((day) => dayTotals[day] || 0), 1);

  return (
    <View style={styles.chartCard}>
      <Text style={styles.sectionTitle}>Spending trend</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterRow}>
        {filters.map((item) => (
          <PillButton key={item} active={filter === item} onPress={() => setFilter(item)}>
            {item}
          </PillButton>
        ))}
      </ScrollView>
      <View style={styles.barChart}>
        {days.map((day) => (
          <View key={day} style={styles.barColumn}>
            <View style={[styles.bar, { height: 24 + ((dayTotals[day] || 0) / max) * 120 }]} />
            <Text style={styles.barLabel}>{day}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
