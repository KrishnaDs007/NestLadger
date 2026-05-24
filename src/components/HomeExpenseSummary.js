import { Pressable, Text, View } from "react-native";
import { BellRing, Send } from "lucide-react-native";
import { SparklineChart } from "./SparklineChart";
import { styles } from "../styles/styles";
import { getCurrentMonthTotal, getTopUnsettledGroups, money } from "../utils/expenseUtils";

const monthlyPoints = [5800, 7600, 6900, 9200, 11800, 10200, 13400, 15100, 12900, 16200];

export function HomeExpenseSummary({ groups }) {
  const total = getCurrentMonthTotal(groups);
  const unsettledGroups = getTopUnsettledGroups(groups);
  const topAmount = unsettledGroups.reduce((sum, group) => sum + group.amount, 0);

  return (
    <View style={styles.homeHeroCard}>
      <View style={styles.rowBetween}>
        <View>
          <Text style={styles.cardEyebrow}>Current month</Text>
          <Text style={styles.summaryAmount}>{money(total)}</Text>
        </View>
        <View style={[styles.unsettledBadge, topAmount === 0 && styles.settledBadge]}>
          <Text style={styles.unsettledBadgeText}>{topAmount === 0 ? "Settled" : "Unsettled"}</Text>
        </View>
      </View>

      <View style={styles.homeHeroChart}>
        <SparklineChart points={monthlyPoints} height={150} />
      </View>

      {unsettledGroups.length > 0 ? (
        <View style={styles.unsettledList}>
          {unsettledGroups.map((group, index) => (
            <View key={group.id} style={styles.unsettledRow}>
              <View style={styles.rankBubble}>
                <Text style={styles.rankText}>{index + 1}</Text>
              </View>
              <View style={styles.unsettledCopy}>
                <Text style={styles.unsettledName}>{group.name}</Text>
                <Text style={styles.unsettledMeta}>Needs settlement</Text>
              </View>
              <Text style={styles.unsettledAmount}>{money(group.amount)}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.homeHeroMeta}>All family expenses are settled for this month.</Text>
      )}

      <View style={styles.heroActions}>
        <Pressable style={styles.heroPrimaryButton}>
          <Send size={17} color="#ffffff" strokeWidth={2.4} />
          <Text style={styles.heroPrimaryText}>Settle Up</Text>
        </Pressable>
        <Pressable style={styles.heroSecondaryButton}>
          <BellRing size={17} color="#d8efff" strokeWidth={2.4} />
          <Text style={styles.heroSecondaryText}>Remind</Text>
        </Pressable>
      </View>
    </View>
  );
}
