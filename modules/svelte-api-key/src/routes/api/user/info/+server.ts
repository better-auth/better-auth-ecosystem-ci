import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ locals }) => {
  console.log('locals', locals)
  return json({
    // @ts-expect-error
    user: locals.user
  });
};