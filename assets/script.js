$('#currentDay').text(moment().format('dddd, MMMM Do'))

function updateDesc(){

}

function updateColor(){
    let time = moment().hour();
    
    // Iterates through each item in the DOM that has the 'description' class
    $(".description").each(function () {
      
    //  Coloring for elements in the future
        if(parseInt($(this).attr("id")) > time){
            $(this).addClass('future');
       }
    //  Coloring for elements in the present
        if(parseInt($(this).attr("id")) === time){
            $(this).addClass('present');
        }
    // Coloring for elements in the past
        if(parseInt($(this).attr("id")) < time){
            $(this).addClass('past');
            
        }
        
        

})
}

$('.saveBtn').on('click',updateDesc)
updateColor()
// Console log used to determine whether moment().hour() is in 12 or 24 hour format.
// console.log(moment().hour());