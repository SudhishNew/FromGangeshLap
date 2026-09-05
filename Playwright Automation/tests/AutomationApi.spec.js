import{test,expect} from "@playwright/test"
import { request } from "https"

test("Get Method", async({request})=>{
   const GetResponse= await request.get("https://restful-booker.herokuapp.com/booking/10")
   const body=await GetResponse.json()
    console.log(await GetResponse.status())
    expect(GetResponse.status()).toBe(200)
    expect(body).toHaveProperty('totalprice')

})


test.only("Put Method", async({request})=>{

   //Post create and fetch an id 
  const PostResponse= await request.post("https://restful-booker.herokuapp.com/booking",
      {headers:{"Content-Type": "application/json"},
      data :{
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
   })
   const Postbody= await PostResponse.json()
   console.log(Postbody)
   const BookId=Postbody.bookingid;
   console.log(await PostResponse.status())

   //Token creation

   const tokenResponse=await request.post('https://restful-booker.herokuapp.com/auth',
      {
         headers:{
            'Content-Type': 'application/json'
         },
         data:{
            
            "username" : "admin",
            "password" : "password123"

         }
      }
   )
   
   // console.log(await tokenResponse.json())

   const TokenBody=await tokenResponse.json()

  const Token= await TokenBody.token;
  console.log(Token)
 
  //Put method (update)

   const PutResponse=await request.put(`https://restful-booker.herokuapp.com/booking/${BookId}`,
   {
      headers:{
         'Content-Type': 'application/json',
         'Accept': 'application/json',
         'Cookie': `token=${Token}`
      },

      data:{
         
      "firstname" : "Roman",
      "lastname" : "Reigns",
      "totalprice" : 111,
      "depositpaid" : true,
      "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
       "additionalneeds" : "Breakfast"
}
      
   })

   const putbody=await PutResponse.json()
   console.log(putbody)
   console.log(await PutResponse.status())
   

})