test("GET /api/v1/status should return 200", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.status).toBe(200);
});

test("GET /api/v1/status should return correct message", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  const data = await res.json();
  expect(data).toEqual({ message: "Não tem problemas!" });
});

test("GET /api/v1/status should return JSON content type", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.headers.get("content-type")).toContain("application/json");
});

test("GET /api/v1/status should respond within acceptable time", async () => {
  const start = Date.now();
  await fetch("http://localhost:3000/api/v1/status");
  const duration = Date.now() - start;
  expect(duration).toBeLessThan(500); // Expect response time to be under 500ms
});

test("GET /api/v1/status should not return an error", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  expect(res.ok).toBe(true);
});

test("GET /api/v1/status should have no unexpected properties", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  const data = await res.json();
  expect(Object.keys(data)).toEqual(["message"]);
});

test("GET /api/v1/status should handle multiple requests", async () => {
  const requests = Array.from({ length: 10 }, () =>
    fetch("http://localhost:3000/api/v1/status"),
  );
  const responses = await Promise.all(requests);
  for (const res of responses) {
    expect(res.status).toBe(200);
    const data = await res.json();
    expect(data).toEqual({ message: "Não tem problemas!" });
  }
});

test("GET /api/v1/status should return valid JSON", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  const text = await res.text();
  expect(() => JSON.parse(text)).not.toThrow();
});

test("GET /api/v1/status should return message in Portuguese", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  const data = await res.json();
  expect(data.message).toBe("Não tem problemas!");
});
test("GET /api/v1/status should return message as a string", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  const data = await res.json();
  expect(typeof data.message).toBe("string");
});

test("GET /api/v1/status should return message as a string", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  const data = await res.json();
  expect(typeof data.message).toBe("string");
});

test("GET /api/v1/status should not return null or undefined", async () => {
  const res = await fetch("http://localhost:3000/api/v1/status");
  const data = await res.json();
  expect(data).not.toBeNull();
  expect(data).not.toBeUndefined();
});
