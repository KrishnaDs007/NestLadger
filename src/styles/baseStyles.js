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
    marginBottom: 24,
    minHeight: 58
  },
  headerTitleBlock: {
    flex: 1
  },
  centeredHeaderTitleBlock: {
    alignItems: "center",
    flex: 1
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
    color: colors.primarySoft,
    fontSize: 11,
    fontWeight: "900",
    letterSpacing: 1.6,
    textTransform: "uppercase"
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "800",
    letterSpacing: 0,
    lineHeight: 36,
    marginTop: 3
  },
  titleAccent: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    height: 3,
    marginTop: 7,
    opacity: 0.85,
    width: 34
  },
  titleAccentCentered: {
    alignSelf: "center"
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: 0,
    marginBottom: 12,
    textShadow: "0 2px 2px rgba(0,0,0,0.35)"
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
