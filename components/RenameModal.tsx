"use client";

import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";

function RenameModal() {
  const user = useUser();

  const [input, setInput] = useState("");

  const [fileId, filename, isRenameModalOpen, setIsRenameModalOpen] =
    useAppStore((state) => [
      state.fileId,
      state.filename,
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
    ]);

  const userId = user?.user?.id;

  const renameFile = async () => {
    if (!userId || !fileId) return;

    const toastId = toast.loading("Renaming...");

    await updateDoc(doc(db, "users", userId, "files", fileId), {
      filename: input,
    });

    toast.success("Renamed Success", {
      id: toastId,
    });

    setInput("");
    setIsRenameModalOpen(false);
  };

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='pb-2'>Rename the file</DialogTitle>
          <Input
            id='link'
            defaultValue={filename !== null ? filename : ""}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />
          <div className='flex justify-end space-x-2 py-3'>
            <Button
              size='sm'
              className='px-3'
              variant={"ghost"}
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className='sr-only'>Cancel</span>
              <span>Cancel</span>
            </Button>
            <Button
              type='submit'
              size='sm'
              className='px-3 '
              variant={"secondary"}
              onClick={() => renameFile()}
            >
              <span className='sr-only'>Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;
