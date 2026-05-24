import { colors } from "./theme";

export const expenseStyles = {
  expenseRow: {
    alignItems: "center",
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    minHeight: 72,
    paddingHorizontal: 16
  },
  expenseTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "900"
  },
  expenseMeta: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "700",
    marginTop: 4
  },
  expenseAmount: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "900"
  }
};
