"use client";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { useTRPC } from "../trpc/client";
export function User() {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.getUsers.queryOptions());
  return (
    <div>
      {data?.map((user) => {
        return user.name;
      })}
    </div>
  );
}
