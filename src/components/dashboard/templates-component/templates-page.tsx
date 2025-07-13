import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Copy, Heart, MoreVertical, PenBoxIcon, PenLine, Plus, Trash2, Upload } from "lucide-react";
import Image from "next/image";

export default function TemplatesPage() {
  return (
    <>
      <div className="w-full py-4 flex justify-between">
        <h1 className="text-2xl">Saved Templates</h1>
        <Button className="hover:scale-110 cursor-pointer hover:transition">
          <Plus />
          Create New
        </Button>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <TemplateCard key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

const TemplateCard = () => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg gap-0 py-0">
      <CardContent className="p-0 m-0 relative">
        <Image
          src={"/hero-img-dark.png"}
          alt="demo"
          width={250}
          height={250}
          className="size-full z-[1]"
        />
        <div className="absolute flex z-10 items-center justify-between px-1 py-2 top-0 w-full bg-gradient-to-b dark:from-40% from-black to-transparent dark:from-black dark:to-transparent border-0">
          <h1 className="text-white">My Marketing template</h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant={"ghost"} size={"icon"} className="rounded-full cursor-pointer hover:bg-transparent hover:backdrop-blur-lg">
                <MoreVertical className="text-white" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Heart />
                Favorite
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PenLine />
                Rename
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Copy />
                Duplicate
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <p className="text-xs p-0.5">Last updated few days ago</p>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
      <CardFooter className="justify-between px-1 py-2">
        <Button variant={"secondary"} className="cursor-pointer">
          <PenBoxIcon />
          Edit
        </Button>
        <Button variant={"secondary"} className="cursor-pointer">
          <Upload />
          Export
        </Button>
        <Button variant={"destructive"} className="cursor-pointer">
          <Trash2 />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};
