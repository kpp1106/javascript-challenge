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

var tbody = d3.select("tbody");

button.on("click", handleClick);


function populateGrid(dates, city, state, country, shape, duration, comments) {
    //var detail = d3.select(".table-area>ufo-table>tbody");
    //var detail = d3.select("#ufo-table");
    //detail.html(""); //remove data from the table from last search
    //var tbody = d3.select("tbody");

    var trow;
    for (var i = 0; i < dates.length; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(dates[i]);
        trow.append("td").text(city[i]);
        trow.append("td").text(state[i]);
        trow.append("td").text(country[i]);
        trow.append("td").text(shape[i]);
        trow.append("td").text(duration[i]);
        trow.append("td").text(comments[i]);

        console.log(trow);
    }
}


function handleClick() {
    console.log("Button was clicked");

    var tbody = d3.select("tbody");
    var inputElement = d3.select("#input");
    var inputValue = inputElement.property("value");

    //filtered data based on the date
    var filteredData = ufoData.filter(row => row.datetime === inputValue ||
        row.city === inputValue ||
        row.state === inputValue ||
        row.country === inputValue);

    console.log(filteredData.length);
    //Reading each column from the tableData
    var dates = filteredData.map(row => row.datetime);
    var city = filteredData.map(row => row.city);
    var state = filteredData.map(row => row.state);
    var country = filteredData.map(row => row.country);
    var shape = filteredData.map(row => row.shape);
    var duration = filteredData.map(row => row.durationMinutes);
    var comments = filteredData.map(row => row.comments);

    tbody.html("");

    populateGrid(dates, city, state, country, shape, duration, comments);
}
