import { db } from "@/db/index";
import { User } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createUser(id: string, email: string, name: string) {
  try {
    const result = await db.insert(User).values({
      id,
      email,
      name,
    });
    return result;
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("Failed to create user");
  }
}

export async function getUserById(id: string) {
  try {
    const result = await db.query.User.findFirst({
      where: eq(User.id, id),
    });
    return result;
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    throw new Error("Failed to fetch user");
  }
}

export async function getUserByEmail(email: string) {
  try {
    const result = await db.query.User.findFirst({
      where: eq(User.email, email),
    });
    return result;
  } catch (error) {
    console.error("Error fetching user by email:", error);
    throw new Error("Failed to fetch user");
  }
}

export async function getAllUsers() {
  try {
    const result = await db.query.User.findMany();
    return result;
  } catch (error) {
    console.error("Error fetching all users:", error);
    throw new Error("Failed to fetch users");
  }
}

export async function deleteUserById(id: string) {
  try {
    const result = await db.delete(User).where(eq(User.id, id));
    return result;
  } catch (error) {
    console.error("Error deleting user by ID:", error);
    throw new Error("Failed to delete user");
  }
}
