
$(document).ready(function(){
	var check = false;
	$(document).on('keydown', handleEvent);
	
	if ( $('.grid').children().length == 0 ) {
		for(var i = 0; i < 5; i++){
			var column = document.createElement("DIV");
			column.id="0"+i;
			column.className ="line";
			document.getElementById("grid").appendChild(column);
		}
		for(var i = 0; i < 5; i++){
			var column = document.createElement("DIV");
			column.id="1"+i;
			column.className ="line";
			document.getElementById("grid").appendChild(column);
		}
		for(var i = 0; i < 5; i++){
			var column = document.createElement("DIV");
			column.id="2"+i;
			column.className ="line";
			document.getElementById("grid").appendChild(column);
		}
		for(var i = 0; i < 5; i++){
			var column = document.createElement("DIV");
			column.id="3"+i;
			column.className ="line";
			document.getElementById("grid").appendChild(column);
		}
		for(var i = 0; i < 5; i++){
			var column = document.createElement("DIV");
			column.id="4"+i;
			column.className ="line";
			document.getElementById("grid").appendChild(column);
		}
		
	}
	
	function handleEvent(event){
		console.log(event.which);
		switch(event.which){
			case 32://right
				getMove();
				break;
			case 39://right
				moveRight();
				break;
			case 40://down
				moveDown();
				break;
			case 37://left
				moveLeft();
				break;
			case 38://up
				moveUp();
				break;
		}
	}
	
	function reset(){
		$( ".line" ).each(function( index ) {
			if ($(this).css('background-image') != 'none') { 
				var x = $(this).attr('id');
				//$("#"+x).css('background-image') = ""; 
				$('#'+x).css('background', '');
			}
		});
	}
	
	function getMove(){
		var check = false;
		
		reset();
		
		while(!check){
			var input = prompt("Enter X,Y,F");
			var temp = input.split(',');
			var y = parseInt(temp[0]);
			if(temp[2] == 'w' || temp[2] == 'W'){
				if(temp[1] == '0'){
					alert("out of bounds");
				}
				else{
					document.getElementById(temp[0]+temp[1]).style.backgroundImage = "url('img/pacmanRightOpen.png')";
					document.getElementById(temp[0]+temp[1]).name = "pacmanRightOpen";
					document.getElementById(temp[0]+temp[1]).style.backgroundSize = "70px 70px";
					$(temp[0]+temp[0]+temp[1]).empty(); 
					check = true;
					setTimeout(function() {
						var s = parseInt(temp[1]);
						s--;
						document.getElementById(temp[0]+temp[1]).style.backgroundImage = "";
						document.getElementById(temp[0]+temp[1]).name = "";
						document.getElementById(y.toString()+s.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(y.toString()+s.toString()).name = "pacmanLeftClose";
						document.getElementById(y.toString()+s.toString()).style.backgroundSize = "70px 70px";
						alert(y.toString()+","+s.toString()+",WEST");	
					}, 1000);					
				}
			}
			else if(temp[2] == 'N' || temp[2] == 'n'){
				if(temp[0] =='0'){
					alert('out of bounds');
				}
				else{
					document.getElementById(temp[0]+temp[1]).style.backgroundImage = "url('img/pacmanRightOpen.png')";
					document.getElementById(temp[0]+temp[1]).name = "pacmanRightOpen";
					document.getElementById(temp[0]+temp[1]).style.backgroundSize = "70px 70px";
					$(temp[0]+temp[0]+temp[1]).empty(); 
					check = true;
					setTimeout(function() {
						y--;
						document.getElementById(temp[0]+temp[1]).style.backgroundImage = "";
						document.getElementById(temp[0]+temp[1]).name = "";
						document.getElementById(y+temp[1]).style.backgroundImage = "url('img/upRight.png')";
						document.getElementById(y+temp[1]).name = "upRight";
						document.getElementById(y+temp[1]).style.backgroundSize = "70px 70px"; 
						alert(y.toString()+","+temp[1]+",NORTH");	
					}, 1000);
				}
			}
			else if(temp[2] == 'E' || temp[2]=='e'){
				if(temp[1] == '4'){
					alert('out of bounds');
				}
				else{
					document.getElementById(temp[0]+temp[1]).style.backgroundImage = "url('img/pacmanRightOpen.png')";
					document.getElementById(temp[0]+temp[1]).name = "pacmanRightOpen";
					document.getElementById(temp[0]+temp[1]).style.backgroundSize = "70px 70px";
					alert(temp.length);
					check = true;
					setTimeout(function() {
						var s = parseInt(temp[1]);
						s++;
						document.getElementById(temp[0]+temp[1]).style.backgroundImage = "";
						document.getElementById(temp[0]+temp[1]).name = "";
						document.getElementById(y.toString()+s.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(y.toString()+s.toString()).name = "pacmanRightClose";
						document.getElementById(y.toString()+s.toString()).style.backgroundSize = "70px 70px"; 
						alert(y.toString()+","+s.toString()+",EAST");	
					}, 1000);
				}
			}
			else if(temp[2] == 's' || temp[2] == 'S'){
				if(temp[0] == '4'){
					alert('out of bounds');
				}
				else{
					document.getElementById(temp[0]+temp[1]).style.backgroundImage = "url('img/pacmanRightOpen.png')";
					document.getElementById(temp[0]+temp[1]).name = "pacmanRightOpen";
					document.getElementById(temp[0]+temp[1]).style.backgroundSize = "70px 70px"; 
					check = true;
					setTimeout(function() {
						y++;
						document.getElementById(temp[0]+temp[1]).style.backgroundImage = "";
						document.getElementById(temp[0]+temp[1]).name = "";
						document.getElementById(y.toString()+temp[1]).style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById(y.toString()+temp[1]).name = "downLeft";
						document.getElementById(y.toString()+temp[1]).style.backgroundSize = "70px 70px";
						alert(y.toString()+","+ temp[1]+",SOUTH");	
					}, 1000);
				}
			}
			else{
				alert("incorrct input");
			}
		}
	}
	
});