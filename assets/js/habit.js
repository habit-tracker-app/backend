var doneButtons = document.querySelectorAll('.done');
var notDoneButtons = document.querySelectorAll('.not-done');
var nullButtons = document.querySelectorAll('.null-status');


function changeStatusCall(id,status){
    let date = new Date().toLocaleDateString();
    $.ajax({
            type:'get',
            url:'/users/changeStatus',
            data:{id:id,status:status,date:date},
            success:function(data){
                new Noty({
                    theme: 'relax',
                    text: "status updates",
                    type: 'success',
                    layout: 'topRight',
                    timeout: 1500
                    
                }).show();
            },
            error:function(err){
                console.log(`Error in ajax Call ${status}`);
            }
        });
}


for(button of doneButtons){
    button.addEventListener('click',function(){
        let idDone = this.id.slice(5);
        changeStatusCall(idDone,'done');
    });
}

//adding event listener to not done buttons
for(button of notDoneButtons){
    button.addEventListener('click',function(){
        let idNotDone = this.id.slice(9);
        changeStatusCall(idNotDone,'not-done');
    });
}

//adding event listener to update button
for(button of nullButtons){
    button.addEventListener('click',function(){
        let idNull = this.id.slice(5);
        changeStatusCall(idNull,'null');
    });
}


$('#delete-btn').click(function(){

    let allCheckbox = document.querySelectorAll('.checkbox-container input');
    let checkedItem = [];

    for(item of allCheckbox){
        if(item.checked){
            checkedItem.push(item.id);
        }
    }
    const isDelete = confirm("Do you really want to delete records?");
    if(isDelete==true){

        $.ajax({
            type:'get',
            url:'/users/delete',
            data:{info:checkedItem},
            success:function(){
                for(id of checkedItem){
                    $(`#item-${id}`).remove(); 
                }
                new Noty({
                    theme: 'relax',
                    text: "Habit Deleted Successfully",
                    type: 'success',
                    layout: 'topRight',
                    timeout: 1500
                    
                }).show();
            },error: function(error){
                console.log(error.responseText);
            }
        });
    }
    
});