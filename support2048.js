// JavaScript Document

/**
	初始化行和列，输入i为top，输入j为left
**/
function getPos(i){
	return i*120+20;
}

function getColor(num){
	var color = new Array;
	var bg = "";
	var textcolor = "";
	switch(num){
		case 2: bg = "orange";
				textcolor="#ffffff";
				break;
		case 4: bg = "#eee4da";
				textcolor="orange";
				break;
		case 8: bg = "orange";
				textcolor="#ffffff";
				break;
		case 16: bg = "#eee4da";
				textcolor="orange";
				break;
		case 32: bg = "orange";
				textcolor="#ffffff";
				break;
		case 64: bg = "#eee4da";
				textcolor="orange";
				break;
		case 128: bg = "orange";
				textcolor="#ffffff";
				break;	
		case 256: bg = "#eee4da";
				textcolor="orange";
				break;	
		case 512: bg = "orange";
				textcolor="#ffffff";
				break;	
		case 1024: bg = "#eee4da";
				textcolor="orange";
				break;	
		case 2048: bg = "orange";
				textcolor="#ffffff";
				break;	
		case 4096: bg = "#eee4da";
				textcolor="orange";
				break;	
		case 8192: bg = "orange";
				textcolor="#ffffff";
				break;
	}
	color[0] = bg;
	color[1] = textcolor;
	return color;
	
}

function noSpace(board){
	for (var i = 0; i < 4; i++)
		for (var j = 0; j < 4; j++)
			if (board[i][j]==0)
				return false;
				
	return true;
}

function showNum(i,j,num){
	var cell = $('#cellNumber-'+i+j);
	cell.css({'background-color':getColor(num)[0],
				'color':getColor(num)[1]
			});
	cell.text(num);
	cell.animate({'width':'100px',
				'height':'100px',
				'top':getPos(i),
				'left':getPos(j)
	},80);
}

function noMove(board){
	if (canMoveUp( board ) || canMoveDown( board )
	|| canMoveLeft( board ) || canMoveRight( board ))
		return false;
		
	return true;

}

function isGameOver(){
	if (noSpace(board) && noMove(board)){
		alert("Game is Over!");
	}

}