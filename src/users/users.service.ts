import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: "Cristiano Ronaldo",
      email: "cr7@example.com",
      role: "ENGINEER",
    },
    {
      id: 2,
      name: "Lionel Messi",
      email: "lm10@example.com",
      role: "ENGINEER",
    },
    {
      id: 3,
      name: "Neymar Jr",
      email: "neymarjr@example.com",
      role: "INTERN",
    },
    {
      id: 4,
      name: "Kilian Mbappe",
      email: "kilianmbappe@example.com",
      role: "INTERN",
    },
  ];

  findAll(role?: "ENGINEER" | "INTERN") {
    if (!role) {
      return this.users;
    }

    return this.users.filter((user) => user.role === role);
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: { name: string; email: string; role: "ENGINEER" | "INTERN" }) {
    const newUser = { id: this.users.length + 1, ...user };

    this.users.push(newUser);

    return newUser;
  }

  update(
    id: number,
    user: { name?: string; email?: string; role?: "ENGINEER" | "INTERN" },
  ) {
    const existingUser = this.findOne(id);

    if (!existingUser) return;

    const updatedUsers = this.users.map((dbUser) =>
      dbUser.id === id ? { ...dbUser, ...user } : dbUser,
    );

    this.users = updatedUsers;

    return { id, ...user };
  }

  delete(id: number) {
    const existingUser = this.findOne(id);

    if (!existingUser) return;

    this.users = this.users.filter((user) => user.id !== id);

    return existingUser;
  }
}
