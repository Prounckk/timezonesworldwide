export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // If not root path, redirect to home page
    if (url.pathname !== "/") {
      url.pathname = "/";
      url.search = ""; // drop query to keep home clean; remove this line to preserve queries
      return Response.redirect(url.toString(), 301);
    }

    // Serve the home page from static assets
    return env.SITE.fetch(request);
  },
};
