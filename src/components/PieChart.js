import { Text, View } from "react-native";
import { styles } from "../styles/styles";
import { getCategoryTotals, money } from "../utils/expenseUtils";

export function PieChart({ expenses }) {
  const totals = getCategoryTotals(expenses);
  const total = Object.values(totals).reduce((sum, value) => sum + value, 0) || 1;
  const colors = ["#2563eb", "#16a34a", "#f97316", "#9333ea", "#dc2626"];

  return (
    <View style={styles.chartCard}>
      <View style={styles.rowBetween}>
        <Text style={styles.sectionTitle}>Expense categories</Text>
        <Text style={styles.mutedText}>{money(total)}</Text>
      </View>
      <View style={styles.pieWrap}>
        <View style={styles.pieCircle}>
          {Object.entries(totals).slice(0, 5).map(([category, value], index) => (
            <View
              key={category}
              style={[
                styles.pieSlice,
                {
                  backgroundColor: colors[index],
                  height: `${Math.max(12, (value / total) * 100)}%`,
                  transform: [{ rotate: `${index * 35}deg` }]
                }
              ]}
            />
          ))}
          <View style={styles.pieCenter}>
            <Text style={styles.pieCenterText}>{Object.keys(totals).length}</Text>
            <Text style={styles.pieCenterLabel}>types</Text>
          </View>
        </View>
        <View style={styles.legend}>
          {Object.entries(totals).map(([category, value], index) => (
            <View key={category} style={styles.legendRow}>
              <View style={[styles.legendDot, { backgroundColor: colors[index % colors.length] }]} />
              <Text style={styles.legendLabel}>{category}</Text>
              <Text style={styles.legendValue}>{Math.round((value / total) * 100)}%</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
