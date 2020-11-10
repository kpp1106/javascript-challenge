// from data.js
var tableData = data;
/*
    Read from the table and populate each column into each array
    Use filter function to match the variable entered to data in the table
    Retreive the table based on the input and populate the grid
*/
// YOUR CODE HERE!
var dateFromtableData = tableData.map(function (data) {
    return data.dateFromTable;
    console.log(data.dateFromTable)
})

var ufoData = data;



// Read Button Click and handle populating the grid
var button = d3.select("#filter-btn");

button.on("click", handleClick);


function handleClick() {
    console.log("Button was clicked");

    var inputElement = d3.select("#datetime.form-control");
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    //filtered data based on the date
    var filteredData = ufoData.filter(row => row.datetime == inputValue);

    console.log(filteredData);

    //Reading each column from the tableData
    var dates = filteredData.map(row => row.datetime)
    var city = filteredData.map(row => row.city)
    var state = filteredData.map(row => row.state)
    var country = filteredData.map(row => row.country)
    var shape = filteredData.map(row => row.shape)
    var duration = filteredData.map(row => row.durationMinutes);
    var comments = filteredData.map(row => row.comments)

    var detail = d3.select(".table-area>ufo-table>tbody");
    console.log(detail);
    detail.html(""); //remove data from the table from last search

    detail.append("th").text(filteredData);
    console.log(filteredData);

}

