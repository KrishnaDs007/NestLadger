import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { homeTrendFilters } from "../data/mockData";
import { styles } from "../styles/styles";
import { getCurrentMonthExpenses, money } from "../utils/expenseUtils";
import { SparklineChart } from "./SparklineChart";

const sevenDayPoints = [1200, 2400, 900, 3800, 2100, 5200, 3100];
const thirtyDayPoints = [800, 1200, 950, 1600, 2200, 1400, 3200, 2600, 4100, 1700, 2200, 2800, 3600, 1900, 4500];

export function HomeExpenseTrend({ groups }) {
  const [filter, setFilter] = useState("Last 7 days");
  const total = getCurrentMonthExpenses(groups).reduce((sum, expense) => sum + expense.amount, 0);
  const points = filter === "Last 7 days" ? sevenDayPoints : thirtyDayPoints;

  return (
    <View style={styles.trendFeatureCard}>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.sectionTitle}>Expense trend</Text>
          <Text style={styles.mutedText}>{money(total)} this month</Text>
        </View>
      </View>
      <View style={styles.homeTrendFilters}>
        {homeTrendFilters.map((item) => (
          <Pressable key={item} onPress={() => setFilter(item)} style={[styles.homeTrendFilter, filter === item && styles.homeTrendFilterActive]}>
            <Text style={[styles.homeTrendFilterText, filter === item && styles.homeTrendFilterTextActive]}>{item}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.areaChart}>
        <SparklineChart points={points} height={166} />
      </View>
    </View>
  );
}
