import{test,expect} from "@playwright/test"
import { request } from "node:http"
test("Get API", async({request})=>{
    const response=await request.get('https://restful-booker.herokuapp.com/booking')
    console.log(response.status())
    console.log(await response.json())
    expect(response.status()).toBe(200)
    console.log(response.ok())
    expect (response.ok()).toBeTruthy()

})

test("Post API", async({request})=>{
    const postResponse=await request.post('https://restful-booker.herokuapp.com/booking',{
        headers:'Content-Type: application/json',
        data:{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
        }
    });

    const body=await postResponse.json()
    console.log(body)
})
test.only('Put API',async({request})=>{
    const postRes=await request.post('https://restful-booker.herokuapp.com/booking',{
        headers:'Content-Type: application/json',
            data:{
    "firstname" : "Jim",
    "lastname" : "Brown",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
        }
    });

     const postbody=await postRes.json()
    console.log(postbody)

   const bookID= postbody.bookingid;
   console.log(`bookID=${bookID}`);

   //token generation

  const token= await request.post('https://restful-booker.herokuapp.com/auth',
    {headers: {'Content-Type': 'application/json'},
    data: {
    "username" : "admin",
    "password" : "password123"
},
   },
   );

 const tokenbody=await token.json()
 console.log(tokenbody)
 const tokn=tokenbody.token;

 console.log(`Token=${tokn}`);

 //put method

 const putRes=await request.put('https://restful-booker.herokuapp.com/booking/'+bookID,

    {
        headers: {
            'Content-Type' :'application/json',
            'Accept': 'application/json',
            'Cookie': `Token=${tokn}`
        },

    data: {
    "firstname" : "Sudish",
    "lastname": "reigns",
    "totalprice" : 111,
    "depositpaid": true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "lunch"
    }
    }
 )

const putBody=await putRes.json()
console.log( await putRes.status())
 console.log(putBody)
})
