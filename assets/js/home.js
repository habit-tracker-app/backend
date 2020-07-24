const submitBtn=document.getElementById('submit-btn');
const snackBar=document.getElementById('snackBar');

submitBtn.addEventListener('click',function(){
    snackBar.style.display="block";
    setTimeout(function(){
        snackBar.style.display="none";
    },5000);
})