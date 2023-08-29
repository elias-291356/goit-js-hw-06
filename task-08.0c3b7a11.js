const e=document.querySelector(".login-form"),t=e.elements.email.value,n=e.elements.password.value;e.addEventListener("submit",(s=>{if(s.preventDefault(),""===t||""===n)alert("Всі поля повинні бути заповнені");else{const s={inputLoginRef:t,inputPasswordRef:n};e.reset(),console.log(s)}}));
//# sourceMappingURL=task-08.0c3b7a11.js.map
