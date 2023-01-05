    const reload = document.querySelector("#reloadBtn");
     reload.addEventListener("click",refillPools)
     
     function refillPools(){
          userStashObj.$ = 10;
          userStash.innerHTML = `$${userStashObj.$}`;
     }
