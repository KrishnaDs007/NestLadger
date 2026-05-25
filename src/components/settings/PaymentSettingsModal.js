import { Pressable, Text, View } from "react-native";
import { IndianRupee } from "lucide-react-native";
import { SettingsFieldRow } from "./SettingsFieldRow";
import { SettingsModal } from "./SettingsModal";
import { styles } from "../../styles/styles";

const paymentMethods = ["UPI", "Cash", "Credit Card", "Debit Card", "Net Banking"];

export function PaymentSettingsModal({ visible, defaultPaymentMethod, setDefaultPaymentMethod, onClose }) {
  return (
    <SettingsModal title="Payment Settings" visible={visible} onClose={onClose}>
      <SettingsFieldRow icon={IndianRupee} label="Default Currency" value="Rupee (Rs)" />
      <Text style={styles.settingsSectionLabel}>Preferred payment method</Text>
      <View style={styles.settingsChipWrap}>
        {paymentMethods.map((method) => (
          <Pressable key={method} onPress={() => setDefaultPaymentMethod(method)} style={[styles.settingsChip, defaultPaymentMethod === method && styles.settingsChipActive]}>
            <Text style={[styles.settingsChipText, defaultPaymentMethod === method && styles.settingsChipTextActive]}>{method}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.paymentSettingCard}>
        <Text style={styles.friendName}>Expense defaults</Text>
        <Text style={styles.friendMeta}>Use {defaultPaymentMethod} when adding expenses. Split bills equally by default, keep settlement reminders on, and show unpaid balances first.</Text>
      </View>
      <View style={styles.paymentSettingCard}>
        <Text style={styles.friendName}>Settlement preferences</Text>
        <Text style={styles.friendMeta}>Round split amounts to the nearest rupee and mark shared spends as pending until all members settle.</Text>
      </View>
    </SettingsModal>
  );
}
