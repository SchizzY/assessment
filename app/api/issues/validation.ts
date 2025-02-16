import { z } from 'zod';

export const issueSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100),
  description: z.string().min(1, 'Description is required').max(1000),
  feature: z.string().min(1, 'Feature is required'),
});

export type CreateIssueSchema = z.infer<typeof issueSchema>;
