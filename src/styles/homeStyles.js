import { colors } from "./theme";

export const homeStyles = {
  homeHeroCard: {
    backgroundColor: colors.glass,
    borderColor: "rgba(139,206,255,0.26)",
    borderRadius: 28,
    borderWidth: 1,
    marginBottom: 18,
    overflow: "hidden",
    padding: 22,
    shadowColor: "#000000",
    shadowOpacity: 0.18,
    shadowRadius: 24
  },
  homeSummaryCard: {
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 26,
    borderWidth: 1,
    marginBottom: 18,
    padding: 22
  },
  summaryAmount: {
    color: colors.text,
    fontSize: 42,
    fontWeight: "900",
    letterSpacing: 0,
    marginTop: 6
  },
  homeHeroChart: {
    marginHorizontal: -6,
    marginTop: 8
  },
  homeHeroMeta: {
    color: colors.muted,
    fontSize: 14,
    fontWeight: "800",
    marginTop: 14
  },
  unsettledBadge: {
    backgroundColor: "rgba(16,185,129,0.16)",
    borderColor: "rgba(16,185,129,0.38)",
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  settledBadge: {
    backgroundColor: "rgba(139,206,255,0.14)",
    borderColor: "rgba(139,206,255,0.36)"
  },
  unsettledBadgeText: {
    color: colors.emerald,
    fontSize: 12,
    fontWeight: "900"
  },
  unsettledList: {
    gap: 10,
    marginTop: 4
  },
  unsettledRow: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.09)",
    borderColor: "rgba(255,255,255,0.13)",
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    minHeight: 64,
    paddingHorizontal: 14
  },
  rankBubble: {
    alignItems: "center",
    backgroundColor: "rgba(13,162,231,0.18)",
    borderRadius: 15,
    height: 30,
    justifyContent: "center",
    width: 30
  },
  rankText: {
    color: colors.primarySoft,
    fontSize: 12,
    fontWeight: "900"
  },
  unsettledCopy: {
    flex: 1
  },
  unsettledName: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900"
  },
  unsettledMeta: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 3
  },
  unsettledAmount: {
    color: colors.emerald,
    fontSize: 15,
    fontWeight: "900"
  },
  heroActions: {
    flexDirection: "row",
    gap: 12,
    marginTop: 18
  },
  heroPrimaryButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 999,
    flex: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    minHeight: 50
  },
  heroPrimaryText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900"
  },
  heroSecondaryButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.12)",
    borderColor: colors.glassBorder,
    borderRadius: 999,
    borderWidth: 1,
    flex: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    minHeight: 50
  },
  heroSecondaryText: {
    color: "#d8efff",
    fontSize: 15,
    fontWeight: "900"
  },
  trendFeatureCard: {
    backgroundColor: colors.glass,
    borderColor: "rgba(139,206,255,0.24)",
    borderRadius: 26,
    borderWidth: 1,
    marginBottom: 18,
    padding: 18
  },
  homeTrendFilters: {
    flexDirection: "row",
    gap: 10,
    marginTop: 14
  },
  homeTrendFilter: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 9
  },
  homeTrendFilterActive: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.primarySoft
  },
  homeTrendFilterText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900"
  },
  homeTrendFilterTextActive: {
    color: colors.dark
  },
  areaChart: {
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 20,
    marginTop: 16,
    overflow: "hidden",
    position: "relative"
  },
  areaFill: {
    backgroundColor: "rgba(13,162,231,0.24)",
    bottom: 0,
    height: "56%",
    left: 0,
    position: "absolute",
    right: 0
  },
  linePoint: {
    backgroundColor: colors.primary,
    borderColor: colors.background,
    borderRadius: 5,
    borderWidth: 2,
    height: 10,
    marginLeft: -5,
    position: "absolute",
    width: 10
  }
};
