import { colors } from "./theme";

export const todoStyles = {
  inlineAdd: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderColor: colors.glassBorder,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    marginTop: 16,
    padding: 6
  },
  inlineInput: {
    color: colors.text,
    flex: 1,
    fontSize: 14,
    minHeight: 40,
    paddingHorizontal: 10
  },
  inlineButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 14,
    height: 36,
    justifyContent: "center",
    width: 36
  },
  compactInputRow: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 16,
    flexDirection: "row",
    gap: 8,
    marginTop: 12,
    padding: 7
  },
  compactInput: {
    color: colors.text,
    flex: 1,
    fontSize: 15,
    minHeight: 38,
    paddingHorizontal: 8
  },
  todoRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    minHeight: 48
  },
  check: {
    alignItems: "center",
    borderColor: colors.glassBorder,
    borderRadius: 14,
    borderWidth: 2,
    height: 28,
    justifyContent: "center",
    width: 28
  },
  checkDone: {
    backgroundColor: colors.emerald,
    borderColor: colors.emerald
  },
  todoText: {
    color: colors.text,
    flex: 1,
    fontSize: 17,
    fontWeight: "800"
  },
  todoDone: {
    color: colors.faint,
    textDecorationLine: "line-through"
  },
  todoCountBadge: {
    alignItems: "center",
    backgroundColor: "rgba(139,206,255,0.16)",
    borderColor: colors.glassBorder,
    borderRadius: 999,
    borderWidth: 1,
    height: 60,
    justifyContent: "center",
    width: 60
  },
  todoCountNumber: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900"
  },
  todoCountLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "800"
  },
  todoListCard: {
    alignItems: "center",
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 28,
    borderWidth: 1,
    flexDirection: "row",
    gap: 14,
    marginBottom: 14,
    minHeight: 82,
    paddingHorizontal: 20
  },
  todoListCopy: {
    flex: 1
  },
  chipRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 26
  }
};
