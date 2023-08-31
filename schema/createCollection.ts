import { CollectionColors } from "@/lib/constants";
import { z } from "zod";

export const createCollectionSchema = z.object({
  name: z.string().min(4, {
    message: "Collection name must be at least 4 characters long",
  }),
  color: z
    .string()
    .refine((color) => Object.keys(CollectionColors).includes(color)),
});

//getting type of the createCollectionSchema below

export type createCollectionSchemaType = z.infer<typeof createCollectionSchema>;
