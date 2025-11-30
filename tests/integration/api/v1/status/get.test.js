test("GET /api/v1/status should return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);

  const responseBody = await res.json();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(parsedUpdatedAt).toEqual(responseBody.updated_at);

  const databaseVersionValue = responseBody.dependencies.database.version;
  expect(databaseVersionValue).toEqual("16.0");

  const databaseMaxConnectionsValue =
    responseBody.dependencies.database.max_connections;
  expect(databaseMaxConnectionsValue).toEqual(100);

  const databaseOpenedConnectionsValue =
    responseBody.dependencies.database.opened_connections;
  expect(databaseOpenedConnectionsValue).toEqual(1);

  /*console.log("Response Body:", responseBody);*/
});
