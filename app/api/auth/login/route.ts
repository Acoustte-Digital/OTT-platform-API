import { NextResponse } from "next/server";
import { findUserByEmail } from "@/lib/users";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const { email, password } = body ?? {};

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 },
    );
  }

  const user = findUserByEmail(email);

  if (!user || user.password !== password) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const safeUser = { id: user.id, name: user.name, email: user.email };

  return NextResponse.json(
    {
      message: "Login successful",
      token: `mock-token-${user.id}`,
      user: safeUser,
    },
    { status: 200 },
  );
}
