import { colors } from "./theme";

export const profileStyles = {
  profileHeader: {
    alignItems: "center",
    marginBottom: 28,
    padding: 20
  },
  profileName: {
    color: colors.text,
    fontSize: 30,
    fontWeight: "900",
    marginTop: 16
  },
  profileEmail: {
    color: colors.muted,
    fontSize: 17,
    fontWeight: "700",
    marginTop: 6
  },
  menuListCard: {
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 18,
    overflow: "hidden"
  },
  menuRow: {
    alignItems: "center",
    borderBottomColor: "rgba(255,255,255,0.12)",
    borderBottomWidth: 1,
    flexDirection: "row",
    gap: 16,
    minHeight: 72,
    paddingHorizontal: 18
  },
  menuRowText: {
    color: colors.text,
    flex: 1,
    fontSize: 17,
    fontWeight: "800"
  },
  logoutButton: {
    alignItems: "center",
    borderColor: "rgba(244,63,94,0.32)",
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: "center",
    marginTop: 22,
    minHeight: 64
  },
  logoutText: {
    color: colors.rose,
    fontSize: 18,
    fontWeight: "900"
  }
};
