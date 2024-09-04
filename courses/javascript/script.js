let namasteBtn = document.querySelector('button');
// namasteBtn.addEventListener('click',showMsg);
 namasteBtn.addEventListener('click',inputMsg);

// function showMsg()
// {
//     alert("namaste world");
// }

function inputMsg(){
    let name =prompt('Enter name of student ');
    namasteBtn.textContent='Roll No. 1:' + name;

}

