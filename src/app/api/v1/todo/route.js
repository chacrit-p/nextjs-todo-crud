import { connectToMongoDB } from "../../../lib/mongoDb";
import { NextResponse } from "next/server";
import Todo from "../../../models/todo";

export async function GET() {
  await connectToMongoDB();
  const todos = await Todo.find();
  return NextResponse.json(todos, { status: 200 });
}

export async function POST(req) {
  const { title, dueDate } = await req.json();
  await connectToMongoDB();
  await Todo.create({ title: title, dueDate: dueDate });
  return NextResponse.json({ message: "Todo Created" }, { status: 200 });
}
