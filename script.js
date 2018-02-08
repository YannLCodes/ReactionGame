
		var timeStart = Date.now();
		

		function playerTimer()
		{
			
			var timeEnd = Date.now();
			timeTaken = (timeEnd-timeStart) / 1000; //supposed to return secs to 1 dec point
			
			
			return timeTaken; 
			//return appears to be the final thing you should write
		}

		function getRandomColor() 
			{
			  var letters = '0123456789ABCDEF';
			  var color = '#';
			  for (var i = 0; i < 6; i++) {
			    color += letters[Math.floor(Math.random() * 16)];
			  }
			  return color;
			}


		function makeDisappear()

		{
			document.getElementById("yannButton").style.display="none";
		}

		function makeAppear()
		{
			//holds thde randomised value of position:top and position:left
			var top = Math.random() * 450;
			var left = Math.random() * 450;
			
			//holds thde randomised value of width and height
			var width = Math.random() * 450;
			var height = Math.random() * 450;

			
			//randomises position from top
			document.getElementById("yannButton").style.top = top +"px";

			//randomises position from left
			document.getElementById("yannButton").style.left = left +"px";
			
			//randomises width
			document.getElementById("yannButton").style.width = width +"px";

			//randomises heiht
			document.getElementById("yannButton").style.height = height +"px";

			//randomises colour

			document.getElementById("yannButton").style.backgroundColor = getRandomColor();

			//randomises shape/border radius

			if (Math.random() > 0.5)
				{
					document.getElementById("yannButton").style.borderRadius = "50%";
				}
			else		
				{
					document.getElementById("yannButton").style.borderRadius = "0%";
				}

			//makes shape appear
			document.getElementById("yannButton").style.display="block";
			timeStart=Date.now();	
		}


		
		
		function appearAfterDelay()
		{
			//Sets a random timing for the first appearance of the object
			setTimeout(function(){makeAppear();},Math.random()*1850);	
		}
		
		appearAfterDelay();

		document.getElementById("yannButton").onclick=function()
			{
				
				document.getElementById("timeTaken").innerHTML=playerTimer();
				makeDisappear();
				appearAfterDelay();		
			

			}
