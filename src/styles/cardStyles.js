import { colors } from "./theme";

export const cardStyles = {
  budgetCard: {
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 18,
    padding: 22
  },
  budgetTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "900",
    marginTop: 4
  },
  budgetPercent: {
    color: colors.emerald,
    fontSize: 26,
    fontWeight: "900"
  },
  progressTrack: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 999,
    height: 12,
    marginVertical: 18,
    overflow: "hidden"
  },
  progressFill: {
    backgroundColor: colors.primarySoft,
    borderRadius: 999,
    height: "100%"
  },
  budgetGrid: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  chartCard: {
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 18,
    padding: 18
  },
  pieWrap: {
    alignItems: "center",
    flexDirection: "row",
    gap: 18,
    marginTop: 16
  },
  pieCircle: {
    alignItems: "center",
    backgroundColor: "rgba(139,206,255,0.16)",
    borderRadius: 70,
    height: 140,
    justifyContent: "center",
    overflow: "hidden",
    width: 140
  },
  pieSlice: {
    position: "absolute",
    width: "100%"
  },
  pieCenter: {
    alignItems: "center",
    backgroundColor: colors.background,
    borderRadius: 36,
    height: 72,
    justifyContent: "center",
    width: 72
  },
  pieCenterText: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900"
  },
  pieCenterLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "800"
  },
  legend: {
    flex: 1,
    gap: 9
  },
  legendRow: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8
  },
  legendDot: {
    borderRadius: 5,
    height: 10,
    width: 10
  },
  legendLabel: {
    color: colors.muted,
    flex: 1,
    fontSize: 13,
    fontWeight: "800"
  },
  legendValue: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "900"
  },
  filterRow: {
    gap: 10,
    paddingVertical: 12
  },
  barChart: {
    alignItems: "flex-end",
    flexDirection: "row",
    height: 170,
    justifyContent: "space-between"
  },
  barColumn: {
    alignItems: "center",
    flex: 1
  },
  bar: {
    backgroundColor: colors.primary,
    borderRadius: 999,
    width: 22
  },
  barLabel: {
    color: colors.muted,
    fontSize: 11,
    fontWeight: "800",
    marginTop: 8
  }
};
