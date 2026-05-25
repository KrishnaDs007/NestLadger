# NestLedger

NestLedger is a React Native learning app built with Expo. It combines family groups, shared todos/groceries, budget tracking, expense summaries, simple charts, profile details, and basic auth screens.

## Run it

```bash
nvm use
npm install
npm run start
```

Then press:

- `a` for Android emulator
- `i` for iOS simulator on macOS
- `w` for web
- or scan the QR code in the Expo Go app

This project includes `.nvmrc` because Expo SDK 56 needs a supported Node line. Use Node `20.19.4` or newer from a supported major version before starting Expo.

This app now targets Expo SDK 56. If Expo Go on your phone shows an incompatibility message, update Expo Go from the App Store or use a development/TestFlight build.

## Run Through TestFlight

TestFlight is not like Expo Go. You do not run the dev server inside TestFlight. Instead, you create an iOS store build, upload it to App Store Connect, and then install that build from the TestFlight app.

```bash
nvm use
npm install
npm run eas:login
npm run testflight
```

What the script does:

- `npm run testflight:build` creates an iOS build for App Store/TestFlight distribution.
- `npm run testflight:submit` uploads the latest iOS build to App Store Connect.
- `npm run testflight` does both in one command with `--auto-submit`.

Before the first TestFlight upload, you need an Apple Developer account, an Expo account, and an App Store Connect app that uses this bundle identifier:

```text
com.krishnadevashish.nestledger
```

If you want a different bundle id, change `expo.ios.bundleIdentifier` in `app.json` before building.

## What is included

- Login, signup, and forgot password screens.
- Home dashboard with family groups, target, expense, avatars, and quick todo add.
- Group management screen with create group, edit button placeholder, invite button, add/remove members, and split bills action.
- Expense dashboard with budget card, category chart, trend chart, filters, and recent spends.
- Profile screen with name, email, avatar, and toggleable group links.
- Bottom navigation with a centered floating main menu.
- Group-level grocery/todo lists.

## What you are learning

- `useState` stores app state like auth status, selected tab, groups, todos, and expenses.
- `useMemo` derives the selected group without recalculating it manually everywhere.
- `TextInput` collects login and quick-add text.
- `Pressable` handles taps for navigation, actions, todos, and menus.
- `ScrollView` lays out longer mobile screens.
- `Modal` creates the floating main action menu.
- `StyleSheet.create` keeps React Native styles organized.
- State updates are immutable: groups, expenses, members, and todos are updated with `map`, `filter`, and spread syntax.

## Learning path

1. Open `App.js` and inspect `initialGroups`.
2. Tap through login, home, groups, spend, and profile screens.
3. Add a quick todo from a group card and inspect `addTodo`.
4. Tap a todo checkbox and inspect `toggleTodo`.
5. Tap the center floating button and inspect the `Modal` menu.
6. Add a spend and inspect how `addExpense` updates only the selected group.
7. Create a group, then add/remove members from the Groups tab.
8. Later, replace mock data with a real backend such as Firebase or Supabase.
