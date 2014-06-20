// JavaScript Document
//面向过程设计

var board = new Array();
var flag = new Array();
var score = 0;

$(document).ready(function(){
	newGame();
});

function newGame(){
	//初始化棋盘
	init();
	//随机产生数字
	initNum();
	initNum();
}

function init(){
	
	
	for (var i = 0; i < 4; i++)
		for (var j = 0; j < 4; j++){
			//初始化网格
			var gridCell = $("#cell-" + i + j);
			gridCell.css({'top':getPos(i),'left':getPos(j)});
			//gridCell.css('left',getPos(j));		
		}
		board = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
		
	updateBoardView();
	score = 0;
	updateScore(score);
}

function updateBoardView(){
	$(".cellNumber").remove();
	for (var i = 0; i < 4; i++)
		for (var j = 0; j < 4; j++){
			$("#container").append('<div class="cellNumber" id="cellNumber-' + i + j +'"></div>');
			var temp = $('#cellNumber-' + i + j);
			var num = board[i][j]
			if (num==0){
				temp.css({'width':'0px',
						'height':'0px',
						'top':getPos(i) + 50,
						'left':getPos(j) + 50});
			}else{
				temp.css({	'top':getPos(i),
							'left':getPos(j),
							'background-color':getColor(num)[0],
							'color':getColor(num)[1]
						});				
				temp.text(board[i][j]);
			}
		}
}

function initNum(){
	if (noSpace(board))
		return false;
		
	//产生随机位置
	var randi = parseInt(Math.floor(Math.random()*4));
	var randj = parseInt(Math.floor(Math.random()*4));
	
	while(board[randi][randj]!=0){
		randi = parseInt(Math.floor(Math.random()*4));
		randj = parseInt(Math.floor(Math.random()*4));
	}
	
	//产生随机数
	var randNum = Math.random()<0.5?2:4;
	//随机位置产生随机数
	board[randi][randj] = randNum;
	showNum(randi,randj,randNum);	
}

$(document).keydown(function(event){	
	
	switch(event.keyCode){
		case 37: //left
			if(moveLeft()){
				setTimeout("initNum()",250);
				setTimeout("isGameOver()",300);
			}
			break;
		case 38: //up
			if(moveUp()){
				setTimeout("initNum()",250);
				setTimeout("isGameOver()",300);
			}
			break;
		case 39: //right
			if(moveRight()){
				setTimeout("initNum()",250);
				setTimeout("isGameOver()",300);
			}
			break;
		case 40://down
			if(moveDown()){
				setTimeout("initNum()",250);
				setTimeout("isGameOver()",300);
			}
			break;
		default:
			break;
	}
});

function updateScore(score){
	$('#score').text(score);	
}

