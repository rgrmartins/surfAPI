// Config de setup para rodar os testes
import { SetupServer } from '@src/server';
import supertest from 'supertest';

// Será invocada sempre antes de todos os testes(esse setup em geral)
beforeAll(() => {
  const server = new SetupServer();
  server.init();
  global.testRequest = supertest(server.getApp());
});
