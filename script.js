// VALUES

var grid, gridElem = document.getElementById("grid");

var touchElem = document.getElementById("touch");

var score = 0;
	scoreElem = document.getElementById("score");

var infoText = document.getElementById("text");



// GRID FUNCTIONS

function updateGrid() {
	var e, x, y;

	for(y = 0; y < 4; y++) {
		for(x = 0; x < 4; x++) {
			e = gridElem.getElementsByTagName("div")[(y * 4) + x];

			if(grid[y][x] !== -1) {
				e.innerHTML = grid[y][x];
				e.setAttribute("class", "b" + grid[y][x]);
			} else {
				e.innerHTML = "";
				e.setAttribute("class", "bv");
			}
		}
	}
}

function moveGrid(direction) {
var rememb, rememb_numb,log;
	if (direction === 1){
	//merge tiles
        for(var j=0;j<4;++j){ 
                    rememb=rememb_numb=log=0;
                    for(var i=0;i<4;++i){
                        if(grid[i][j]>0){
                            if(log===0){
                                rememb=grid[i][j];
                                log=1;
                                rememb_numb=i;
                            }else{
                                if(log===1 && rememb===grid[i][j]){
                                    grid[i][j]*=2;
                                    log=0;
                                    grid[rememb_numb][j] = -1;
                                    
                                }else{
                                    log=1;
                                    rememb=grid[i][j];
                                    rememb_numb=i;
                                }
                            }
                        }
                    }
                }//move tiles
                for(var j=0;j<4;++j){ 
                    for(var i=1;i<4;++i){
                        if(grid[i-1][j]===-1 && grid[i][j]>0){
                            rememb = grid[i-1][j];
                            grid[i-1][j] = grid[i][j];
                            grid[i][j] = rememb;

                            if(i!=1) i-=2;
                        }
                    }
                }
              
                
}	else if (direction === 3){
                for(var i=0;i<4;++i){ 
                    rememb=rememb_numb=log=0;
                    for(var j=0;j<4;++j){
                        if(grid[i][j]>0){
                            if(log===0){
                                rememb=grid[i][j];
                                log=1;
                                rememb_numb=j;
                            }else{
                                if(log===1 && rememb===grid[i][j]){
                                    grid[i][j]*=2;
                                    log=0;
                                    grid[i][rememb_numb] = -1;
                                    
                                }else{
                                    log=1;
                                    rememb=grid[i][j];
                                    rememb_numb=j;
                                }
                            }
                        }
                    }
                }
                for(var i=0;i<4;++i){ 
                    for(var j=1;j<4;++j){
                        if(grid[i][j-1]===-1 && grid[i][j]>0){
                            rememb = grid[i][j-1];
                            grid[i][j-1] = grid[i][j];
                            grid[i][j] = rememb;
                          
                            if(j!=1) j-=2;
                        }
                    }
                }
            
}	else if (direction === 4){
                for(var j=0;j<4;++j){ 
                    rememb=rememb_numb=log=0;
                    for(var i=3;i>-1;--i){
                        if(grid[i][j]>0){
                            if(log===0){
                                rememb=grid[i][j];
                                log=1;
                                rememb_numb=i;
                            }else{
                                if(log===1 && rememb===grid[i][j]){
                                    grid[i][j]*=2;
                                    log=0;
                                    grid[rememb_numb][j] = -1;
                                    
                                }else{
                                    log=1;
                                    rememb=grid[i][j];
                                    rememb_numb=i;
                                }
                            }
                        }
                    }
                }
                for(var j=0;j<4;++j){ 
                    for(var i=2;i>-1;--i){
                        if(grid[i+1][j]===-1 && grid[i][j]>0){
                            rememb = grid[i+1][j];
                            grid[i+1][j] = grid[i][j];
                            grid[i][j] = rememb;
               
                            if(i!=2) i+=2;
                        }
                    }
                }
          
                
}          	else if (direction === 2){
                for(var i=0;i<4;++i){ 
                    rememb=rememb_numb=log=0;
                    for(var j=3;j>-1;--j){
                        if(grid[i][j]>0){
                            if(log===0){
                                rememb=grid[i][j];
                                log=1;
                                rememb_numb=j;
                            }else{
                                if(log===1 && rememb===grid[i][j]){
                                    grid[i][j]*=2;
                                    log=0;
                                    grid[i][rememb_numb] = -1;
                                    
                                }else{
                                    log=1;
                                    rememb=grid[i][j];
                                    rememb_numb=j;
                                }
                            }
                        }
                    }
                }
                for(var i=0;i<4;++i){ 
                    for(var j=2;j>-1;--j){
                        if(grid[i][j+1]===-1 && grid[i][j]>0){
                            rememb = grid[i][j+1];
                            grid[i][j+1] = grid[i][j];
                            grid[i][j] = rememb;
                            
                            if(j!=2) j+=2;
                        }
                    }
                }
	}

	spawnRand();
	updateGrid();
	getScore();
}

function getScore() {
	var x, y, score;

	
	score = grid[0][0];
	for(y = 0; y < 4; y++) {
		for(x = 0; x < 4; x++) {
			
			if (grid[y][x]>score) score = grid[y][x];
		}
	}
	if (score === 2048) win();
	
	scoreElem.innerHTML = (score)  ;
	
}





// GAME OVER FUNCTIONS

function gameOver() {
	gridElem.setAttribute("class", "over");
	//console.log("LOL");
	alert("LOL!! GAME OVER");
}

// UTIL FUNCTIONS

function keyPress(code) {
	if(code === 37)
		moveGrid(3); // left
	else if(code === 38)
		moveGrid(1); // up
	else if(code === 39)
		moveGrid(2); // right
	else if(code === 40)
		moveGrid(4); // down
	else if(code === 13)
		init(); // reinit
}


function spawnRand() {
	var x, y, possibles = [];

	for(y = 0; y < 4; y++) {
		for(x = 0; x < 4; x++) {
			if(grid[y][x] === -1)
				possibles.push([x, y]);
		}
	}

	if(possibles.length) {
		var randomValue = (Math.floor(Math.random() * 9) === 8 ? 4 : 2),
			randomBlock = possibles[(Math.floor(Math.random() * possibles.length))],
			x = randomBlock[0],
			y = randomBlock[1];

		grid[y][x] = randomValue;
	} else {
		if(!checkMovable()) {
			gameOver();
		}
	}
}

function firstspawnRand() {
	var x, y, possibles = [];

	for(y = 0; y < 4; y++) {
		for(x = 0; x < 4; x++) {
			if(grid[y][x] === -1)
				possibles.push([x, y]);
		}
	}

	if(possibles.length) {
		var randomValue = 2,
			randomBlock = possibles[(Math.floor(Math.random() * possibles.length))],
			x = randomBlock[0],
			y = randomBlock[1];

		grid[y][x] = randomValue;
	} else {
		if(!checkMovable()) {
			gameOver();
		}
	}
}
	
function checkMovable() {
	for(y = 0; y < 4; y++) {
		for(x = 0; x < 4; x++) {
			if((grid[y + 1] !== undefined &&
					(grid[y + 1][x] === grid[y][x] || grid[y + 1][x] === -1)) ||
				 (grid[y][x + 1] !== undefined &&
				 	(grid[y][x + 1] === grid[y][x] || grid[y][x + 1] === -1)) ||
				  grid[y][x] === -1)
				return true;
		}
	}

	return false;
}


// INIT FUNCTIONS

function initScore() {
	score = 0;

	getScore();
}

function win(){
	
	gridElem.setAttribute("class", "WIN");
	//console.log("YOU WIN");
	alert("CONGRATULATIONS!! YOU WIN");
}



function initGrid() {
	grid = [[-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1], [-1, -1, -1, -1]];


	var x = Math.floor(Math.random() * 4);
	var y = Math.floor(Math.random() * 4);
	grid[x][y] = 1;
	firstspawnRand();
	firstspawnRand();

	updateGrid();
}

function init() {
	gridElem.removeAttribute("class");

	initScore();
	initGrid();
}

// INITIAL SETUP

document.onkeydown = function(e) { keyPress(e.keyCode); }

document.getElementsByTagName("header")[0].getElementsByTagName("a")[0].onclick = init;

touchElem.getElementsByTagName("div")[0].onclick = function() { moveGrid(1); }
touchElem.getElementsByTagName("div")[1].onclick = function() { moveGrid(3); }
touchElem.getElementsByTagName("div")[2].onclick = function() { moveGrid(2); }
touchElem.getElementsByTagName("div")[3].onclick = function() { moveGrid(4); }

initGrid();

