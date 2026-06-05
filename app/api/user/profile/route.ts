import { NextResponse } from "next/server";
import { findUserById } from "@/lib/users";

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.replace("Bearer ", "");
  const userId = token.replace("mock-token-", "");
  const user = findUserById(userId);

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const safeUser = { id: user.id, name: user.name, email: user.email };
  return NextResponse.json({ user: safeUser }, { status: 200 });
}
