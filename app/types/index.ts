export type Issue = {
  id: string;
  title: string;
  description: string;
  feature: string;
  createdAt: Date;
};

export type CreateIssueInput = Omit<Issue, 'id' | 'createdAt'>;