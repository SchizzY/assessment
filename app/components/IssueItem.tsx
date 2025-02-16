import { ChevronRight, Trash2 } from "lucide-react";
import { memo } from "react";
import { Issue } from "../types";
import { Button } from "@/components/ui/button";

export const IssueItem = memo(({ 
    issue, 
    onSelect, 
    onDelete 
}: { 
    issue: Issue; 
    onSelect: (issue: Issue) => void; 
    onDelete: (issue: Issue) => void;
}) => (
    <div className="flex gap-x-2">
        <Button
            className="justify-between w-full"
            variant="outline"
            onClick={() => onSelect(issue)}
            aria-label={`View details for ${issue.title}`}
        >
            {issue.title}
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </Button>
        <Button
            variant="outline"
            onClick={() => onDelete(issue)}
            aria-label={`Delete ${issue.title}`}
        >
            <Trash2 className="w-4 h-4 stroke-red-500" aria-hidden="true" />
        </Button>
    </div>
));

IssueItem.displayName = 'IssueItem';