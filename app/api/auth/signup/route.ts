import { NextResponse } from "next/server";
import { addUser, findUserByEmail } from "@/lib/users";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { name, email, password } = body ?? {};

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 },
    );
  }

  if (findUserByEmail(email)) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  const user = addUser({ name: name || "User", email, password });
  const safeUser = { id: user.id, name: user.name, email: user.email };

  return NextResponse.json({ message: "Signup successful", user: safeUser }, { status: 200 });
}
