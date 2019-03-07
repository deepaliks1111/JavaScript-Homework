// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
//var $stateInput = document.querySelector("#state")
var $searchBtn = document.querySelector("#filter-btn");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredUFO to addressData initially
var filteredUFO = tableData;

// renderTable renders the filteredUFO to the tbody
function renderTable(data) {
  $tbody.innerHTML = "";
  console.log("render is happening")

  for (var i = 0; i < data.length; i++) {
    
    // Get get the current sighting object and its fields
    var sighting = data[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick(Event) {
  Event.preventDefault()
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim();
  console.log (filterDate)
  //var filterState = $stateInput.value.trim().toLowerCase();
  var filteredUFO2 = tableData;
  if (filterDate){
    // filteredUFO = filteredUFO.filter(function(sighting) {
    //   var sightingDate = sighting.datetime;
    //        sightingDate === filterDate;
    //      });
    filteredUFO2 = filteredUFO2.filter(sighting => sighting.datetime === filterDate);
    console.log (filteredUFO2)
    renderTable(filteredUFO2);
  }

  if (filterState){
    // filteredUFO = filteredUFO.filter(function(sighting) {
    //   var sightingDate = sighting.datetime;
    //        sightingDate === filterDate;
    //      });
    filteredUFO2 = filteredUFO2.filter(sighting => sighting.State === filterState);
    console.log (filteredUFO2)
    renderTable(filteredUFO2);
  }

  // else {
  //   filteredUFO2 = dataSet
  // }
  // if (filterState.length != 0){
  //   filteredUFO = filteredUFO.filter(function(sighting) {
  //     var sightingState = sighting.state;
  //      return sightingState === filterState;
  //        });
  // }
  // else {
  //   filteredUFO = filteredUFO
  // }
  
}

// Render the table for the first time on page load
renderTable(tableData);


// Render the table for the first time on page load
