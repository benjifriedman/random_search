
	var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    	//would be cool to include !@#$%^&*()_+ as an option

    	//also numbers. even "number mode"

    	var searchPrefixes = {
    		"Duck Duck Go": "https://duckduckgo.com/?q=",
    		"Bing": "https://www.bing.com/search?q=",
    		"Baidu":"https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=",
    		"Google":"https://www.google.com/search?q=",
    		"Yahoo":"https://search.yahoo.com/search?p=",
    		"Yandex":"https://yandex.com/search/?text="
    	}


    	function run() {

    		var searchChoice = document.querySelector('input[name=search]:checked').value;

    		var numChoice = document.querySelector('input[name=num]:checked').value;

    		var searchPrefix = "";

    		switch (searchChoice) {
    			case 'ddg':
    			searchPrefix = searchPrefixes["Duck Duck Go"];
    			console.log("Duck Duck Go selected")
    			break;
    			case 'bing':
    			searchPrefix = searchPrefixes["Bing"];
    			break;
    			case 'baidu':
    			searchPrefix = searchPrefixes["Baidu"];
    			break;    			
    			case 'google':
    			searchPrefix = searchPrefixes["Google"];
    			break;    			
    			case 'yahoo':
    			searchPrefix = searchPrefixes["Yahoo"];
    			break;    			
    			case 'yandex':
    			searchPrefix = searchPrefixes["Yandex"];
    			break;    			
    		}

    		var results = [];

    		for (var i=0; i <10; i++) {

    			var first, second, third, fourth, fifth, sixth, seventh, eighth, ninth;

    			first = letterArray[Math.floor(Math.random()*letterArray.length)];
    			second = letterArray[Math.floor(Math.random()*letterArray.length)];
    			third = letterArray[Math.floor(Math.random()*letterArray.length)];
    			fourth = letterArray[Math.floor(Math.random()*letterArray.length)];
    			fifth = letterArray[Math.floor(Math.random()*letterArray.length)];
    			sixth = letterArray[Math.floor(Math.random()*letterArray.length)];
    			seventh = letterArray[Math.floor(Math.random()*letterArray.length)];
    			eighth = letterArray[Math.floor(Math.random()*letterArray.length)];
    			ninth = letterArray[Math.floor(Math.random()*letterArray.length)];

    			var word = ""

    			if (numChoice == "3") {
    				word = first+second+third;
    			} else if (numChoice == "5") {
    				word = first+second+third+fourth+fifth;
    			} else if (numChoice == "7") {
    				word = first+second+third+fourth+fifth+sixth+seventh;
    			} else if (numChoice == "9") {
    				word = first+second+third+fourth+fifth+sixth+seventh+eighth+ninth;
    			} 

    			results.push(word);

    			}//for loop

    		//console.log(results);

    		var resultDisplay = document.querySelector('#results');

    		var formattedEverything = "";

    		for (var i=0; i <10; i++) {

    			formattedEverything += "<p><a href='" + searchPrefix + ""+ results[i] +"' target='_blank'>"+ results[i] +"</a></p>";

    		}//for loop

    		resultDisplay.innerHTML = formattedEverything;

    	}//run function

    	function reload() {
    		window.location.reload(false);
    	}//reload
