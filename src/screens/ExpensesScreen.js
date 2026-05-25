import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Plus } from "lucide-react-native";
import { BackButton } from "../components/BackButton";
import { BudgetCard } from "../components/BudgetCard";
import { PieChart } from "../components/PieChart";
import { SettingsButton } from "../components/SettingsButton";
import { TrendChart } from "../components/TrendChart";
import { colors, styles } from "../styles/styles";
import { money } from "../utils/expenseUtils";

export function ExpensesScreen({ group, addExpense, openSettings, goBack }) {
  const [filter, setFilter] = useState("This month");

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.pageHeader}>
        <BackButton onPress={goBack} />
        <View style={styles.centeredHeaderTitleBlock}>
          <Text style={styles.kicker}>Expense calculator</Text>
          <Text style={styles.title}>{group.name}</Text>
          <View style={[styles.titleAccent, styles.titleAccentCentered]} />
        </View>
        <SettingsButton onPress={openSettings} />
      </View>
      <BudgetCard group={group} />
      <PieChart expenses={group.expenses} />
      <TrendChart expenses={group.expenses} filter={filter} setFilter={setFilter} />
      <View style={styles.chartCard}>
        <View style={styles.rowBetween}>
          <Text style={styles.sectionTitle}>Recent spends</Text>
          <Pressable onPress={addExpense} style={styles.smallAction}>
            <Plus size={18} color={colors.text} strokeWidth={2.5} />
            <Text style={styles.smallActionText}>Spend</Text>
          </Pressable>
        </View>
        {group.expenses.map((expense) => (
          <View key={expense.id} style={styles.expenseRow}>
            <View>
              <Text style={styles.expenseTitle}>{expense.title}</Text>
              <Text style={styles.expenseMeta}>{expense.category} . {expense.paymentMethod || "UPI"} . {expense.day}</Text>
            </View>
            <Text style={styles.expenseAmount}>{money(expense.amount)}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
