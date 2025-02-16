import { NextResponse } from 'next/server';
import { issueSchema } from './validation';
import { issueStore } from './store';

export async function GET() {
  const issues = await issueStore.getIssues();
  return NextResponse.json(issues);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validation = issueSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error.errors },
        { status: 400 }
      );
    }

    const newIssue = {
      id: crypto.randomUUID(),
      ...body,
      createdAt: new Date(),
    };

    await issueStore.addIssue(newIssue);

    return NextResponse.json(newIssue, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}