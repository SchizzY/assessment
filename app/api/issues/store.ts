import { Issue } from '@/app/types';

declare global {
  var issueStoreInstance: IssueStore | undefined;
}

class IssueStore {
  private issues: Issue[] = [
    {
      id: crypto.randomUUID(),
      title: 'Ticket #1',
      description: 'This is a great description for your first ticket',
      feature: 'Feature A',
      createdAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Ticket #2',
      description: 'This is a great description for your second ticket',
      feature: 'Feature B',
      createdAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      title: 'Ticket #3',
      description: 'This is a great description for your third ticket',
      feature: 'Feature C',
      createdAt: new Date(),
    },
  ];

  private constructor() {}

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  static getInstance(): IssueStore {
    if (!global.issueStoreInstance) {
      global.issueStoreInstance = new IssueStore();
    }
    return global.issueStoreInstance;
  }

  async getIssues(): Promise<Issue[]> {
    await this.delay(2000);
    return [...this.issues];
  }

  async addIssue(issue: Issue): Promise<void> {
    await this.delay(2000);
    this.issues.push(issue);
  }

  async deleteIssue(id: string): Promise<void> {
    await this.delay(2000);
    const index = this.issues.findIndex(issue => issue.id === id);
    if (index === -1) {
      throw new Error(`Issue with id ${id} not found`);
    }
    this.issues.splice(index, 1);
  }
}

export const issueStore = IssueStore.getInstance();