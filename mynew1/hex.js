





const hexColor= () =>{


   let num = Math.random().toString(16).slice(2,8).padEnd(6,0);
   return '#'+num;
}


console.log(hexColor())