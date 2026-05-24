import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { getCurrentMonthTotal, getTopUnsettledGroups, money } from "../utils/expenseUtils";

export function HomeExpenseSummary({ groups }) {
  const total = getCurrentMonthTotal(groups);
  const unsettledGroups = getTopUnsettledGroups(groups);

  return (
    <View style={styles.homeSummaryCard}>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.cardEyebrow}>Current month</Text>
          <Text style={styles.summaryAmount}>{money(total)}</Text>
        </View>
        <View style={styles.unsettledBadge}>
          <Text style={styles.unsettledBadgeText}>Unsettled</Text>
        </View>
      </View>

      <View style={styles.unsettledList}>
        {unsettledGroups.map((group, index) => (
          <View key={group.id} style={styles.unsettledRow}>
            <Text style={styles.rankText}>#{index + 1}</Text>
            <Text style={styles.unsettledName}>{group.name}</Text>
            <Text style={styles.unsettledAmount}>{money(group.amount)}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
