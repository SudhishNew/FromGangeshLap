export class Search{
    constructor(page){
      this.page=page;
      this.location=  page.locator('[id="location"]');
      this.hotels=page.locator('#hotels');
      this.roomtype= page.locator('select[name="room_type"]');
      this.Roomnos=page.locator('[id="room_nos"]');
      this.indate=page.locator('[id="datepick_in"]');
      this.outdate=page.locator('[id="datepick_out"]');
      this.Adults=page.locator('[id="adult_room"]')
     this.child= page.locator('[id="child_room"]')
     this.submit=page.locator('[id="Submit"]')


    }

     async SearchHotel({
        location,
        hotels,
        roomtype,
        Roomnos,
        indate,
        outdate,
        Adults,
        child
    })
    {
        await this.location.selectOption(location)
        await this.hotels.selectOption(hotels)
        await this.roomtype.selectOption(roomtype)
        await this.Roomnos.selectOption(Roomnos)
        await this.indate.fill(indate)
        await this.outdate.fill(outdate)
        await this.Adults.selectOption(Adults)
        await this.child.selectOption(child)

    }

   async submitBtn(){
 await this.submit.click()
    }
}