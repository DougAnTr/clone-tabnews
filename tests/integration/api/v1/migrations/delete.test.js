test("DELETE to /api/v1/migrations should return 405", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });

  expect(response.status).toBe(405);
});

test("DELETE to /api/v1/migrations should not open new db connections", async () => {
  await fetch("http://localhost:3000/api/v1/migrations", {
    method: "DELETE",
  });

  const response = await fetch("http://localhost:3000/api/v1/status");
  const responseBody = await response.json();

  expect(responseBody.dependencies.database.open_connections).toEqual(1);
});
