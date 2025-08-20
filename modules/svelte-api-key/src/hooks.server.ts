import type { Handle } from '@sveltejs/kit';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { building } from '$app/environment';
import { auth } from './auth'


export const handle: Handle = async ({ event, resolve }) => {	// Get the user session if it exists, this will be null if the user is not authenticated
  const session = await auth.api.getSession({
    headers: event.request.headers
  });

  console.log('Session:', session);

  // @ts-expect-error
  event.locals.user = session?.user || null; // Set the user in locals if session exists

  // Call the SvelteKit handler to process the request
  const response = await svelteKitHandler({ event, resolve, auth, building });


  console.log('Response:', event.locals);

  return response;
}
