  function printNumbers(from, to) {
            let current = from;
            setTimeout(function go() {
                 document.write(current,"<br>");
                if (current > to) {
                    setTimeout(go, 1000);
                }
                current--;
            }, 1000);
        }
  
        printNumbers(10, 0);