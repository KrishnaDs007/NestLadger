import { colors } from "./theme";

export const componentStyles = {
  avatar: {
    alignItems: "center",
    backgroundColor: colors.dark,
    borderColor: colors.primary,
    borderRadius: 24,
    borderWidth: 2,
    height: 50,
    justifyContent: "center",
    width: 50
  },
  avatarSmall: {
    height: 34,
    marginRight: -8,
    width: 34
  },
  avatarText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900"
  },
  avatarTextSmall: {
    fontSize: 11
  },
  statLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.5,
    textTransform: "uppercase"
  },
  statValue: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900",
    marginTop: 4
  },
  dangerText: {
    color: colors.rose
  },
  cardEyebrow: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.3,
    textTransform: "uppercase"
  },
  pillButton: {
    backgroundColor: "rgba(255,255,255,0.09)",
    borderColor: colors.glassBorder,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 18,
    paddingVertical: 10
  },
  pillButtonActive: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.primarySoft
  },
  pillText: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "900"
  },
  pillTextActive: {
    color: colors.dark
  },
  squareButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 14,
    height: 44,
    justifyContent: "center",
    width: 44
  },
  headerIconButton: {
    alignItems: "center",
    backgroundColor: "rgba(4,31,45,0.72)",
    borderColor: "rgba(139,206,255,0.34)",
    borderRadius: 23,
    borderWidth: 1,
    height: 46,
    justifyContent: "center",
    shadowColor: colors.primarySoft,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 18,
    elevation: 8,
    width: 46
  },
  smallAction: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 999,
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 14,
    paddingVertical: 9
  },
  smallActionText: {
    color: colors.text,
    fontSize: 12,
    fontWeight: "900"
  },
  secondaryButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  secondaryButtonText: {
    color: colors.primarySoft,
    fontSize: 12,
    fontWeight: "900"
  },
  splitButton: {
    alignItems: "center",
    backgroundColor: colors.emerald,
    borderRadius: 14,
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  splitButtonText: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: "900"
  },
  editButton: {
    alignItems: "center",
    flexDirection: "row",
    gap: 4
  },
  editText: {
    color: colors.primarySoft,
    fontSize: 13,
    fontWeight: "900"
  }
};
