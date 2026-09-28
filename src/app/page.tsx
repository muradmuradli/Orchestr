import { HydrateClient, prefetch, trpc } from "@/trpc/server";
import { User } from "./user";
import { Suspense } from "react";
export default async function Home() {
  prefetch(trpc.getUsers.queryOptions());
  return (
    <HydrateClient>
      <Suspense fallback="Loading...">
        <User />
      </Suspense>
    </HydrateClient>
  );
}
