import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  // Handle email sending logic here
  return NextResponse.json({ status: 'success' });
}
