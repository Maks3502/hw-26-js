// // 1 завдання 
// const openButton = document.querySelector(`button[data-action="open-modal"]`);
// const closeButton = document.querySelector(`button[data-action="close-modal"]`)
// console.log(openButton);
// console.log(closeButton);
// openButton.addEventListener("click", openModal);
// closeButton.addEventListener("click", closeModal);


// // console.log (closeModal.dataset.action);
// // // if(closeModal.dataset.action === "close-modal"){

// // // }


// function openModal (){
//   return document.body.classList.add("show-modal");
// };


// function closeModal (){
//     return document.body.classList.add("show-modal");
// };

// завдання 2 
// const divBackdrop = document.querySelector(".backdrop js-backdrop");
// console.log(closeBackdrop)

// divBackdrop.addEventListener("click", closeBackdrop)

// function closeBackdrop (){
// document.divBackdrop.classList.add("show-modal")
// };


// завдання 3

// const inputRed = document.querySelector(`input[value="red"]`)
// const inputWhite = document.querySelector(`input[value="white"]`)
// const inputGreen = document.querySelector(`input[value="green"]`)

// inputRed.addEventListener("input", redBody);
// inputWhite.addEventListener("input", whiteBody);
// inputGreen.addEventListener("input", greenBody);

// function whiteBody (){
// document.body.style.background = "white";
// }

// function redBody (){
//   document.body.style.background = "red";
// }

// function greenBody (){
//   document.body.style.background = "green";
// }



// завдання 4
const refs =  {
    inputLength: document.querySelector("[data-length]"),
    input: document.querySelector("[data-input]"),
    title: document.querySelector("[data-title]"),
    span: document.querySelector("[data-span]"),
 }

refs.input.addEventListener("input", (e) =>{
    refs.span.textContent = e.currentTarget.value;
   if(refs.input.value !== ""){
    refs.span.textContent = e.currentTarget.value;
   }else{
    refs.span.textContent = "Незнайомець";
   }

   if(refs.input.value === ""){
    refs.span.textContent = "Незнайомець";
   }
})

// завдання 5

refs.inputLength.addEventListener("blur", (e) => {
if(refs.inputLength.value.length === 6 ){
    refs.inputLength.classList.add("valid");
    refs.inputLength.classList.remove("invalid");

}else{
    refs.inputLength.classList.add("invalid");
    refs.inputLength.classList.remove("valid");
}
})



// завдання 6 


// const refs = {
//     inputSize: document.querySelector("[data-input-size]"),
//     span: document.querySelector("[data-span]"),
// }


// refs.inputSize.addEventListener("input", (e) =>{
//     refs.span.style.fontSize = `${e.currentTarget.value}px`;
   
    
// })




