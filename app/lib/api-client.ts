import type { Issue, CreateIssueInput } from '../types';
import { ApiErrorResponse } from '../types/api';

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const error: ApiErrorResponse = await response.json();
    throw new ApiError(response.status, error.error);
  }
  return response.json();
}

export async function getIssues(): Promise<Issue[]> {
  const response = await fetch('/api/issues');
  return handleResponse<Issue[]>(response);
}

export async function createIssue(data: CreateIssueInput): Promise<Issue> {
  const response = await fetch('/api/issues', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return handleResponse<Issue>(response);
}

export async function deleteIssue(id: string): Promise<void> {
  const response = await fetch(`/api/issues/${id}`, {
    method: 'DELETE',
  });
  await handleResponse<void>(response);
}
