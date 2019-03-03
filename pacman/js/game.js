
$(document).ready(function(){
	$(document).on('keydown', handleEvent);
	
	if ( $('.grid').children().length == 0 ) {
		for(var i = 1; i < 65; i++){
			var column = document.createElement("DIV");
			var dot = document.createElement("IMG");
			dot.src = "img/dot.png";
			column.id=i;
			column.className ="row";
			column.appendChild(dot);
			column.name = "dot";
			document.getElementById("grid").appendChild(column);
		}
		$("#1").empty(); 
		document.getElementById("1").style.backgroundImage = "url('img/pacmanRightOpen.png')";
		document.getElementById("1").name = "pacmanRightOpen";
		document.getElementById("1").style.backgroundSize = "70px 70px";
		document.getElementById("1").style.borderBottom = "1px solid red";
		document.getElementById("6").style.borderBottom = "1px solid red"; 
		document.getElementById("7").style.backgroundColor = "black"; 
		document.getElementById("8").style.borderBottom = "1px solid red"; 
		document.getElementById("9").style.bottom = "1px solid red"; 
		document.getElementById("11").style.borderBottom = "1px solid red"; 
		document.getElementById("12").style.backgroundColor = "black"; 
		document.getElementById("15").style.borderBottom = "1px solid red";
		document.getElementById("17").style.backgroundColor = "black"; 
		document.getElementById("18").style.borderBottom = "1px solid red";
		document.getElementById("21").style.borderBottom = "1px solid red"; 
		document.getElementById("22").style.backgroundColor = "black"; 
		document.getElementById("24").style.borderBottom = "1px solid red";
		document.getElementById("25").style.borderBottom = "1px solid red";
		document.getElementById("27").style.borderBottom = "1px solid red";
		document.getElementById("28").style.backgroundColor = "black"; 
		document.getElementById("30").style.borderBottom = "1px solid red";
		document.getElementById("33").style.borderBottom = "1px solid red";
		document.getElementById("36").style.borderBottom = "1px solid red";
		document.getElementById("37").style.backgroundColor = "black";
		document.getElementById("40").style.borderBottom = "1px solid red";
		document.getElementById("44").style.borderBottom = "1px solid red";
		document.getElementById("45").style.backgroundColor = "black";
		document.getElementById("46").style.borderBottom = "1px solid red";
		document.getElementById("49").style.borderBottom = "1px solid red";
		document.getElementById("51").style.borderBottom = "1px solid red";
		document.getElementById("56").style.borderBottom = "1px solid red";
		document.getElementById("58").style.backgroundColor = "black";
		setMove1();
	}
	
	function setMove1(){
		document.getElementById("1").style.backgroundImage = "";
		document.getElementById("1").name = "";
		document.getElementById("2").style.backgroundImage = "url('img/pacmanRightClosed.png')";
		document.getElementById("2").name = "pacmanRightClose";
		document.getElementById("2").style.backgroundSize = "70px 70px";
		$("#2").empty(); 
		alert("0,0,NORTH");
	}
	
	function handleEvent(event){
		switch(event.which){
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
	
	function moveRight(){
		var i = 0;
		$( ".row" ).each(function( index ) {
			if ($(this).css('background-image') != 'none') {
				if(this.id > 0 && this.id < 9){
					i = parseInt(this.id);
					i++;
					if(i > 8){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanRightOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(i.toString()).name = "pacmanRightClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					else{
						$("#"+i.toString()).empty(); 
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightOpen.png')";
						document.getElementById(i.toString()).name = "pacmanRightOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";						
					}
					return false;
				}
				if(this.id > 8 && this.id < 17){
					i = parseInt(this.id);
					i++;
					if(i > 16){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					} 
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanRightOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(i.toString()).name = "pacmanRightClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 						
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightOpen.png')";
						document.getElementById(i.toString()).name = "pacmanRightOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";		
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 16 && this.id < 25){
					i = parseInt(this.id);
					i++;
					if(i > 24){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanRightOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(i.toString()).name = "pacmanRightClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightOpen.png')";
						document.getElementById(i.toString()).name = "pacmanRightOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 24 && this.id < 33){
					i = parseInt(this.id);
					i++;
					if(i > 32){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanRightOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(i.toString()).name = "pacmanRightClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightOpen.png')";
						document.getElementById(i.toString()).name = "pacmanRightOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 32 && this.id < 41){
					i = parseInt(this.id);
					i++;
					if(i > 40){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanRightOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(i.toString()).name = "pacmanRightClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightOpen.png')";
						document.getElementById(i.toString()).name = "pacmanRightOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 40 && this.id < 49){
					i = parseInt(this.id);
					i++;
					if(i > 48){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanRightOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(i.toString()).name = "pacmanRightClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightOpen.png')";
						document.getElementById(i.toString()).name = "pacmanRightOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 48 && this.id < 57){
					i = parseInt(this.id);
					i++;
					if(i > 56){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanRightOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(i.toString()).name = "pacmanRightClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightOpen.png')";
						document.getElementById(i.toString()).name = "pacmanRightOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id >56  && this.id < 65){
					i = parseInt(this.id);
					i++;
					if(i > 64){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanRightOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightClosed.png')";
						document.getElementById(i.toString()).name = "pacmanRightClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanRightOpen.png')";
						document.getElementById(i.toString()).name = "pacmanRightOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
			}
		});
	}
	
	function moveLeft(){
		var i = 0;
		$( ".row" ).each(function( index ) {
			if ($(this).css('background-image') != 'none') {
				if(this.id > 1 && this.id < 9){
					i = parseInt(this.id);
					i--;
					if(i < 1){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanLeftOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(i.toString()).name = "pacmanLeftClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftOpen.png')";
						document.getElementById(i.toString()).name = "pacmanLeftOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 8 && this.id < 17){
					i = parseInt(this.id);
					i--;
					if(i < 9){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanLeftOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(i.toString()).name = "pacmanLeftClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftOpen.png')";
						document.getElementById(i.toString()).name = "pacmanLeftOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 16 && this.id < 25){
					i = parseInt(this.id);
					i--;
					if(i < 17){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanLeftOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(i.toString()).name = "pacmanLeftClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftOpen.png')";
						document.getElementById(i.toString()).name = "pacmanLeftOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 24 && this.id < 33){
					i = parseInt(this.id);
					i--;
					if(i < 25){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanLeftOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(i.toString()).name = "pacmanLeftClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftOpen.png')";
						document.getElementById(i.toString()).name = "pacmanLeftOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 32 && this.id < 41){
					i = parseInt(this.id);
					i--;
					if(i < 33){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanLeftOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(i.toString()).name = "pacmanLeftClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftOpen.png')";
						document.getElementById(i.toString()).name = "pacmanLeftOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 40 && this.id < 49){
					i = parseInt(this.id);
					i--;
					if(i < 41){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanLeftOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(i.toString()).name = "pacmanLeftClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftOpen.png')";
						document.getElementById(i.toString()).name = "pacmanLeftOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 48 && this.id < 57){
					i = parseInt(this.id);
					i--;
					if(i < 49){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanLeftOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(i.toString()).name = "pacmanLeftClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftOpen.png')";
						document.getElementById(i.toString()).name = "pacmanLeftOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
				if(this.id > 56 && this.id < 65){
					i = parseInt(this.id);
					i--;
					if(i < 57){
						return false;
					}
					if(document.getElementById(i.toString()).style.backgroundColor == "black"){
						return false;
					}
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById(this.id).name == "pacmanLeftOpen"){
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftClosed.png')";
						document.getElementById(i.toString()).name = "pacmanLeftClose";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";
						$("#"+i.toString()).empty(); 
					}
					else{
						document.getElementById(i.toString()).style.backgroundImage = "url('img/pacmanLeftOpen.png')";
						document.getElementById(i.toString()).name = "pacmanLeftOpen";
						document.getElementById(i.toString()).style.backgroundSize = "70px 70px";	
						$("#"+i.toString()).empty(); 
					}
					return false;
				}
			}
		});
	}
	
	function moveUp(){
		$( ".row" ).each(function( index ) {
			if ($(this).css('background-image') != 'none') {
				if(this.id == "9"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('1').name == "upRight"){
						document.getElementById('1').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('1').name = "upRight";
						document.getElementById('1').style.backgroundSize = "70px 70px";
						$("#1").empty(); 
					}
					else{
						document.getElementById('1').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('1').name = "upRight";
						document.getElementById('1').style.backgroundSize = "70px 70px";
						$("#1").empty(); 
					}
					return false;
				}
			}
			if ($(this).css('background-image') != 'none') {
				if(this.id == "9"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('1').name == "upRight"){
						document.getElementById('1').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('1').name = "upRight";
						document.getElementById('1').style.backgroundSize = "70px 70px";
						$("#1").empty(); 
					}
					else{
						document.getElementById('1').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('1').name = "upRight";
						document.getElementById('1').style.backgroundSize = "70px 70px";
						$("#1").empty(); 
					}
					return false;
				}
				if(this.id == "14"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('6').name == "upRight"){
						document.getElementById('6').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('6').name = "upRight";
						document.getElementById('6').style.backgroundSize = "70px 70px";
						$("#6").empty(); 
					}
					else{
						document.getElementById('6').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('6').name = "upRight";
						document.getElementById('6').style.backgroundSize = "70px 70px";	
						$("#6").empty();
					}
					return false;
				}
				if(this.id == "16"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('8').name == "upRight"){
						document.getElementById('8').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('8').name = "upRight";
						document.getElementById('8').style.backgroundSize = "70px 70px";	
						$("#8").empty();
					}
					else{
						document.getElementById('8').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('8').name = "upRight";
						document.getElementById('8').style.backgroundSize = "70px 70px";
						$("#8").empty();
					}
					return false;
				}
				if(this.id == "19"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('11').name == "upRight"){
						document.getElementById('11').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('11').name = "upRight";
						document.getElementById('11').style.backgroundSize = "70px 70px";	
						$("#11").empty(); 
					}
					else{
						document.getElementById('11').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('11').name = "upRight";
						document.getElementById('11').style.backgroundSize = "70px 70px";
						$("#11").empty();
					}
					return false;
				}
				if(this.id == "23"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('15').name == "upRight"){
						document.getElementById('15').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('15').name = "upRight";
						document.getElementById('15').style.backgroundSize = "70px 70px";	
						$("#15").empty(); 
					}
					else{
						document.getElementById('15').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('15').name = "upRight";
						document.getElementById('15').style.backgroundSize = "70px 70px";	
						$("#15").empty();; 
					}
					return false;
				}
				if(this.id == "26"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('18').name == "upRight"){
						document.getElementById('18').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('18').name = "pacmanLeftClose";
						document.getElementById('18').style.backgroundSize = "70px 70px";	
						$("#18").empty();
					}
					else{
						document.getElementById('18').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('18').name = "pacmanLeftOpen";
						document.getElementById('18').style.backgroundSize = "70px 70px";	
						$("#18").empty(); 
					}
					return false;
				}
				if(this.id == "29"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('21').name == "upRight"){
						document.getElementById('21').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('21').name = "pacmanLeftClose";
						document.getElementById('21').style.backgroundSize = "70px 70px";
						$("#21").empty(); 
					}
					else{
						document.getElementById('21').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('21').name = "pacmanLeftOpen";
						document.getElementById('21').style.backgroundSize = "70px 70px";
						$("#21").empty(); 
					}
					return false;
				}
				if(this.id == "32"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('24').name == "upRight"){
						document.getElementById('24').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('24').name = "pacmanLeftClose";
						document.getElementById('24').style.backgroundSize = "70px 70px";
						$("#24").empty(); 
					}
					else{
						document.getElementById('24').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('24').name = "pacmanLeftOpen";
						document.getElementById('24').style.backgroundSize = "70px 70px";	
						$("#24").empty(); 
					}
					return false;
				}
				if(this.id == "33"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('25').name == "upRight"){
						document.getElementById('25').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('25').name = "pacmanLeftClose";
						document.getElementById('25').style.backgroundSize = "70px 70px";	
						$("#25").empty();
					}
					else{
						document.getElementById('25').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('25').name = "pacmanLeftOpen";
						document.getElementById('25').style.backgroundSize = "70px 70px";	
						$("#25").empty(); 
					}
					return false;
				}
				if(this.id == "35"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('27').name == "upRight"){
						document.getElementById('27').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('27').name = "pacmanLeftClose";
						document.getElementById('27').style.backgroundSize = "70px 70px";	
						$("#27").empty(); 
					}
					else{
						document.getElementById('27').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('27').name = "pacmanLeftOpen";
						document.getElementById('27').style.backgroundSize = "70px 70px";
						$("#27").empty(); 
					}
					return false;
				}
				if(this.id == "38"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('30').name == "upRight"){
						document.getElementById('30').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('30').name = "pacmanLeftClose";
						document.getElementById('30').style.backgroundSize = "70px 70px";
						$("#30").empty(); 
					}
					else{
						document.getElementById('30').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('30').name = "pacmanLeftOpen";
						document.getElementById('30').style.backgroundSize = "70px 70px";	
						$("#30").empty(); 
					}
					return false;
				}
				if(this.id == "41"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('33').name == "upRight"){
						document.getElementById('33').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('33').name = "pacmanLeftClose";
						document.getElementById('33').style.backgroundSize = "70px 70px";	
						$("#33").empty();
					}
					else{
						document.getElementById('33').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('33').name = "pacmanLeftOpen";
						document.getElementById('33').style.backgroundSize = "70px 70px";	
						$("#33").empty(); 
					}
					return false;
				}
				if(this.id == "44"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('36').name == "upRight"){
						document.getElementById('36').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('36').name = "pacmanLeftClose";
						document.getElementById('36').style.backgroundSize = "70px 70px";	
						$("#36").empty();
					}
					else{
						document.getElementById('36').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('36').name = "pacmanLeftOpen";
						document.getElementById('36').style.backgroundSize = "70px 70px";	
						$("#36").empty(); 
					}
					return false;
				}
				if(this.id == "48"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('40').name == "upRight"){
						document.getElementById('40').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('40').name = "pacmanLeftClose";
						document.getElementById('40').style.backgroundSize = "70px 70px";	
						$("#40").empty();
					}
					else{
						document.getElementById('40').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('40').name = "pacmanLeftOpen";
						document.getElementById('40').style.backgroundSize = "70px 70px";	
						$("#40").empty(); 
					}
					return false;
				}
				if(this.id == "52"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('44').name == "upRight"){
						document.getElementById('44').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('44').name = "pacmanLeftClose";
						document.getElementById('44').style.backgroundSize = "70px 70px";	
						$("#44").empty();
					}
					else{
						document.getElementById('44').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('44').name = "pacmanLeftOpen";
						document.getElementById('44').style.backgroundSize = "70px 70px";	
						$("#44").empty(); 
					}
					return false;
				}
				if(this.id == "54"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('46').name == "upRight"){
						document.getElementById('46').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('46').name = "pacmanLeftClose";
						document.getElementById('46').style.backgroundSize = "70px 70px";	
						$("#46").empty();
					}
					else{
						document.getElementById('46').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('46').name = "pacmanLeftOpen";
						document.getElementById('46').style.backgroundSize = "70px 70px";	
						$("#46").empty(); 
					}
					return false;
				}
				if(this.id == "57"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('49').name == "upRight"){
						document.getElementById('49').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('49').name = "pacmanLeftClose";
						document.getElementById('49').style.backgroundSize = "70px 70px";	
						$("#49").empty();
					}
					else{
						document.getElementById('49').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('49').name = "pacmanLeftOpen";
						document.getElementById('49').style.backgroundSize = "70px 70px";	
						$("#49").empty(); 
					}
					return false;
				}
				if(this.id == "59"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('51').name == "upRight"){
						document.getElementById('51').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('51').name = "pacmanLeftClose";
						document.getElementById('51').style.backgroundSize = "70px 70px";	
						$("#51").empty();
					}
					else{
						document.getElementById('51').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('51').name = "pacmanLeftOpen";
						document.getElementById('51').style.backgroundSize = "70px 70px";	
						$("#51").empty(); 
					}
					return false;
				}
				if(this.id == "64"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('56').name == "upRight"){
						document.getElementById('56').style.backgroundImage = "url('img/upLeft.png')";
						document.getElementById('56').name = "pacmanLeftClose";
						document.getElementById('56').style.backgroundSize = "70px 70px";	
						$("#56").empty();
					}
					else{
						document.getElementById('56').style.backgroundImage = "url('img/upRight.png')";
						document.getElementById('56').name = "pacmanLeftOpen";
						document.getElementById('56').style.backgroundSize = "70px 70px";	
						$("#56").empty(); 
					}
					checkStaus();
					return false;
				}
			}
		});
	}
	
	function moveDown(){
		$( ".row" ).each(function( index ) {
			if ($(this).css('background-image') != 'none') {
				if(this.id == "1"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('9').name == "downRight"){
						document.getElementById('9').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('9').name = "pacmanLeftClose";
						document.getElementById('9').style.backgroundSize = "70px 70px";
						$("#9").empty();
					}
					else{
						document.getElementById('9').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('9').name = "pacmanLeftOpen";
						document.getElementById('9').style.backgroundSize = "70px 70px";
						$("#9").empty(); 
					}
					return false;
				}
				if(this.id == "6"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('14').name == "downRight"){
						document.getElementById('14').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('14').name = "pacmanLeftClose";
						document.getElementById('14').style.backgroundSize = "70px 70px";
						$("#14").empty();
					}
					else{
						document.getElementById('14').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('14').name = "pacmanLeftOpen";
						document.getElementById('14').style.backgroundSize = "70px 70px";	
						$("#14").empty(); 
					}
					return false;
				}
				if(this.id == "8"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('16').name == "downRight"){
						document.getElementById('16').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('16').name = "pacmanLeftClose";
						document.getElementById('16').style.backgroundSize = "70px 70px";
						$("#16").empty(); 
					}
					else{
						document.getElementById('16').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('16').name = "pacmanLeftOpen";
						document.getElementById('16').style.backgroundSize = "70px 70px";
						$("#16").empty(); 
					}
					return false;
				}
				if(this.id == "11"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('19').name == "downRight"){
						document.getElementById('19').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('19').name = "pacmanLeftClose";
						document.getElementById('19').style.backgroundSize = "70px 70px";	
						$("#19").empty(); 
					}
					else{
						document.getElementById('19').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('19').name = "pacmanLeftOpen";
						document.getElementById('19').style.backgroundSize = "70px 70px";	
						$("#19").empty(); 
					}
					return false;
				}
				if(this.id == "15"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('23').name == "downRight"){
						document.getElementById('23').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('23').name = "pacmanLeftClose";
						document.getElementById('19').style.backgroundSize = "70px 70px";	
						$("#23").empty();
					}
					else{
						document.getElementById('23').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('23').name = "pacmanLeftOpen";
						document.getElementById('23').style.backgroundSize = "70px 70px";	
						$("#23").empty(); 
					}
					return false;
				}
				if(this.id == "18"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('26').name == "downRight"){
						document.getElementById('26').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('26').name = "pacmanLeftClose";
						document.getElementById('26').style.backgroundSize = "70px 70px";
						$("#26").empty(); 
					}
					else{
						document.getElementById('26').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('26').name = "pacmanLeftOpen";
						document.getElementById('26').style.backgroundSize = "70px 70px";	
						$("#26").empty(); 
					}
					return false;
				}
				if(this.id == "21"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('29').name == "downRight"){
						document.getElementById('29').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('29').name = "pacmanLeftClose";
						document.getElementById('29').style.backgroundSize = "70px 70px";	
						$("#29").empty(); 
					}
					else{
						document.getElementById('29').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('29').name = "pacmanLeftOpen";
						document.getElementById('29').style.backgroundSize = "70px 70px";
						$("#29").empty(); 
					}
					return false;
				}
				if(this.id == "24"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('32').name == "downRight"){
						document.getElementById('32').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('32').name = "pacmanLeftClose";
						document.getElementById('32').style.backgroundSize = "70px 70px";
						$("#32").empty(); 
					}
					else{
						document.getElementById('32').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('32').name = "pacmanLeftOpen";
						document.getElementById('32').style.backgroundSize = "70px 70px";	
						$("#32").empty(); 
					}
					return false;
				}
				if(this.id == "25"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('33').name == "downRight"){
						document.getElementById('33').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('33').name = "pacmanLeftClose";
						document.getElementById('33').style.backgroundSize = "70px 70px";
						$("#33").empty(); 
					}
					else{
						document.getElementById('33').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('33').name = "pacmanLeftOpen";
						document.getElementById('33').style.backgroundSize = "70px 70px";
						$("#33").empty(); 
					}
					return false;
				}
				if(this.id == "27"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('35').name == "downRight"){
						document.getElementById('35').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('35').name = "pacmanLeftClose";
						document.getElementById('35').style.backgroundSize = "70px 70px";	
						$("#35").empty(); 
					}
					else{
						document.getElementById('35').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('35').name = "pacmanLeftOpen";
						document.getElementById('35').style.backgroundSize = "70px 70px";	
						$("#35").empty(); 
					}
					return false;
				}
				if(this.id == "30"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('38').name == "downRight"){
						document.getElementById('38').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('38').name = "pacmanLeftClose";
						document.getElementById('38').style.backgroundSize = "70px 70px";
						$("#38").empty(); 
					}
					else{
						document.getElementById('38').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('38').name = "pacmanLeftOpen";
						document.getElementById('38').style.backgroundSize = "70px 70px";	
						$("#38").empty(); 
					}
					return false;
				}
				if(this.id == "33"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('41').name == "downRight"){
						document.getElementById('41').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('41').name = "pacmanLeftClose";
						document.getElementById('41').style.backgroundSize = "70px 70px";	
						$("#41").empty(); 
					}
					else{
						document.getElementById('41').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('41').name = "pacmanLeftOpen";
						document.getElementById('41').style.backgroundSize = "70px 70px";
						$("#41").empty(); 
					}
					return false;
				}
				if(this.id == "36"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('44').name == "downRight"){
						document.getElementById('44').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('44').name = "pacmanLeftClose";
						document.getElementById('44').style.backgroundSize = "70px 70px";	
						$("#44").empty(); 
					}
					else{
						document.getElementById('44').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('44').name = "pacmanLeftOpen";
						document.getElementById('44').style.backgroundSize = "70px 70px";
						$("#44").empty(); 
					}
					return false;
				}
				if(this.id == "40"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('48').name == "downRight"){
						document.getElementById('48').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('48').name = "pacmanLeftClose";
						document.getElementById('48').style.backgroundSize = "70px 70px";	
						$("#48").empty(); 
					}
					else{
						document.getElementById('48').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('48').name = "pacmanLeftOpen";
						document.getElementById('48').style.backgroundSize = "70px 70px";
						$("#48").empty(); 
					}
					return false;
				}
				if(this.id == "44"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('52').name == "downRight"){
						document.getElementById('52').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('52').name = "pacmanLeftClose";
						document.getElementById('52').style.backgroundSize = "70px 70px";	
						$("#52").empty(); 
					}
					else{
						document.getElementById('52').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('52').name = "pacmanLeftOpen";
						document.getElementById('52').style.backgroundSize = "70px 70px";
						$("#52").empty(); 
					}
					return false;
				}
				if(this.id == "46"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('54').name == "downRight"){
						document.getElementById('54').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('54').name = "pacmanLeftClose";
						document.getElementById('54').style.backgroundSize = "70px 70px";	
						$("#54").empty(); 
					}
					else{
						document.getElementById('54').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('54').name = "pacmanLeftOpen";
						document.getElementById('54').style.backgroundSize = "70px 70px";
						$("#54").empty(); 
					}
					return false;
				}
				if(this.id == "49"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('57').name == "downRight"){
						document.getElementById('57').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('57').name = "pacmanLeftClose";
						document.getElementById('57').style.backgroundSize = "70px 70px";	
						$("#57").empty(); 
					}
					else{
						document.getElementById('57').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('57').name = "pacmanLeftOpen";
						document.getElementById('57').style.backgroundSize = "70px 70px";
						$("#57").empty(); 
					}
					return false;
				}
				if(this.id == "51"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('59').name == "downRight"){
						document.getElementById('59').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('59').name = "pacmanLeftClose";
						document.getElementById('59').style.backgroundSize = "70px 70px";	
						$("#59").empty(); 
					}
					else{
						document.getElementById('59').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('59').name = "pacmanLeftOpen";
						document.getElementById('59').style.backgroundSize = "70px 70px";
						$("#59").empty(); 
					}
					return false;
				}
				if(this.id == "56"){
					document.getElementById(this.id).name = "";
					document.getElementById(this.id).style.backgroundImage = "";
					if(document.getElementById('64').name == "downRight"){
						document.getElementById('64').style.backgroundImage = "url('img/downLeft.png')";
						document.getElementById('64').name = "pacmanLeftClose";
						document.getElementById('64').style.backgroundSize = "70px 70px";	
						$("#64").empty(); 
					}
					else{
						document.getElementById('64').style.backgroundImage = "url('img/downRight.png')";
						document.getElementById('64').name = "pacmanLeftOpen";
						document.getElementById('64').style.backgroundSize = "70px 70px";
						$("#64").empty(); 
					}
					return false;
				}
			}
		});
	}
	
});