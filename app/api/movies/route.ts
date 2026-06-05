import { NextResponse } from "next/server";
import { getMovies } from "@/lib/movies";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category") || undefined;
  const type = searchParams.get("type") as "trending" | "popular" | null;

  return NextResponse.json({ movies: getMovies({ category, type: type || undefined }) }, { status: 200 });
}
