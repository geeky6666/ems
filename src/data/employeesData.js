const employeesData = [
  {
    id: 1,
    firstName: "Aman",
    email: "aman@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update website",
        taskDescription: "Revamp the homepage design",
        taskDate: "2026-07-12",
        category: "Design",
        status: "new",
      },
      {
        taskTitle: "Client meeting",
        taskDescription: "Discuss project requirements",
        taskDate: "2026-08-10",
        category: "Meeting",
        status: "completed",
      },
      {
        taskTitle: "Fix bugs",
        taskDescription: "Resolve bugs reported in issue tracker",
        taskDate: "2026-08-14",
        category: "Development",
        status: "active",
      },
    ],
  },
  {
    id: 2,
    firstName: "Naman",
    email: "naman@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Database optimization",
        taskDescription: "Optimize queries for better performance",
        taskDate: "2026-08-11",
        category: "Database",
        status: "active",
      },
      {
        taskTitle: "Design new feature",
        taskDescription: "Create mockups for the new feature",
        taskDate: "2026-08-09",
        category: "Design",
        status: "completed",
      },
    ],
  },
  {
    id: 3,
    firstName: "Abhay",
    email: "abhay@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Prepare presentation",
        taskDescription: "Prepare slides for upcoming client presentation",
        taskDate: "2026-08-13",
        category: "Presentation",
        status: "new",
      },
      {
        taskTitle: "Code review",
        taskDescription: "Review the codebase for optimization",
        taskDate: "2026-08-12",
        category: "Development",
        status: "active",
      },
      {
        taskTitle: "Testing",
        taskDescription: "Test the latest build for bugs",
        taskDate: "2026-08-08",
        category: "QA",
        status: "completed",
      },
    ],
  },
  {
    id: 4,
    firstName: "Siddharth",
    email: "siddharth@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Write documentation",
        taskDescription: "Update the project documentation",
        taskDate: "2026-08-13",
        category: "Documentation",
        status: "new",
      },
      {
        taskTitle: "Set up CI/CD",
        taskDescription: "Implement continuous integration pipeline",
        taskDate: "2026-08-11",
        category: "DevOps",
        status: "active",
      },
    ],
  },
  {
    id: 5,
    firstName: "Shivam",
    email: "shivam@gmail.com",
    password: "123",
    tasks: [
      {
        taskTitle: "UI redesign",
        taskDescription: "Redesign the user interface for better UX",
        taskDate: "2026-08-14",
        category: "Design",
        status: "new",
      },
      {
        taskTitle: "Deploy new build",
        taskDescription: "Deploy the latest build to production",
        taskDate: "2026-08-09",
        category: "DevOps",
        status: "completed",
      },
      {
        taskTitle: "Client feedback",
        taskDescription: "Gather feedback from clients after product launch",
        taskDate: "2026-08-12",
        category: "Support",
        status: "active",
      },
    ],
  },
];

// The one and only admin login.
export const adminCredentials = {
  email: "surya@gmail.com",
  password: "123",
};

export default employeesData;
