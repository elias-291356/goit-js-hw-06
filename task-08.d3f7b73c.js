const e=document.querySelector(".login-form");let t=e.elements.email.value,l=e.elements.password.value;e.addEventListener("submit",(n=>{if(n.preventDefault(),""===t.value||""===l.value)alert("Всі поля повинні бути заповнені");else{const n={inputLoginRef:t,inputPasswordRef:l};e.reset(),console.log(n)}}));
//# sourceMappingURL=task-08.d3f7b73c.js.map
