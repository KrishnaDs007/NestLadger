import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { getSpent, money } from "../utils/expenseUtils";
import { Stat } from "./Stat";

export function BudgetCard({ group }) {
  const spent = getSpent(group);
  const percent = Math.round((spent / group.budget) * 100);
  const remaining = group.budget - spent;

  return (
    <View style={styles.budgetCard}>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.cardEyebrow}>Monthly budget</Text>
          <Text style={styles.budgetTitle}>{group.name}</Text>
        </View>
        <Text style={styles.budgetPercent}>{percent}%</Text>
      </View>
      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${Math.min(percent, 100)}%` }]} />
      </View>
      <View style={styles.budgetGrid}>
        <Stat label="Budget" value={money(group.budget)} />
        <Stat label="Spent" value={money(spent)} />
        <Stat label={remaining >= 0 ? "Remaining" : "Over budget"} value={money(remaining)} danger={remaining < 0} />
      </View>
    </View>
  );
}
