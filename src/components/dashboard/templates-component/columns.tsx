"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Prisma } from "@/generated/prisma";
import { ColumnDef } from "@tanstack/react-table";
import { formatDistance } from "date-fns";
import { ArrowUpDown, Calendar, Copy, MoreHorizontal, Trash2, View } from "lucide-react";

export type TemplateType = Prisma.TemplateGetPayload<{
  select: {
    id: true;
    name: true;
    createdAt: true;
    updatedAt: true;
  };
}>;

export const columns: ColumnDef<TemplateType>[] = [
  {
    accessorKey: "name",
    header: "Template Name",
  },
  {
    header: "Schedule",
    cell: () => {
      return (
        <div className="ml-2.5">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant={"ghost"}>
                <Calendar className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              Schedule
            </TooltipContent>
          </Tooltip>
        </div>
      )
    }
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const DBdate = row.getValue("createdAt") as Date;
      const formatedDate = formatDistance(DBdate, new Date(), {
        addSuffix: true,
      });

      return (
        <span className="text-muted-foreground/80 text-right">
          {formatedDate}
        </span>
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Updated
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const DBdate = row.getValue("updatedAt") as Date;
      const formatedDate = formatDistance(DBdate, new Date(), {
        addSuffix: true,
      });

      return (
        <span className="text-muted-foreground/80 text-right">
          {formatedDate}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right pr-1">Actions</div>,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <div className="flex justify-end pr-1">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.id)}
              >
                <Copy />
                Copy Template ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <View />
                View Template
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash2 />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
