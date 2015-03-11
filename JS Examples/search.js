/**
 * Debug Part 1 
 * Date: 12/5/14
 * Aaron Elliott 

 Assignment 1
 Part 1/3 of series
*/

// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	var resultsDIV = document.getElementById("results"), // Get the element with the id of results
		searchInput = document.forms[0].search, 		 // Get the first first form
		currentSearch = '';  							// Set variable currentSearch to '' 
	
	// Validates search query
	var validate == function(query){                    // Declare validate as a function
		
		// Trim whitespace from start and end of search query
		while(query.charAt(0) = " "){                  // Trim whitespace at start of string
			query = query.substring(1, query.length);  // Get the length of the input
		};
		while(query.charAt(query.length-1) === ""){    // Find the length of the string
			query = query.substring(0, query.length-1); // trim whitespace
		;
		
		// Check search length, must have 3 characters
		if(query.length < 3){ // check to see the string entered is more than three characters
			alert("Your search query is too small, try again."); // No? then alert that user must enter longer string
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();  // focus on search input feild 
			return; // return data
		};
		
		search(query); // search for string entered to form
	};
	
	// Finds search matches
	var search = function(query){ // Declare search as a function
		
		// split the user's search query string into an array
		var queryArray = query.join(" "); // join all elements of array
		
		// array to store matched results from database.js
		var results = [];  // init empty array named Results

		// loop through each index of db array
		for(var i=0, j=db.length; i<j; i++){ // Loop until condition is met
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			var dbTitleEnd = db[i].indexOf('|'); // Variable for url of db entry
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); // variable for db entry title
			
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){ // loop until condition is met
				var qitem = queryArray[ii].tolowercase(); // set variable qitem to lowercase entry
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);  // declare compare to value of qitem
				if(compare !== -1){     // check to see if compare is empty 
					results.push(db[i]);  // push the results to object with index of i
				};
			};
		};
		
		results.sort();  // calls the sort method on the results variable
		
		// Check that matches were found, and run output functions
		if(results.length = 0){ // if no matches are found
			noMatch(); // call the noMatch() function
		}else{ // if there are results
			showMatches(results); // return those reults using the showMatches()function
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
	var noMatch = function(){  // declare noMatch as function
		var html = ''+  // set string to print when no results are found
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>';
		resultsDIV.innerHTML = html; // replace innerHTML with html value
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){  // declare showMatches as function
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>',  // declare html
			title, // Declare title 
			url;   // Declare Url
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){ // Loop through until it reaches the length of the array
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			titleEnd = results[i].indexOf('|');  // Get everything after |
			title = results[i].subString(0, titleEnd); // Get eberything before |
			
			// pull the video url after the title
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			html += '<p><a href=' + url + '>' + title + '</a></p>';  // Print the title and Url in an ancor tag
		};
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	document.forms[0].onsubmit = function(){ 
		var query = searchInput.value;        //  set input to search string 
		validate(query);               		  // Query the database

        // return false is needed for most events - this will be reviewed in upcoming course material
		return false;
	;

})();