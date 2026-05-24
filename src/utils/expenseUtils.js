export function money(value) {
  return `Rs ${Math.round(value).toLocaleString("en-IN")}`;
}

export function getBudgetColor(percent) {
  if (percent <= 70) {
    return "#86efac";
  }

  if (percent <= 90) {
    return "#fde68a";
  }

  return "#fecaca";
}

export function getSpent(group) {
  return group.expenses.reduce((total, expense) => total + expense.amount, 0);
}

export function getCategoryTotals(expenses) {
  return expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;
    return totals;
  }, {});
}

export function getAllExpenses(groups) {
  return groups.flatMap((group) =>
    group.expenses.map((expense) => ({
      ...expense,
      groupId: group.id,
      groupName: group.name
    }))
  );
}

export function getCurrentMonthExpenses(groups) {
  return getAllExpenses(groups).filter((expense) => expense.date?.startsWith("2026-05"));
}

export function getCurrentMonthTotal(groups) {
  return getCurrentMonthExpenses(groups).reduce((total, expense) => total + expense.amount, 0);
}

export function getTopUnsettledGroups(groups, limit = 3) {
  return groups
    .map((group) => ({
      id: group.id,
      name: group.name,
      amount: group.expenses
        .filter((expense) => expense.date?.startsWith("2026-05") && !expense.settled)
        .reduce((total, expense) => total + expense.amount, 0)
    }))
    .filter((group) => group.amount > 0)
    .sort((first, second) => second.amount - first.amount)
    .slice(0, limit);
}

export function getAllTodos(groups) {
  return groups
    .flatMap((group) =>
      group.todos.map((todo) => ({
        ...todo,
        groupId: group.id,
        groupName: group.name
      }))
    )
    .sort((first, second) => new Date(second.updatedAt || 0) - new Date(first.updatedAt || 0));
}

export function getPendingTodos(groups) {
  return getAllTodos(groups).filter((todo) => !todo.completed);
}
