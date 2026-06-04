import { User } from "@/types";

export const users: User[] = [
  {
    id: "1",
    name: "Demo User",
    email: "demo@example.com",
    password: "password123",
  },
];

interface NewUserInput {
  name: string;
  email: string;
  password: string;
}

export function addUser({ name, email, password }: NewUserInput): User {
  const user: User = {
    id: String(users.length + 1),
    name,
    email,
    password,
  };

  users.push(user);
  return user;
}

export function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email.toLowerCase() === email.toLowerCase());
}

export function findUserById(id: string): User | undefined {
  return users.find((user) => user.id === id);
}
