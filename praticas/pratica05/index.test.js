const supertest = require('supertest');

const app = require('./index');

const request = supertest(app);

describle("Teste API /produtos", function() {

    test("Deve retornar 200 e um JSON no GET/produtos", async() => {
        const response = await request.get("/produtos");
        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test("Deve retornar 200 e um JSON no GET/produtos/id", async() =>{
        const response = await request.get("/produtos/1");
        expect(response.status).toBe(200)
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test("Deve retornar 404 e um JSON no GET/produtos/id", async() => {
        const response = await request.get("/produtos/1000");
        expect(respo.status).toBe(404);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    test("Deve retornar 201 e um JSON no POST/produtos", async() => {
        const response = await request.post("/produtos")
            .send({
                nome:"banana",
                preco:"$15"
            })
        expect(response.status).toBe(201);
        expect(response.headers['content-type']).toMatch(/json/);
    })

    
})