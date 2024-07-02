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
    // export share link need
    return GM_fetch(input, init);
  } else if (options?.proxy) {
    const proxyOrigin = 'https://proxy.adproqwq.top/';
    const proxyParam = u.href.replace('://', '/');
    const proxyUrl = proxyOrigin + proxyParam;
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