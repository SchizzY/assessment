import { Issue } from "../types";
import { Skeleton } from "@/components/ui/skeleton";
import { useIssues } from "../hooks/useIssues";
import { useState } from "react";
import { IssueItem } from "./IssueItem";
import { IssueDetailsDialog } from "./IssueDetailsDialog";
import { DeleteConfirmDialog } from "./DeleteConfirmationDialog";

const SKELETON_COUNT = 3;
const skeletons = Array.from({ length: SKELETON_COUNT }, (_, index) => index);



export default function ListIssues() {
    const [selectedIssue, setSelectedIssue] = useState<Issue | null>(null);
    const [deleteConfirmIssue, setDeleteConfirmIssue] = useState<Issue | null>(null);
    const { deleteIssue, getIssues, isIssueLoading } = useIssues();

    if (isIssueLoading) {
        return (
            <div 
                className="space-y-2" 
                role="status" 
                aria-label="Loading issues"
            >
                {skeletons.map((index) => (
                    <div className="flex gap-x-2" key={`skeleton-${index}`}>
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-10" />
                    </div>
                ))}
            </div>
        );
    }

    if (getIssues?.length === 0) {
        return (
            <div 
                className="text-center text-muted-foreground py-8" 
                role="status"
            >
                No issues found
            </div>
        );
    }

    return (
        <>
            <IssueDetailsDialog 
                issue={selectedIssue} 
                onClose={() => setSelectedIssue(null)} 
            />
            <DeleteConfirmDialog 
                issue={deleteConfirmIssue}
                onClose={() => setDeleteConfirmIssue(null)}
                onConfirm={deleteIssue}
            />

            <div className="space-y-2">
                {getIssues?.map((issue) => (
                    <IssueItem
                        key={issue.id}
                        issue={issue}
                        onSelect={setSelectedIssue}
                        onDelete={setDeleteConfirmIssue}
                    />
                ))}
            </div>
        </>
    );
}