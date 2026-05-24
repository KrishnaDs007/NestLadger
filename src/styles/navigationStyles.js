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
    shadowColor: "#000000",
    shadowOpacity: 0.28,
    shadowRadius: 24
  },
  navHighlighter: {
    backgroundColor: colors.primarySoft,
    borderRadius: 999,
    height: 48,
    left: 10,
    opacity: 0.95,
    position: "absolute",
    top: 11,
    width: 48
  },
  navItem: {
    alignItems: "center",
    flex: 1,
    gap: 4,
    height: 54,
    justifyContent: "center",
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
