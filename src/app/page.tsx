import { getQueryClient, prefetch, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import Hello from "./hello";

export default async function Home() {
  const queryClient = getQueryClient();

  prefetch(trpc.hello.queryOptions({ text: "world" }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Hello />
    </HydrationBoundary>
  );
}
