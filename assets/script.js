$('#currentDay').text(moment().format('dddd, MMMM Do'))


var blankArray = []

// Populates a blank array in local storage if one is not present.
if(JSON.parse(localStorage.getItem('tasks') == null)){
    localStorage.setItem('tasks', JSON.stringify(blankArray));
}

function clearLocal(){
    localStorage.setItem('tasks', JSON.stringify(blankArray));
    location.reload();
}

function populateTasks(){
    storedTasks = JSON.parse(localStorage.getItem('tasks'));
    var i = 0;
        $('.description').each(function(){
           $(this).text(storedTasks[i]);
           i++;

        })

}

function updateTasks(event){
    event.preventDefault();

    var storedTasks = [];
    

    $('.description').each(function () {
        storedTasks.push($(this).val());
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    })
    
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

$('.saveBtn').on('click',updateTasks)
$('.delBtn').on('click',clearLocal)
updateColor()
populateTasks()
// Console log used to determine whether moment().hour() is in 12 or 24 hour format.
// console.log(moment().hour());