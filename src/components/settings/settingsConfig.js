import { Bell, Lock, UserRound, WalletCards } from "lucide-react-native";

export const profileRows = [
  { id: "account", icon: UserRound, label: "Account Settings" },
  { id: "payments", icon: WalletCards, label: "Payment Settings" },
  { id: "notifications", icon: Bell, label: "Notification Preferences" },
  { id: "privacy", icon: Lock, label: "Privacy & Security" }
];
