import { colors } from "./theme";

export const settingsStyles = {
  settingsModalBackdrop: {
    backgroundColor: "rgba(3, 14, 22, 0.72)",
    flex: 1,
    justifyContent: "center",
    padding: 22
  },
  settingsModalCard: {
    backgroundColor: "rgba(18, 49, 68, 0.98)",
    borderColor: "rgba(139,206,255,0.28)",
    borderRadius: 26,
    borderWidth: 1,
    maxHeight: "86%",
    padding: 18,
    boxShadow: "0 0 24px rgba(0,0,0,0.35)"
  },
  settingsModalTitle: {
    color: colors.text,
    fontSize: 22,
    fontWeight: "900"
  },
  settingsCloseButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderColor: colors.glassBorder,
    borderRadius: 18,
    borderWidth: 1,
    height: 36,
    justifyContent: "center",
    width: 36
  },
  settingsModalScroll: {
    marginTop: 16
  },
  settingsModalList: {
    gap: 10,
    paddingBottom: 8
  },
  friendRow: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    minHeight: 70,
    paddingHorizontal: 14
  },
  friendCopy: {
    flex: 1
  },
  friendName: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900"
  },
  friendMeta: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 18,
    marginTop: 3
  },
  friendRemoveButton: {
    alignItems: "center",
    backgroundColor: "rgba(244,63,94,0.12)",
    borderColor: "rgba(244,63,94,0.28)",
    borderRadius: 14,
    borderWidth: 1,
    flexDirection: "row",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  friendRemoveText: {
    color: colors.rose,
    fontSize: 12,
    fontWeight: "900"
  },
  primarySettingsButton: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 18,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginTop: 16,
    minHeight: 52
  },
  primarySettingsButtonText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900"
  },
  settingsInputWrap: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 16,
    paddingHorizontal: 12
  },
  settingsTextInput: {
    color: colors.text,
    flex: 1,
    fontSize: 15,
    minHeight: 48
  },
  settingsHelpText: {
    color: colors.muted,
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 22,
    marginTop: 14
  },
  settingsChipWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 14
  },
  settingsChip: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 999,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 9
  },
  settingsChipActive: {
    backgroundColor: colors.primarySoft,
    borderColor: colors.primarySoft
  },
  settingsChipText: {
    color: colors.muted,
    fontSize: 13,
    fontWeight: "900"
  },
  settingsChipTextActive: {
    color: colors.dark
  },
  dangerNotice: {
    alignItems: "flex-start",
    backgroundColor: "rgba(244,63,94,0.12)",
    borderColor: "rgba(244,63,94,0.28)",
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 10,
    marginTop: 18,
    padding: 14
  },
  dangerNoticeText: {
    color: colors.text,
    flex: 1,
    fontSize: 15,
    fontWeight: "800",
    lineHeight: 22
  },
  settingsButtonRow: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16
  },
  secondarySettingsButton: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 16,
    borderWidth: 1,
    flex: 1,
    justifyContent: "center",
    minHeight: 50
  },
  secondarySettingsButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900"
  },
  dangerSettingsButton: {
    alignItems: "center",
    backgroundColor: colors.rose,
    borderRadius: 16,
    flex: 1,
    justifyContent: "center",
    minHeight: 50
  },
  dangerSettingsButtonText: {
    color: colors.text,
    fontSize: 15,
    fontWeight: "900"
  },
  settingsFieldRow: {
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 12,
    marginTop: 12,
    minHeight: 70,
    paddingHorizontal: 14
  },
  settingsFieldCopy: {
    flex: 1
  },
  settingsFieldLabel: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900",
    letterSpacing: 0.8,
    textTransform: "uppercase"
  },
  settingsFieldValue: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "800",
    marginTop: 4
  },
  settingsDisabledText: {
    color: colors.faint
  },
  settingsLockText: {
    color: colors.muted,
    fontSize: 12,
    fontWeight: "900"
  },
  settingsEditButton: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5
  },
  settingsEditText: {
    color: colors.primarySoft,
    fontSize: 12,
    fontWeight: "900"
  },
  deleteAccountButton: {
    alignItems: "center",
    borderColor: "rgba(244,63,94,0.34)",
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    marginTop: 18,
    minHeight: 54
  },
  deleteAccountText: {
    color: colors.rose,
    fontSize: 16,
    fontWeight: "900"
  },
  settingsSectionLabel: {
    color: colors.text,
    fontSize: 16,
    fontWeight: "900",
    marginTop: 18
  },
  paymentSettingCard: {
    backgroundColor: "rgba(255,255,255,0.08)",
    borderColor: colors.glassBorder,
    borderRadius: 18,
    borderWidth: 1,
    marginTop: 14,
    padding: 14
  },
  comingSoonPanel: {
    alignItems: "center",
    paddingVertical: 28
  },
  superText: {
    color: colors.primarySoft,
    fontSize: 34,
    fontWeight: "900"
  }
};
