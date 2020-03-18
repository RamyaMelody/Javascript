  function printNumbers(from, to) {
            let current = from;
            setTimeout(function go() {
                document.getElementById("count").innerHTML=current;
                if (current > to) {
                    setTimeout(go, 1000);
                }
                else{
                   document.getElementById("count").innerHTML="Go"; 
                }
                current--;
            }, 1000);
        }
  
        printNumbers(10, 0);