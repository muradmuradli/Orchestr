import { z } from "zod";
import { baseProcedure, createTRPCRouter } from "../init";
import { db } from "@/prisma/db";
export const appRouter = createTRPCRouter({
  getUsers: baseProcedure.query(() => {
    return db.user.findMany();
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
