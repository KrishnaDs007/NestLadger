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
  inlineInputText: {
    color: colors.muted,
    flex: 1,
    fontSize: 14,
    fontWeight: "800",
    minHeight: 40,
    paddingHorizontal: 10,
    paddingTop: 11
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
  todoAddCard: {
    backgroundColor: colors.glass,
    borderColor: "rgba(139,206,255,0.24)",
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 22,
    padding: 16
  },
  todoAddInputRow: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.07)",
    borderColor: colors.glassBorder,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 12,
    padding: 8
  },
  todoAddInput: {
    color: colors.text,
    flex: 1,
    fontSize: 16,
    minHeight: 42,
    paddingHorizontal: 8
  },
  todoAddButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 16,
    height: 42,
    justifyContent: "center",
    width: 42
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
    fontSize: 17,
    fontWeight: "900",
    lineHeight: 22,
    marginBottom: 4
  },
  todoDone: {
    color: colors.faint,
    textDecorationLine: "line-through"
  },
  todoGroupMeta: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "800",
    lineHeight: 17
  },
  todoTimeMeta: {
    color: colors.faint,
    fontSize: 12,
    fontWeight: "700",
    lineHeight: 16,
    marginTop: 1
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
    minHeight: 96,
    paddingHorizontal: 20,
    paddingVertical: 14
  },
  todoListCopy: {
    flex: 1,
    justifyContent: "center",
    minHeight: 66
  },
  todoDeleteButton: {
    alignItems: "center",
    backgroundColor: "rgba(244,63,94,0.12)",
    borderColor: "rgba(244,63,94,0.24)",
    borderRadius: 16,
    borderWidth: 1,
    height: 38,
    justifyContent: "center",
    width: 38
  },
  chipRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 26
  }
};
