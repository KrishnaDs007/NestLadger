import { colors } from "./theme";

export const navigationStyles = {
  bottomNav: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderColor: colors.glassBorder,
    borderRadius: 999,
    borderWidth: 1,
    bottom: 22,
    flexDirection: "row",
    height: 72,
    justifyContent: "space-around",
    left: 22,
    paddingHorizontal: 10,
    position: "absolute",
    right: 22
  },
  navItem: {
    alignItems: "center",
    flex: 1,
    gap: 4
  },
  navLabel: {
    color: "transparent",
    fontSize: 1,
    height: 1
  },
  navLabelActive: {
    color: "transparent"
  },
  fab: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.background,
    borderRadius: 34,
    borderWidth: 5,
    height: 68,
    justifyContent: "center",
    marginBottom: 36,
    shadowColor: colors.primary,
    shadowOpacity: 0.5,
    shadowRadius: 20,
    width: 68
  },
  menuBackdrop: {
    backgroundColor: "rgba(15,23,42,0.42)",
    flex: 1,
    justifyContent: "flex-end",
    padding: 22
  },
  quickMenu: {
    backgroundColor: colors.glassStrong,
    borderColor: colors.glassBorder,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 92,
    padding: 10
  },
  quickMenuItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    minHeight: 54,
    paddingHorizontal: 12
  },
  quickMenuText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900"
  }
};
