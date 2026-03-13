import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
  healthCheck: baseProcedure.query(async () => {
    return { status: 'ok' };
  })
});

// export type definition of API
export type AppRouter = typeof appRouter;