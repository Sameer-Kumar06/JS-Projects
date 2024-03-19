let toastBox = document.getElementById("toastBox")

let successMessage = `<i class="fa-solid fa-circle-check"></i> Successfully submitted`
let errorMessage = `<i class="fa-solid fa-circle-xmark"></i> Please fix the error!`
let invalidMessage = `<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again`

function showToast(message){
    let toast = document.createElement('div');
    toast.classList.add("toast");
    toast.innerHTML = message;
    toastBox.appendChild(toast);

    if(message.includes('error')){
        toast.classList.add('error')
    }
    if(message.includes('Invalid')){
        toast.classList.add('invalid')
    }


    setTimeout(()=>{
        toast.remove();
    },6000)
}


document.querySelector("#success").addEventListener("click", ()=>{
    showToast(successMessage)
})
document.querySelector("#error").addEventListener("click", ()=>{
    showToast(errorMessage)
})
document.querySelector("#invalid").addEventListener("click", ()=>{
    showToast(invalidMessage)
})