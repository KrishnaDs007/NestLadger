import { colors } from "./theme";

export const homeStyles = {
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
  unsettledBadge: {
    backgroundColor: "rgba(16,185,129,0.16)",
    borderColor: "rgba(16,185,129,0.38)",
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  unsettledBadgeText: {
    color: colors.emerald,
    fontSize: 12,
    fontWeight: "900"
  },
  unsettledList: {
    gap: 10,
    marginTop: 18
  },
  unsettledRow: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 999,
    flexDirection: "row",
    gap: 10,
    minHeight: 46,
    paddingHorizontal: 12
  },
  rankText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900",
    width: 28
  },
  unsettledName: {
    color: colors.text,
    flex: 1,
    fontSize: 15,
    fontWeight: "900"
  },
  unsettledAmount: {
    color: colors.emerald,
    fontSize: 15,
    fontWeight: "900"
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
    height: 170,
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
