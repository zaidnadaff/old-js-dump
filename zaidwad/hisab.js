const multistepform=document.querySelector("[data-multi-step]")
const formsteps=[...multistepform.querySelectorAll("[data-step]")]
const next=[...multistepform.querySelectorAll("[data-next")]
const previous=[...multistepform.querySelectorAll("[data-previous")]
console.log(1)
 let currentStep = formsteps.findIndex(step => {
    return step.classList.contains("active")
  })
  console.log(currentStep)
let p=0
let q=1
showstep()

formsteps.forEach((step,index)=>{
    final=index
})




//   multistepform.addEventListener("click", e => {
//     let incrementor
//     if (e.target.matches("[data-next]")) {
//       incrementor = 1
//     } else if (e.target.matches("[data-previous]")) {
//       incrementor = -1
//     }
multistepform.addEventListener("click", e => {
  
  if (e.target.matches("[data-next]")) {
    p+=1
    showstep()

  } else if (e.target.matches("[data-previous]")) {
    p-=1
    showstep()
  }
})
//     if (incrementor == null) return
  
//     const inputs = [...formsteps[currentStep].querySelectorAll("input")]
//     const allValid = inputs.every(input => input.reportValidity())
//     if (allValid) {
//       currentStep += incrementor
//       showcurrentstep()
//     }
//   })

//   formsteps.forEach((step,index))

//   function showcurrentstep()
//   {
//     formsteps.forEach((step,index) =>{ 
//         step.classList.toggle("active",index==currentStep)
//     })
//   }
function showstep()
{
    formsteps.forEach((step,index)=>{
   
    step.classList.toggle("active",index==p)  
})
}

const next1 = document.querySelector('#next1');
const next2 = document.querySelector('#next2');

next1.addEventListener('click' , e=>{
  const date = document.querySelector('#date').value;
  const value = document.querySelector('#typee').value;
  console.log(value)
  console.log(date)
})

next2.addEventListener('click' , e=>{
  const date = document.querySelector('#expense').value;
  const value = document.querySelector('#amount').value;
  console.log(value)
  console.log(date)
})

document.getElementById('L6').style.display = 'none';
async function addtohisaab(){
  document.getElementById('L6').style.display = 'block';
  document.getElementById('cont').style.display = 'none';
  const email = localStorage.getItem('email');
  const date = document.getElementById('date').value;
  const type = document.getElementById('typee').value;
  const expense = document.getElementById('expense').value;
  const amount = document.getElementById('amount').value;
  console.log(email, date, type, expense, amount);
  let result = await fetch('http://localhost:3000/api', {
    method: 'POST',
    body: JSON.stringify({email: email, date: date, type:type, expense:expense, amount:amount, url:'addtohisaab'}),
    headers: {
    'Content-Type': 'application/json',
    }
  })
  let data = await result.json();
  console.log(data);
  const error = data.status.error;
  console.log(error);
  if(error != 'None'){
    alert("An error occured "+error);
    window.location = '/hisab.html';
    return;
  }
  alert("Added succesfully!");
  window.location = '/hisab.html'
}

