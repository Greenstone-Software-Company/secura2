// types/next-connect.d.ts
declare module 'next-connect' {
  import { NextApiRequest, NextApiResponse } from 'next';

  interface Options {
    onError?: (err: any, req: NextApiRequest, res: NextApiResponse, next: (err?: any) => void) => void;
    onNoMatch?: (req: NextApiRequest, res: NextApiResponse) => void;
  }

  interface Handler<T = any> {
    (req: NextApiRequest, res: NextApiResponse, next: (err?: any) => void): T;
  }

  interface NextConnect {
    use(...handlers: Handler[]): this;
    get(handler: Handler): this;
    post(handler: Handler): this;
    put(handler: Handler): this;
    delete(handler: Handler): this;
    patch(handler: Handler): this;
    options(handler: Handler): this;
    head(handler: Handler): this;
  }

  function nextConnect(options?: Options): NextConnect;

  export default nextConnect;
}
