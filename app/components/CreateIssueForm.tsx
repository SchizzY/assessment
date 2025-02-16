'use client';

// React and hooks
import { useState } from 'react';

// Third-party components
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Custom hooks
import { useIssues } from '../hooks/useIssues';

// Types
import type { CreateIssueInput } from '../types';

export function CreateIssueForm() {
  const { createIssue, isCreating, isCreateError } = useIssues();
  const [formData, setFormData] = useState<CreateIssueInput>({
    title: '',
    description: '',
    feature: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    createIssue(formData, {
      onSuccess: () => {
        setFormData({ title: '', description: '', feature: '' });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Issue title"
        value={formData.title}
        onChange={(e) =>
          setFormData({ ...formData, title: e.target.value })
        }
        required
      />
      <Textarea
        placeholder="Issue description"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
        className="min-h-[100px]"
        required
      />
      <Select
        value={formData.feature}
        onValueChange={(value) =>
          setFormData({ ...formData, feature: value })
        }
        required
      >
        <SelectTrigger>
          <SelectValue placeholder="Feature" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Feature A">Feature A</SelectItem>
          <SelectItem value="Feature B">Feature B</SelectItem>
          <SelectItem value="Feature C">Feature C</SelectItem>
        </SelectContent>
      </Select>
      <Button
        type="submit"
        className="w-full bg-[#2D3142] hover:bg-[#1F2232]"
        disabled={isCreating}>
        Submit issue
      </Button>
      {isCreateError && <p className="text-red-500">There was an error</p>}
    </form>
  );
}