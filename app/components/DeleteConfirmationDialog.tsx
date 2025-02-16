import { DialogHeader, DialogFooter, Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { Issue } from "../types";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "../hooks/use-media-query";
import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";

export const DeleteConfirmDialog = ({
    issue,
    onClose,
    onConfirm
}: {
    issue: Issue | null;
    onClose: () => void;
    onConfirm: (id: string) => void;
}) => {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    if (isDesktop) {
        return <Dialog open={issue !== null} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Delete Issue</DialogTitle>
                </DialogHeader>
                <DialogDescription>
                    Are you sure you want to delete this issue? This action cannot be undone.
                </DialogDescription>
                <DialogFooter className="gap-y-2">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        aria-label="Cancel deletion"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={() => {
                            if (issue) {
                                onConfirm(issue.id);
                                onClose();
                            }
                        }}
                        aria-label="Confirm deletion"
                    >
                        Delete
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    }

    return (
        <Drawer open={issue !== null} onOpenChange={onClose}>
            <DrawerContent className="pb-6 text-center px-4">
                <DrawerHeader>
                    <DrawerTitle>Delete Issue</DrawerTitle>
                </DrawerHeader>
                <DrawerDescription>
                    Are you sure you want to delete this issue? This action cannot be undone.
                </DrawerDescription>
                <DrawerFooter className="gap-y-2">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        aria-label="Cancel deletion"
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="destructive"
                        onClick={() => {
                            if (issue) {
                                onConfirm(issue.id);
                                onClose();
                            }
                        }}
                        aria-label="Confirm deletion"
                    >
                        Delete
                    </Button>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
};