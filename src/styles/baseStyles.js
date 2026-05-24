import { StatusBar } from "react-native";
import { colors } from "./theme";

export const baseStyles = {
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
    paddingTop: StatusBar.currentHeight || 0
  },
  appShell: {
    flex: 1,
    backgroundColor: colors.background
  },
  screenContent: {
    paddingBottom: 118,
    paddingHorizontal: 22,
    paddingTop: 24
  },
  pageHeader: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24
  },
  rowBetween: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  headerActions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10
  },
  headerSpacer: {
    height: 46,
    width: 46
  },
  kicker: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1.2,
    textTransform: "uppercase"
  },
  title: {
    color: colors.text,
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: 4,
    textShadowColor: "rgba(0,0,0,0.45)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 0,
    marginBottom: 12,
    textShadowColor: "rgba(0,0,0,0.35)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2
  },
  mutedText: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "700"
  },
  glassCard: {
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 24,
    borderWidth: 1
  }
};
