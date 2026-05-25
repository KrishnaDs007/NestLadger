import { StyleSheet } from "react-native";
import { authStyles } from "./authStyles";
import { baseStyles } from "./baseStyles";
import { cardStyles } from "./cardStyles";
import { componentStyles } from "./componentStyles";
import { expenseStyles } from "./expenseStyles";
import { groupStyles } from "./groupStyles";
import { homeStyles } from "./homeStyles";
import { navigationStyles } from "./navigationStyles";
import { profileStyles } from "./profileStyles";
import { settingsStyles } from "./settingsStyles";
import { todoStyles } from "./todoStyles";
import { colors } from "./theme";

export { colors };

export const styles = StyleSheet.create({
  ...baseStyles,
  ...authStyles,
  ...componentStyles,
  ...cardStyles,
  ...groupStyles,
  ...todoStyles,
  ...expenseStyles,
  ...navigationStyles,
  ...homeStyles,
  ...profileStyles,
  ...settingsStyles
});
