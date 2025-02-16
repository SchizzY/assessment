import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Issue } from "../types";
import { useMediaQuery } from "../hooks/use-media-query";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

export const IssueDetailsDialog = ({
    issue,
    onClose
}: {
    issue: Issue | null;
    onClose: () => void;
}) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    if (isDesktop) {
        return <Dialog open={issue !== null} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{issue?.title}</DialogTitle>
                </DialogHeader>
                <DialogDescription>{issue?.description}</DialogDescription>
            </DialogContent>
        </Dialog>
    }

    return (
        <Drawer open={issue !== null} onOpenChange={onClose}>
            <DrawerContent className="pb-6 text-center">
                <DrawerHeader>
                    <DrawerTitle>{issue?.title}</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription>
                    {issue?.description}
                </DrawerDescription>
            </DrawerContent>
        </Drawer>
    )
};