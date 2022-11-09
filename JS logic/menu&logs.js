    const reload = document.querySelector("#reloadBtn");
     reload.addEventListener("click",refillPools)
     
     function refillPools(){
          userStashObj.$ = 10;
          UniversalPoolObj.$ = 999;
          userStash.innerHTML = `$${userStashObj.$}`;
          universalPool.innerHTML = `$${UniversalPoolObj.$}`
     }
