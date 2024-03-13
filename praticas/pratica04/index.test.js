const supertest = require('supertest');

const app = require('./index')

const request = supertest(app)

test('GET / retorna o status 200', async function() {
    const response = await request.get('/');
    expect(response.status).toBe(200);
  });


  test('POST / retorna o status 201', async function() {
    const response = await request.post('/');
    expect(response.status).toBe(201);
  });

  test('DELETE / retorna o status 204', async function() {
    const response = await request.delete('/');
    expect(response.status).toBe(204);
  });