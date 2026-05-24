import { colors } from "./theme";

export const groupStyles = {
  groupCard: {
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
    padding: 18
  },
  selectedCard: {
    borderColor: colors.primary
  },
  groupTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: "900"
  },
  avatarStack: {
    flexDirection: "row",
    marginTop: 18,
    paddingLeft: 8
  },
  moreMembers: {
    alignSelf: "center",
    color: colors.text,
    fontSize: 12,
    fontWeight: "900",
    marginLeft: 12
  },
  groupStats: {
    flexDirection: "row",
    gap: 36,
    marginTop: 18
  },
  memberList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 14
  },
  memberChip: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 999,
    borderWidth: 1,
    flexDirection: "row",
    gap: 7,
    paddingHorizontal: 8,
    paddingVertical: 6
  },
  memberName: {
    color: colors.text,
    fontSize: 13,
    fontWeight: "800"
  },
  groupActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 16
  }
};
