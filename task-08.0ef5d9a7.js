const e=document.querySelector(".login-form");e.addEventListener("submit",(l=>{l.preventDefault();const s=e.elements.email.value,t=e.elements.password.value;if(""===s||""===t)alert("Всі поля повинні бути заповнені");else{const l={loginEl:s,passwordEl:t};e.reset(),console.log(l)}}));
//# sourceMappingURL=task-08.0ef5d9a7.js.map
