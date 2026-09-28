import { Button } from "@/components/ui/button";
import { db } from "@/prisma/db";

export default async function Home() {
  return (
    <div className="">
      <Button>Hey There</Button>
    </div>
  );
}
