// !!! IMPORTANT: Replace this with the Beeceptor URL you just created.
const BACKEND_URL = 'https://my-secure-api.free.beeceptor.com/api';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // This worker acts as a proxy. It takes the incoming request and
    // forwards it to the real backend API defined in BACKEND_URL.
    // The backend's response is then returned back to the original client.
    
    // Create a new URL object from the BACKEND_URL
    const url = new URL(BACKEND_URL);

    // Forward the original request to the backend URL.
    // We pass the original request object directly. This includes the method,
    // headers, and body from the client.
    return fetch(url.toString(), request);
  },
};
