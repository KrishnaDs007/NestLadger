import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";
import { Avatar } from "../components/Avatar";
import { BackButton } from "../components/BackButton";
import { AccountSettingsModal } from "../components/settings/AccountSettingsModal";
import { ComingSoonModal } from "../components/settings/ComingSoonModal";
import { ConfirmModal } from "../components/settings/ConfirmModal";
import { FriendsModal } from "../components/settings/FriendsModal";
import { InviteFriendModal } from "../components/settings/InviteFriendModal";
import { PaymentSettingsModal } from "../components/settings/PaymentSettingsModal";
import { profileRows } from "../components/settings/settingsConfig";
import { currentUser } from "../data/mockData";
import { colors, styles } from "../styles/styles";

export function ProfileScreen({ groups, defaultPaymentMethod, setDefaultPaymentMethod, goBack, removeMember, inviteMember, logout }) {
  const [activeModal, setActiveModal] = useState(null);
  const [removeTarget, setRemoveTarget] = useState(null);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteGroupId, setInviteGroupId] = useState(groups[0]?.id);
  const [account] = useState({
    name: currentUser.name,
    email: currentUser.email,
    avatar: currentUser.avatar,
    phone: "+91 98765 43210",
    address: "Bengaluru, Karnataka"
  });

  const friends = useMemo(
    () =>
      groups.flatMap((group) =>
        group.members.map((member) => ({
          ...member,
          groupId: group.id,
          groupName: group.name
        }))
      ),
    [groups]
  );
  const visibleFriends = useMemo(() => friends.filter((friend) => friend.id !== "krishna"), [friends]);

  function openInvite() {
    setActiveModal("invite");
    setInviteGroupId(groups[0]?.id);
  }

  function submitInvite() {
    const email = inviteEmail.trim();

    if (!email || !inviteGroupId) {
      return;
    }

    inviteMember(inviteGroupId, email);
    setInviteEmail("");
    setActiveModal("friends");
  }

  function confirmRemove() {
    if (removeTarget) {
      removeMember(removeTarget.groupId, removeTarget.id);
    }

    setRemoveTarget(null);
    setActiveModal("friends");
  }

  return (
    <ScrollView contentContainerStyle={styles.screenContent}>
      <View style={styles.pageHeader}>
        <BackButton onPress={goBack} />
        <View style={styles.centeredHeaderTitleBlock}>
          <Text style={styles.kicker}>Preferences</Text>
          <Text style={styles.title}>Settings</Text>
          <View style={[styles.titleAccent, styles.titleAccentCentered]} />
        </View>
        <View style={styles.headerSpacer} />
      </View>

      <View style={styles.profileHeader}>
        <Avatar label={account.avatar} large />
        <Text style={styles.profileName}>{account.name}</Text>
        <Text style={styles.profileEmail}>{account.email}</Text>
      </View>

      <Pressable onPress={() => setActiveModal("friends")} style={styles.chartCard}>
        <View style={styles.rowBetween}>
          <View>
            <Text style={styles.sectionTitle}>Manage Friends</Text>
            <Text style={styles.mutedText}>{visibleFriends.length} friends across {groups.length} groups</Text>
          </View>
          <ChevronRight size={22} color={colors.muted} strokeWidth={2.3} />
        </View>
      </Pressable>

      <View style={styles.menuListCard}>
        {profileRows.map(({ id, icon: Icon, label }) => (
          <Pressable key={id} onPress={() => setActiveModal(id)} style={styles.menuRow}>
            <Icon size={24} color={colors.primarySoft} strokeWidth={2.2} />
            <Text numberOfLines={1} style={styles.menuRowText}>{label}</Text>
            <ChevronRight size={20} color="rgba(248,250,252,0.55)" strokeWidth={2.3} />
          </Pressable>
        ))}
      </View>

      <Pressable onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </Pressable>

      <FriendsModal
        visible={activeModal === "friends"}
        friends={visibleFriends}
        onClose={() => setActiveModal(null)}
        onInvite={openInvite}
        onRemove={(friend) => {
          setRemoveTarget(friend);
          setActiveModal("removeFriend");
        }}
      />
      <InviteFriendModal
        visible={activeModal === "invite"}
        groups={groups}
        email={inviteEmail}
        groupId={inviteGroupId}
        onEmailChange={setInviteEmail}
        onGroupChange={setInviteGroupId}
        onSubmit={submitInvite}
        onClose={() => setActiveModal(null)}
      />
      <ConfirmModal
        visible={activeModal === "removeFriend"}
        title="Remove Friend?"
        message={`Remove ${removeTarget?.name || "this friend"} from ${removeTarget?.groupName || "this group"}? They will lose access to this group.`}
        confirmLabel="Remove"
        onCancel={() => setActiveModal("friends")}
        onConfirm={confirmRemove}
      />
      <AccountSettingsModal visible={activeModal === "account"} account={account} onDeleteAccount={() => setActiveModal("deleteAccount")} onClose={() => setActiveModal(null)} />
      <PaymentSettingsModal visible={activeModal === "payments"} defaultPaymentMethod={defaultPaymentMethod} setDefaultPaymentMethod={setDefaultPaymentMethod} onClose={() => setActiveModal(null)} />
      <ComingSoonModal visible={activeModal === "notifications" || activeModal === "privacy"} onClose={() => setActiveModal(null)} />
      <ConfirmModal
        visible={activeModal === "deleteAccount"}
        title="Delete Account?"
        message="Deleting your account will remove your profile, groups, todos, expenses, settlements, and payment preferences. This cannot be undone."
        confirmLabel="Delete Account"
        onCancel={() => setActiveModal("account")}
        onConfirm={() => setActiveModal("account")}
      />
    </ScrollView>
  );
}
