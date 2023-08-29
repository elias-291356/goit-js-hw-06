const e=document.querySelector("#name-input"),t=document.querySelector("#name-output");e.addEventListener("focus",(t=>{e.style.outlineColor="tomato"})),e.addEventListener("blur",(t=>{e.style.borderColor="teal"})),e.addEventListener("input",(n=>{""!==e.value?t.textContent=`${e.value}`:t.innerHTML="Anonymous"}));
//# sourceMappingURL=task-05.840ddf43.js.map
