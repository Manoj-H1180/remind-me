"use client";

import { Collection } from "@prisma/client";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./ui/collapsible";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CollectionColor, CollectionColors } from "@/lib/constants";
import { CaretDownIcon, CaretUpIcon, TrashIcon } from "@radix-ui/react-icons";
import { Progress } from "./ui/progress";
import { Separator } from "./ui/separator";
import PlusIcon from "./icons/PlusIcon";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { deleteCollection } from "@/actions/collection";
import { toast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface Props {
  collection: Collection;
}

function CollectionCard({ collection }: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();

  const removeCollection = async () => {
    try {
      await deleteCollection(collection.id);
      toast({
        title: "Success",
        description: "Collection Deleted Successfully",
      });
      router.refresh();
    } catch (error) {
      toast({
        title: "Failure",
        description: "Cannot Delete Collection",
      });
    }
  };

  const task: String[] = ["task 1"];
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger asChild>
        <Button
          variant={"ghost"}
          className={cn(
            " flex w-full  justify-between p-6",
            isOpen && "rounded-b-none",
            CollectionColors[collection.color as CollectionColor]
          )}
        >
          {collection.name}
          {!isOpen && <CaretDownIcon className="w-6 h-6" />}
          {isOpen && <CaretUpIcon className="w-6 h-6" />}
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="flex rounded-b-md flex-col dark:bg-neutral-900 shadow-lg">
        {task.length === 0 && <div>No Tasks</div>}
        {task.length > 0 && (
          <>
            <Progress className="rounded-none" value={50} />
            <div className="p-4 gap-3 flex flex-col ">
              {task.map((task) => (
                <div>Mocked Task</div>
              ))}
            </div>
          </>
        )}
        <Separator />
        <footer className="h-[40px] px-4 p-[2px] text-xs text-neutral-500 flex justify-between items-center">
          <p>Created at {collection.createdAt.toLocaleDateString("en-US")}</p>
          <div>
            <Button variant={"ghost"} size={"icon"}>
              <PlusIcon />
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <TrashIcon />
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogTitle>Are You absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your collection and all tasks inside it.
                </AlertDialogDescription>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={() => removeCollection()}>
                    Proceed
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </footer>
      </CollapsibleContent>
    </Collapsible>
  );
}

export default CollectionCard;
