import { Pressable, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { ArrowRight, Fingerprint, Globe, Home, LockKeyhole, Mail, User } from "lucide-react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { styles } from "../styles/styles";

function AuthInput({ icon: Icon, placeholder, secureTextEntry, keyboardType }) {
  return (
    <View style={styles.authInputWrap}>
      <Icon size={22} color="rgba(15,20,24,0.46)" strokeWidth={2.2} />
      <TextInput
        style={styles.authInput}
        placeholder={placeholder}
        placeholderTextColor="rgba(15,20,24,0.38)"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
      />
    </View>
  );
}

export function AuthScreen({ mode, setMode, onLogin }) {
  const isSignup = mode === "signup";
  const isForgot = mode === "forgot";

  return (
    <SafeAreaView style={styles.safeArea}>
      <ExpoStatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.authContent} keyboardShouldPersistTaps="handled">
        <View style={styles.authPanel}>
          <View style={styles.logoMark}>
            <Home size={38} color="#8bceff" strokeWidth={2.6} />
          </View>
          <Text style={styles.authTitle}>NestLedger</Text>
          <Text style={styles.authCopy}>
            {isSignup ? "Create an account to manage your household." : isForgot ? "Reset access to your shared home ledger." : "Home tasks, shared costs, settled calmly."}
          </Text>

          {isSignup ? <AuthInput icon={User} placeholder="Full name" /> : null}
          <AuthInput icon={Mail} placeholder="Email address" keyboardType="email-address" />
          {!isForgot ? <AuthInput icon={LockKeyhole} placeholder="Password" secureTextEntry /> : null}

          {!isSignup && !isForgot ? (
            <Pressable onPress={() => setMode("forgot")} style={styles.forgotButton}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </Pressable>
          ) : null}

          <Pressable onPress={onLogin} style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>{isForgot ? "Send Reset Link" : isSignup ? "Create Account" : "Login"}</Text>
            <ArrowRight size={22} color="#F8FAFC" strokeWidth={2.6} />
          </Pressable>

          <View style={styles.authDivider}>
            <View style={styles.authDividerLine} />
            <Text style={styles.authDividerText}>OR CONTINUE WITH</Text>
            <View style={styles.authDividerLine} />
          </View>

          <View style={styles.socialRow}>
            <Pressable style={styles.socialButton}>
              <Fingerprint size={22} color="#8bceff" strokeWidth={2.4} />
            </Pressable>
            <Pressable style={styles.socialButton}>
              <Globe size={22} color="#8bceff" strokeWidth={2.4} />
            </Pressable>
          </View>

          <View style={styles.authLinks}>
            <Pressable onPress={() => setMode(mode === "signup" ? "signin" : "signup")}>
              <Text style={styles.linkText}>{mode === "signup" ? "Already have an account? Login" : "Don't have an account? Signup"}</Text>
            </Pressable>
            {isForgot ? (
              <Pressable onPress={() => setMode("signin")}>
                <Text style={styles.linkText}>Back to login</Text>
              </Pressable>
            ) : null}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
