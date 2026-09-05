import { test, expect } from "@playwright/test";
// import { request } from "node:http";

let id;
test.skip("Get API", async ({ request }) => {
  const response = await request.get(" https://api.escuelajs.co/api/v1/users");
  console.log(await response.status());
  // console.log(await response.json())
  expect(response.status()).toBe(200);
  console.log(response.ok());
  expect(response.ok()).toBeTruthy();
});

test("POST API", async ({ request }) => {
  const response = await request.post(
    "https://api.escuelajs.co/api/v1/users/",
    {
      data: {
        name: "Nicolas",
        email: "nico@gmail.com",
        password: "1234",
        avatar: "https://picsum.photos/800",
      },
    },
  );

  console.log(await response.status());
  const body = await response.json();
  console.log(body);
  id = await body.id;
  console.log(id);
});

test.skip("Put", async ({ request }) => {
 const putresponse= await request.put(`https://api.escuelajs.co/api/v1/users/${id}`, {
    data: {
      email: "john@mail.com",
      name: "Roman reigns",
    },
  });

  const statuscode=await putresponse.status()
  console.log(statuscode)
  console.log(await putresponse.json())
});

test ('delete', async({request})=>{
    const delRes=await request.delete(`https://api.escuelajs.co/api/v1/users/${id}
`)

console.log(await delRes.status())
console.log(await delRes.statusText())

const getRes=await request.get(`https://api.escuelajs.co/api/v1/users/${id}`)

console.log(await getRes.status())
console.log(await getRes.statusText())



})


