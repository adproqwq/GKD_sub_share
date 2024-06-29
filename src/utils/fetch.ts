import { GM_fetch, gmOk } from './gm';

export const enhanceFetch = async (
  input: RequestInfo | URL,
  init?: RequestInit,
  options?: { proxy?: boolean },
) => {
  const req = new Request(input);
  const u = new URL(req.url);

  if (gmOk()) {
    // with cookie
    // export snapshot need
    return GM_fetch(input, init);
  } else if (options?.proxy) {
    if (!u.href.startsWith('https://github.com/')) {
      throw new Error(`proxy is not supported`);
    }
    const proxyUrl = new URL(`https://proxy.gkd.li`);
    proxyUrl.searchParams.set(`proxyUrl`, u.href);
    const request = new Request(input, init);
    return fetch(proxyUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
  } else {
    throw new Error(`gm is not supported`);
  }
};