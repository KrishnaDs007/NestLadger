export const tabs = [
  { id: "home", label: "Home", icon: "home-outline" },
  { id: "todos", label: "Todos", icon: "checkbox-outline" },
  { id: "groups", label: "Groups", icon: "people-outline" },
  { id: "expenses", label: "Spend", icon: "pie-chart-outline" },
  { id: "profile", label: "Profile", icon: "person-outline" }
];

export const filters = ["7 days", "Yesterday", "Today", "This month", "Last month", "Year", "Custom"];
export const homeTrendFilters = ["Last 7 days", "Last 30 days"];

export const currentUser = {
  name: "Krishna Devashish",
  email: "krishna@example.com",
  avatar: "KD"
};

export const initialGroups = [
  {
    id: "family",
    name: "Home Family",
    budget: 65000,
    target: 12000,
    adminId: "krishna",
    members: [
      { id: "krishna", name: "Krishna", avatar: "KD" },
      { id: "wife", name: "Wife", avatar: "WF" },
      { id: "mom", name: "Mom", avatar: "MA" },
      { id: "dad", name: "Dad", avatar: "DA" },
      { id: "guest", name: "Guest", avatar: "GS" }
    ],
    todos: [
      { id: "t1", title: "Buy milk and bread", completed: false, updatedAt: "2026-05-24T09:00:00.000Z" },
      { id: "t2", title: "Order vegetables", completed: true, updatedAt: "2026-05-23T13:00:00.000Z" }
    ],
    expenses: [
      { id: "e1", title: "Groceries", category: "Food", amount: 8600, day: "Mon", date: "2026-05-18", settled: false },
      { id: "e2", title: "Electricity bill", category: "Bills", amount: 3200, day: "Tue", date: "2026-05-19", settled: true },
      { id: "e3", title: "Fuel", category: "Travel", amount: 2400, day: "Wed", date: "2026-05-20", settled: false },
      { id: "e4", title: "Dinner", category: "Food", amount: 1800, day: "Thu", date: "2026-05-21", settled: true },
      { id: "e5", title: "Medicines", category: "Health", amount: 1200, day: "Fri", date: "2026-05-22", settled: false },
      { id: "e6", title: "School supplies", category: "Education", amount: 2100, day: "Sat", date: "2026-05-23", settled: true }
    ]
  },
  {
    id: "trip",
    name: "Goa Trip",
    budget: 40000,
    target: 5000,
    adminId: "krishna",
    members: [
      { id: "krishna", name: "Krishna", avatar: "KD" },
      { id: "wife", name: "Wife", avatar: "WF" },
      { id: "friend", name: "Amit", avatar: "AM" }
    ],
    todos: [{ id: "t3", title: "Book cab to airport", completed: false, updatedAt: "2026-05-24T07:30:00.000Z" }],
    expenses: [
      { id: "e7", title: "Hotel advance", category: "Travel", amount: 12000, day: "Mon", date: "2026-05-12", settled: false },
      { id: "e8", title: "Snacks", category: "Food", amount: 950, day: "Tue", date: "2026-05-13", settled: false }
    ]
  }
];
