import { colors } from "./theme";

export const navigationStyles = {
  bottomNav: {
    alignItems: "center",
    backgroundColor: "rgba(4,31,45,0.72)",
    borderColor: "rgba(139,206,255,0.28)",
    borderRadius: 999,
    borderWidth: 1,
    bottom: 22,
    flexDirection: "row",
    height: 72,
    justifyContent: "space-around",
    left: 22,
    overflow: "visible",
    paddingHorizontal: 10,
    position: "absolute",
    right: 22,
    boxShadow: "0 0 24px rgba(0,0,0,0.28)"
  },
  navHighlighter: {
    backgroundColor: colors.primarySoft,
    borderRadius: 999,
    height: 48,
    left: 0,
    opacity: 0.95,
    pointerEvents: "none",
    position: "absolute",
    top: 12,
    width: 48
  },
  navItem: {
    alignItems: "center",
    flex: 1,
    gap: 4,
    height: 54,
    justifyContent: "center",
    paddingTop: 6,
    zIndex: 2
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
    boxShadow: `0 0 20px ${colors.primary}`,
    width: 68
  },
  menuBackdrop: {
    backgroundColor: "rgba(15,23,42,0.42)",
    flex: 1,
    justifyContent: "flex-end",
    padding: 22
  },
  quickMenu: {
    backgroundColor: "rgba(15,23,42,0.42)",
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
