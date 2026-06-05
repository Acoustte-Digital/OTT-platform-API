import { NextResponse } from "next/server";
import { findMovieById } from "@/lib/movies";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const movie = findMovieById(id);

  if (!movie) {
    return NextResponse.json({ error: "Movie not found" }, { status: 404 });
  }

  return NextResponse.json({ movie }, { status: 200 });
}
