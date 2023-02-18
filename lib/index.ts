import express, { Express } from 'express';
import http, { Server as HttpServer } from 'http';
import { Server as SocketServer } from 'socket.io';

export class NiteChat {
  server: Express;

  private _io: SocketServer;
  private _httpServer: HttpServer;

  constructor() {
    this.server = express();
    this._httpServer = http.createServer(this.server);
    this._io = new SocketServer(this._httpServer);
  }

  async listen(port?: number, cb?: () => void) {
    return this.server.listen(port, cb);
  }
}
