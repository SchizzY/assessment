import { NextResponse } from 'next/server';
import { issueStore } from '../store';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const issues = await issueStore.getIssues();
  const issue = issues.find(i => i.id === params.id);

  if (!issue) {
    return NextResponse.json({ error: 'Issue not found' }, { status: 404 });
  }

  await issueStore.deleteIssue(params.id);
  return NextResponse.json({});
}