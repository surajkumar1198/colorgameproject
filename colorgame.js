var numSquares=6
var colors=pickRandomColor(numSquares)
var h1=document.querySelector("h1")
var square=document.getElementsByClassName("square")
var message= document.getElementById("message")
var easyBtn=document.querySelector("#easyBtn")
var hardBtn=document.querySelector("#hardBtn")
var playButton=document.getElementById("playButton")
var colorPicked=pickColor(); 
var colorDisplay=document.querySelector("#colorDisplay")
playButton.addEventListener("click",function(){
	//generate all new colors
	colors=pickRandomColor(numSquares);
	//pick a new random color from array
	colorPicked=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=colorPicked;
	this.textContent ="NEW COLORS"
	message.textContent="";
	//change color of squares
	for(var i=0;i<square.length;i++){
		 square[i].style.background=colors[i];
	}
	h1.style.background="steelblue";



})
easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	numSquares=3
	colors=pickRandomColor(numSquares);
	colorPicked=pickColor();
	colorDisplay.textContent=colorPicked;
	for(var i=0;i<square.length;i++)
	{
		if(colors[i])
		{
			square[i].style.background=colors[i];
		}
		else{
			square[i].style.display="none";
		}
	} 
})
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected")
	hardBtn.classList.add("selected")
	numSquares=6;
	colors=pickRandomColor(numSquares);
	colorPicked=pickColor();
	colorDisplay.textContent=colorPicked;
	for(var i=0;i<square.length;i++)
	{

			square[i].style.background=colors[i];
		
			square[i].style.display="block"
	} 
})
colorDisplay.textContent=colorPicked
for(var i=0;i<colors.length;i++)
{   
    //add color to square 
	square[i].style.background=colors[i];
	//add clickListener to colors
	square[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor===colorPicked)
		{  
			message.textContent="correct"
		    changeColor(clickedColor); 
		    playButton.textContent="PLAY AGAIN?"
		}
		else
		{  
		   this.style.background="#232323"
		   message.textContent="Try Again"
		}
	});
}
function changeColor(color){
	for(var j=0;j<square.length;j++){
		   	square[j].style.background=color;
		   }
		   h1.style.background=color;
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length) 
    return colors[random];
}
function pickRandomColor(num){
	var arr=[]
	
    for (var i=0;i<num;i++){
    	arr.push(randomColor());
    }
  
	  return arr;
}
function randomColor( ){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}