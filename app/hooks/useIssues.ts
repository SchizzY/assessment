import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createIssue, deleteIssue, getIssues } from "../lib/api-client";
import type { CreateIssueInput, Issue } from "../types";

export function useIssues() {
  const queryClient = useQueryClient();

  const createIssueMutation = useMutation({
    mutationFn: (newIssue: CreateIssueInput) => {
      return createIssue(newIssue)
    },
    onMutate: async (newIssue) => {
      await queryClient.cancelQueries({ queryKey: ["issues"] });
      const previousIssues = queryClient.getQueryData<Issue[]>(["issues"]);
      queryClient.setQueryData<Issue[]>(["issues"], (old = []) => [
        ...old,
        { 
          id: 'loading',
          status: 'loading',
          ...newIssue,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ]);

      return { previousIssues };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["issues"], context?.previousIssues);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["issues"] });
    },
  });

  const getIssuesQuery = useQuery({
    queryKey: ["issues"],
    queryFn: () => getIssues(),
  });

  const deleteIssueMutation = useMutation({
    mutationFn: (issueId: string) => deleteIssue(issueId),
    onMutate: async (deletedIssueId) => {
      await queryClient.cancelQueries({ queryKey: ["issues"] });
      
      const previousIssues = queryClient.getQueryData<Issue[]>(["issues"]);
      
      queryClient.setQueryData<Issue[]>(["issues"], (old = []) => 
        old.filter(issue => issue.id !== deletedIssueId)
      );

      return { previousIssues };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(["issues"], context?.previousIssues);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["issues"] });
    },
  });

  return {
    error: createIssueMutation.error,
    createIssue: createIssueMutation.mutate,
    isCreating: createIssueMutation.isPending,
    isCreateError: createIssueMutation.isError,
    getIssues: getIssuesQuery.data,
    isIssueLoading: getIssuesQuery.isLoading,
    isIssueError: getIssuesQuery.isError,
    deleteIssue: deleteIssueMutation.mutate,
    isDeleting: deleteIssueMutation.isPending,
    isDeleteError: deleteIssueMutation.isError,
  };
}
