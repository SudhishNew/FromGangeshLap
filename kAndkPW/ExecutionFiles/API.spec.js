import{test,expect} from "@playwright/test"
import { request } from "node:http"

test.skip('Get ALLApi', async ({request})=>{
    const response=await request.get( 'https://fakestoreapi.com/products')
    const data=await response.json()          //to get the response payload
    const statusCode=await response.status()
    const statusMsg=await response.statusText()

    await expect(statusMsg).toBe("OK")            // to validate status msg
    console.log(data);
    console.log(statusCode, statusMsg);
    
})

test.skip('GET SingleProduct', async({request})=>{

    const response=await request.get('https://fakestoreapi.com/products/1')

    const data=await response.json()
    const statusCode=await response.status()

    console.log(data);
    console.log(statusCode);
    await expect(data.price).toBe(109.95)
    await expect(data.title).toContain('Fjallraven')
    
})
let id
test('Post API', async({request})=>{

    const response=await request.post('https://fakestoreapi.com/products',{
        headers:{                                  //headers
            "Content-Type": "application/json"
        },
        data:{                                      //request payload
            
                "title": "Dell laptop", 
                "price": 30.99
        }

    }
    )
    const data=await response.json()
    const code=await response.status()
    console.log(data.id);
     id=data.id
    
    console.log(code);

      const Getresponse =await request.get(`https://fakestoreapi.com/products/${id}`)
      const body=await Getresponse.text()
      console.log(body);

})

test('put API', async({request})=>{
    const response =await request.put(`https://fakestoreapi.com/products/${id}`,{

        headers:{
            'Content-Type': 'application/json'
        },
        data:{
            "title": "Updated Product", 
            "price": 100.99
        }
    })

    const status=await response.status()
    const data=await response.json()
    console.log(status);
    console.log(data);
    
    
})

test('Delete API',async ({request})=>{
    const response=await request.delete(`https://fakestoreapi.com/products/${id}`)

    console.log(await response.status())
})

