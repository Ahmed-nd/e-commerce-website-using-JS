let buttomSubmit = document.getElementsByTagName('input');
function submit()
{
    let check = 1;
    for (let index = 0; index < buttomSubmit.length; index++) {
       if(buttomSubmit[index].value == 0)
       {
           check = 0;
           buttomSubmit[index].style.border = '1px solid red';
       }
    }
    if(check == 1){
        for (let index = 0; index < buttomSubmit.length; index++) {
                buttomSubmit[index].style.border = '3px solid green';
         }
         alert('Submited');
    }
    else{
        alert('Incomplete information');
    }
}

