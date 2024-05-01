const supertest = require("supertest");
const app = require("../app");
const request = supertest(app);

describle ("Teste da API produtos", function() {

    test("POST/produtos deve retornar 201 e objeto JSON", async function() {
        const novo = {nome: "uva", preco: 20.00 };
        const response = await request.post("/produtos").send(novo);
        expect(response.status).toBe(201);
        expect(response.type).toBe("/application/json");
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("nome", novo.nome)
        expect(response.body).toHaveProperty("preco", novo.preco)
    })

    test("GET/produtos deve retornar 200 e objeto JSON", async function() {
        const response = await request.get("/produtos");
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json")
        expect(Array.isArray(response.body)).toBe(true);
    })

    test("GET/produtos/1 deve retornar 200 e objeto JSON", async function() {
        const response = await request.get("/produtos/1")
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("nome");
        expect(rsponse.body).toHaveProperty("preco")
    })

    test("GET/produto/id deve retornar 404 e objeto JSON", async function() {
        const response = await request.get("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty("msg", "Produto não encontrado!");
    })

    test("POST/produtos sem objeto JSON deve retornar 422", async function() {
        const response = await request.post("/produtos");
        expect(response.status).toBe(422);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty("msg", "Nome e produtos são obrigatórios!");
    })

    test("PUT/produtos/1 retorna 200 e objeto JSON", async function() {
        const atual = {"nome": "maracuja","preco": 50};
        const response = await request.put("/produtos/1").send(atual);
        expect(response.status).toBe(200);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty("id")
        expect(response.body).toHaveProperty("nome", atual.nome);
        expect(response.body).toHaveProperty("preco", atual.preco);

    })

    test("PUT/produtos/100 retorna 404 e objeto JSON", async function() {
        const response = await request.put("/produtos/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty("msg", "Produto não encontrado!");
    })

    test("DELETE/produtos/1 retorna 204 sem conteudo", async function() {
        const response = await request.delete("/produto/1");
        expect(response.status).toBe(204);
        expect(response.type).toBe("")
        expect(response.body).toEqual({})    //toEqual ===   toBe ==
    })

    test("DELETE/produtos/100 retorna 404 e objeto JSON", async function() {
        const response = await request.delete("produto/100");
        expect(response.status).toBe(404);
        expect(response.type).toBe("application/json");
        expect(response.body).toHaveProperty("msg", "Produto não encontrado!");
    })

})