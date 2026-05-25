import { colors } from "./theme";

export const authStyles = {
  authContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 28
  },
  authPanel: {
    backgroundColor: colors.glass,
    borderColor: colors.glassBorder,
    borderRadius: 32,
    borderWidth: 1,
    padding: 28
  },
  logoMark: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "rgba(139, 206, 255, 0.14)",
    borderRadius: 44,
    height: 88,
    justifyContent: "center",
    marginBottom: 24,
    width: 88
  },
  authTitle: {
    color: colors.text,
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 0,
    textAlign: "center"
  },
  authCopy: {
    color: colors.muted,
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 26,
    marginTop: 10,
    textAlign: "center"
  },
  authInputWrap: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.88)",
    borderColor: "rgba(255,255,255,0.24)",
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    minHeight: 62,
    marginTop: 14,
    paddingHorizontal: 18
  },
  authInput: {
    backgroundColor: "transparent",
    color: colors.dark,
    flex: 1,
    fontSize: 16,
    fontWeight: "700",
    minHeight: 58,
    padding: 0
  },
  forgotButton: {
    alignSelf: "flex-end",
    marginTop: 12
  },
  forgotText: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: "800"
  },
  authDivider: {
    alignItems: "center",
    flexDirection: "row",
    gap: 14,
    marginTop: 30
  },
  authDividerLine: {
    backgroundColor: "rgba(248,250,252,0.18)",
    flex: 1,
    height: 1
  },
  authDividerText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 1
  },
  socialRow: {
    flexDirection: "row",
    gap: 22,
    justifyContent: "center",
    marginTop: 22
  },
  socialButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.06)",
    borderRadius: 28,
    height: 56,
    justifyContent: "center",
    width: 56
  },
  googleButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    minHeight: 54,
    marginBottom: 14
  },
  googleButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "800"
  },
  primaryButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 28,
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
    minHeight: 60,
    marginTop: 22,
    boxShadow: `0 0 18px ${colors.primary}`
  },
  primaryButtonText: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "900"
  },
  authLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "center",
    marginTop: 28
  },
  linkText: {
    color: colors.primarySoft,
    fontSize: 14,
    fontWeight: "800"
  }
};
