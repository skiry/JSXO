var player = 0;
var won = 0;
var checked = 0;
$(document).ready(function() {
    //possible answers
    const arr = [];
    arr.push("X", "O", "x", "o");
    let firstUser = prompt("First player is X/O", "X");
    while (!arr.includes(firstUser)) {
        alert("X/O!!!");
        firstUser = prompt("First player is X/O?", "X");
    }
    
    $("td").click(function() {
        if (won == 1) {
            if (confirm("Play again?")) {
                $("td").each((val, i) => {
                    i.innerHTML = '';
                    i.className = '';
                });
                won = 0;
                checked = 0;
            }
        } else if (checked == 9) {
            if (confirm("Play again?")) {
                $("td").each((val, i) => {
                    i.innerHTML = '';
                    i.className = '';
                });
                won = 0;
                checked = 0;
            }
        } else {
            var currText = this.innerHTML;
            if (currText === '') {
                if (player === 0) {
                    this.innerHTML = firstUser.toUpperCase().charCodeAt(0) - "X".charCodeAt(0) === 0 ? "X" : "O";
                    this.className = this.innerHTML.toLowerCase();
                    checked += 1;
                } else {
                    this.innerHTML = firstUser.toUpperCase().charCodeAt(0) - "X".charCodeAt(0) === 0 ? "O" : "X";
                    this.className = this.innerHTML.toLowerCase();
                    checked += 1;
                }
            player = 1 - player;
            checkWin();
            }
        }
    })
    
    function checkWin() {
        let xs = [];
        let os = [];
        $("td").each(function(i, val) {
            if (val.innerHTML === "X") {
                xs.push(i);
            } else if (val.innerHTML === "O") {
                os.push(i);
            }
        });
        
        let situations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
        situations.forEach((val) => {
            let sum = 0;
            val.forEach((val, i) => {
                if (xs.includes(val)) {
                    sum += 1;
                }
            })
            if (sum === 3) {
                alert("Player with X won!!! Congratulations.");
                won = 1;
            }
            
            sum = 0;
            val.forEach((val) => {
                if (os.includes(val)) {
                    sum += 1;
                }
            })
            if (sum === 3) {
                alert("Player with O won!!! Congratulations.");
                won = 1;
            }
        })
    }
})