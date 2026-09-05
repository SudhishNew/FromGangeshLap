import { test, expect } from "@playwright/test";

let userId;
test.skip("GET Users", async ({ request }) => {
  const response = await request.get("https://api.escuelajs.co/api/v1/users");
  const body = await response.json();
  //    console.log(body)

  console.log(await response.status());
  await expect(response.status()).toBe(200);
  console.log(await response.statusText());
});

test.skip("GET single user", async ({ request }) => {
  const response = await request.get("https://api.escuelajs.co/api/v1/users/5");

  const body = await response.json();
  console.log(body);
  await expect(response.status()).toBe(200);
  console.log(await response.statusText());
});

test("Post User", async ({ request }) => {
  const response = await request.post(
    "https://api.escuelajs.co/api/v1/users/",
    {
      data: {
        name: "Prakash",
        email: "prakash@gmail.com",
        password: "0007",
        avatar: "https://picsum.photos/800",
      },
    },
  );

  console.log(await response.status());
  console.log(await response.json());
  const body = await response.json();
  userId = body.id;
  console.log(userId);
});

test("PUT user", async ({ request }) => {
 const response= await request.put(`https://api.escuelajs.co/api/v1/users/${userId}`, {
    data: {
      email: "muni@gmail.com",
      name: "Muniyappan",
    },
  });

  console.log(await response.json())
 console.log( await response.statusText())
 await expect(response.statusText()).toBe('OK')

});

test('delete user', async({request})=>{
    const response=await request.delete(`https://api.escuelajs.co/api/v1/users/${userId}`)

   console.log( await response.status())

   const getRes=await request.get(`https://api.escuelajs.co/api/v1/users/${userId}`)
  console.log( await getRes.status())
  console.log(await getRes.json())

})
