/**
 * Cloudflare Worker in front of the static build. Its only job is to send
 * www.<domain> to the plain domain so the site lives at a single address;
 * everything else is handed straight to the Vite build in ./dist.
 */
interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.hostname.startsWith('www.')) {
      url.hostname = url.hostname.slice('www.'.length)
      return Response.redirect(url.toString(), 301)
    }

    return env.ASSETS.fetch(request)
  },
}
