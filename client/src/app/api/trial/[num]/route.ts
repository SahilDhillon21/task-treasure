import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { num: string } }) {
  const { num } = params;

  return NextResponse.json({ message: `You passed the number: ${num}` });
}
