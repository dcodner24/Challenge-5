$('#currentDay').text(moment().format('dddd, MMMM Do'))

function updateDesc(){

}

function updateColor(){

   
    

}


$('.saveBtn').on('click',updateDesc)
updateColor()
// Console log used to determine whether moment().hour() is in 12 or 24 hour format.
// console.log(moment().hour());