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
                    new Noty({
                        theme: 'relax',
                        text: "Habit Deleted Successfully",
                        type: 'success',
                        layout: 'topRight',
                        timeout: 1500
                        
                    }).show();
                }
            },error: function(error){
                console.log(error.responseText);
            }
        });
    }
    
});