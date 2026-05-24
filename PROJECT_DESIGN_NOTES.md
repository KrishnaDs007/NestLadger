# NestLedger - Design Notes

This document captures the current state of the app and the recommended path to properly design and build it from prototype to production. It intentionally starts from the family todo + expense calculator direction and does not cover the first simple todo-only version.

## Current App Summary

NestLedger is a React Native + Expo prototype for managing family groups, shared todos/groceries, monthly budgets, expenses, unsettled spends, and user profile information.

It currently runs on Expo SDK 54 so it can open in the public Expo Go app. SDK 55 was tested earlier, but it caused an Expo Go compatibility issue on mobile because the installed Expo Go app did not yet support that SDK runtime.

## Current Features

- Email/password style auth screens.
- Google login button placeholder.
- Signup screen.
- Forgot password screen.
- Home dashboard.
- Current month total expense summary.
- Top 3 unsettled group expenses sorted descending.
- Home expense trend card with `Last 7 days` and `Last 30 days` filters.
- Group cards with group name, member avatars, target, expense, and quick todo add.
- Dedicated Todos tab.
- Todos listed across all groups, latest updated first.
- Group-level todos/groceries.
- Expense dashboard with budget card, category chart, trend chart, filters, and recent spends.
- Groups screen with create group, edit placeholder, invite placeholder, add/remove members, and split bills button.
- Profile screen with name, email, avatar, and toggleable linked groups.
- Bottom navigation with a centered floating action menu.
- Local mock data instead of backend persistence.

## Current File Structure

```text
App.js
src/
  components/
    Avatar.js
    BottomNav.js
    BudgetCard.js
    GroupCard.js
    HomeExpenseSummary.js
    HomeExpenseTrend.js
    PieChart.js
    PillButton.js
    Stat.js
    TodoList.js
    TrendChart.js
  data/
    mockData.js
  screens/
    AuthScreen.js
    ExpensesScreen.js
    GroupsScreen.js
    HomeScreen.js
    ProfileScreen.js
    TodosScreen.js
  styles/
    styles.js
  utils/
    expenseUtils.js
```

## Current Architecture

`App.js` owns the top-level state and simple tab routing. It stores auth status, active tab, groups, selected group, and quick menu visibility.

The app currently uses local state only:

- `groups`
- `members`
- `todos`
- `expenses`
- selected group
- active screen

Reusable UI lives in `src/components`. Full screen layouts live in `src/screens`. Shared calculations live in `src/utils/expenseUtils.js`. Mock records live in `src/data/mockData.js`. Shared styles live in `src/styles/styles.js`.

## Current Data Model

The mock group model looks conceptually like this:

```js
{
  id,
  name,
  budget,
  target,
  adminId,
  members: [
    { id, name, avatar }
  ],
  todos: [
    { id, title, completed, updatedAt }
  ],
  expenses: [
    { id, title, category, amount, day, date, settled }
  ]
}
```

This is good enough for a prototype, but production should normalize this data instead of nesting everything deeply inside a group object.

## Product Direction

The app should become a family finance and shared household coordination app. The core user story is:

A user creates or joins a family group, tracks shared monthly expenses, sees how much budget is consumed, manages groceries/todos with family members, and later splits unsettled bills.

The main product areas should be:

- Authentication
- Family groups
- Members and roles
- Shared todos/groceries
- Expense tracking
- Budget tracking
- Settlement and bill splitting
- Analytics and trends
- Profile and account settings

## Recommended Screen Design

### Auth

Screens:

- Sign in
- Sign up
- Forgot password
- Google login

Future behavior:

- Validate fields.
- Show loading state.
- Show auth errors.
- Add password visibility toggle.
- Add real Google auth.
- Persist login session.

### Home

Home should be a quick summary screen, not a place for every detail.

Recommended order:

1. Current month total expense card.
2. Top unsettled groups, sorted descending.
3. Spending trend area/line chart with date filters.
4. Family group cards.
5. Quick actions.

The current home implementation already follows this direction.

### Todos

Todos should be separate from Home.

Recommended behavior:

- Show pending todos first.
- Sort by latest updated.
- Filter by group.
- Filter by pending/completed.
- Add due dates later.
- Assign todo to member later.
- Support grocery-specific metadata later, such as quantity and store.

### Groups

Groups should manage group setup and membership.

Recommended behavior:

- Create group.
- Edit group name, monthly budget, and target.
- Invite member by email or link.
- Add/remove member.
- Admin/member role control.
- Leave group.
- Delete group by admin.
- Split bills entry point.

### Expenses

Expenses should manage spending for the selected group.

Recommended behavior:

- Add expense.
- Edit expense.
- Delete expense.
- Select category.
- Select payer.
- Select split members.
- Mark as settled.
- Attach receipt later.
- Filter by date range.
- Filter by category.
- Filter by settled/unsettled.

### Profile

Profile should show the user identity and linked groups.

Recommended behavior:

- Name.
- Email.
- Avatar/profile photo.
- Toggleable group list.
- Account settings.
- Logout.

## Proper Design System Plan

The app has now been updated toward the supplied glassmorphic design direction. The visual system uses a deep ocean blue canvas, translucent glass panels, cyan primary actions, emerald success states, rose warning/error states, large rounded cards, pill chips, and a floating bottom navigation bar.

The current styles are centralized in `src/styles/styles.js`. This works for a prototype, but the next step should be a proper design system.

Recommended design files:

```text
src/styles/
  theme.js
  baseStyles.js
  authStyles.js
  componentStyles.js
  cardStyles.js
  groupStyles.js
  todoStyles.js
  expenseStyles.js
  navigationStyles.js
  homeStyles.js
  profileStyles.js
  styles.js
```

This split has been implemented. `styles.js` is now a small aggregator that exports the same `styles` object used by components, while each style concern lives in a smaller module.

Recommended tokens:

- Primary color
- Success color
- Warning color
- Danger color
- Background color
- Surface color
- Text colors
- Border colors
- Spacing scale
- Font sizes
- Font weights
- Radius scale

Current visual reference direction:

- Deep background: `#082F49`
- Glass card surface: `rgba(255, 255, 255, 0.1)`
- Glass border: `rgba(255, 255, 255, 0.2)`
- Text: `#F8FAFC`
- Muted text: 60% opacity off-white
- Primary cyan: `#0da2e7`
- Primary soft cyan: `#8bceff`
- Success emerald: `#10B981`
- Alert rose: `#F43F5E`

Implemented design updates:

- Dark glassmorphic app background.
- Glass-style cards across home, groups, expenses, todos, and profile.
- Cyan floating action button.
- Pill-shaped floating bottom navigation.
- Cyan active navigation state.
- Rounded todo cards with pending/completed states.
- Profile settings rows inspired by the provided profile screens.
- Auth screen restyled toward the supplied login/signup references.

Budget color logic should stay clear:

- Green up to 70%.
- Yellow/orange between 71% and 90%.
- Light red above 90%.
- Strong danger state when expenses exceed budget.

## Navigation Plan

Current navigation is manual tab state. This is fine for learning, but production should use React Navigation or Expo Router.

Recommended route structure:

```text
Auth
  SignIn
  SignUp
  ForgotPassword

AppTabs
  Home
  Todos
  Groups
  Expenses
  Profile

GroupStack
  GroupDetails
  EditGroup
  InviteMembers
  SplitBills

ExpenseStack
  AddExpense
  EditExpense
  ExpenseDetails
```

## Backend Plan

The app currently uses mock data. A real version needs persistence, auth, and authorization.

Good backend options:

- Firebase Auth + Firestore
- Supabase Auth + Postgres
- Appwrite
- Custom API

Recommended for learning:

Use Firebase first because it is beginner-friendly for React Native and supports Google login, email/password auth, Firestore, and realtime updates.

## Suggested Production Data Model

Avoid deeply nesting all data under group documents once the app grows.

Recommended collections/tables:

```text
users
groups
groupMembers
todos
expenses
expenseSplits
settlements
invites
categories
```

Example:

```text
groups
  id
  name
  monthlyBudget
  target
  createdBy
  createdAt
  updatedAt

groupMembers
  groupId
  userId
  role
  joinedAt

todos
  id
  groupId
  title
  completed
  assignedTo
  createdBy
  updatedAt

expenses
  id
  groupId
  title
  category
  amount
  paidBy
  date
  settled
  createdAt
  updatedAt

expenseSplits
  expenseId
  userId
  amount
  settled
```

## Bill Splitting Plan

The current app only has a split bills button. The next version should define the logic.

Split types:

- Equal split.
- Exact amount split.
- Percentage split.
- Shares split.

Settlement logic:

- Calculate how much each member paid.
- Calculate how much each member owes.
- Show simplified balances.
- Allow marking balances as settled.

Example:

```text
Krishna paid Rs 2,000
Wife share Rs 1,000
Krishna share Rs 1,000
Wife owes Krishna Rs 1,000
```

## Charting Plan

Current charts are hand-built visual prototypes. Production should use a chart library.

Recommended libraries:

- `react-native-svg`
- `victory-native`
- `react-native-gifted-charts`

Needed charts:

- Pie/donut chart for categories.
- Area/line chart for spending trend.
- Bar chart for group/category comparisons.

Filters:

- Today
- Yesterday
- Last 7 days
- Last 30 days
- This month
- Last month
- This year
- Custom range

## State Management Plan

Current state is local `useState`. That is fine for the prototype.

Next steps:

- Use context for auth and selected group.
- Use custom hooks for groups, todos, and expenses.
- Add server state library when backend is added.

Possible future structure:

```text
src/hooks/
  useAuth.js
  useGroups.js
  useTodos.js
  useExpenses.js

src/context/
  AuthContext.js
  GroupContext.js
```

## Validation Plan

Forms need validation before backend integration.

Required validation:

- Email format.
- Password required.
- Group name required.
- Budget must be a positive number.
- Expense amount must be positive.
- Expense date required.
- Todo title required.
- At least one member required for split.

## Accessibility Plan

Add:

- Clear button labels.
- `accessibilityLabel` for icon-only buttons.
- Sufficient color contrast.
- Larger touch targets.
- Screen reader-friendly chart summaries.

Charts should also have text summaries because visual charts alone are not accessible.

## Testing Plan

Recommended tests:

- Utility tests for money formatting and expense calculations.
- Component tests for budget card states.
- Flow tests for add todo, add expense, and group creation.
- Navigation tests once real navigation is added.

Recommended tooling:

- Jest
- React Native Testing Library
- Expo testing utilities

## Expo Go Compatibility Decision

The app is currently kept on Expo SDK 54 because SDK 55 caused this mobile error:

```text
Project is incompatible with this version of Expo Go
The project you requested requires a newer version of Expo Go.
```

The practical fix was to target SDK 54 until the public Expo Go app on the device supports SDK 55.

Current key versions:

```text
expo 54.x
react-native 0.81.x
react 19.1.x
```

## TestFlight Plan

Scripts exist for EAS/TestFlight flow:

```bash
npm run eas:login
npm run testflight
npm run testflight:build
npm run testflight:submit
```

Important note:

TestFlight does not run the local dev server. It requires a real iOS build uploaded to App Store Connect.

Before TestFlight:

- Apple Developer account.
- Expo account.
- App Store Connect app.
- Valid bundle identifier.
- EAS configured.

## Immediate Next Steps

Recommended order:

1. Replace manual tab state with Expo Router or React Navigation.
2. Split `styles.js` into theme tokens and per-component styles.
3. Add real form screens for add expense and edit group.
4. Add Firebase or Supabase authentication.
5. Persist groups, todos, expenses, and members.
6. Add real invite flow.
7. Add real split bill calculation.
8. Replace mock charts with a chart library.
9. Add loading, empty, and error states.
10. Add tests for expense utilities and main user flows.

## Learning Notes

The important React Native concepts in this version are:

- Component composition.
- Screen separation.
- Reusable UI components.
- Local state with `useState`.
- Derived state with utility functions.
- List rendering with `map`.
- Immutable updates with `map`, `filter`, and spread syntax.
- Mock data before backend integration.
- Progressive enhancement from prototype to production.

This app is now a good foundation for learning how a real React Native product is organized.
