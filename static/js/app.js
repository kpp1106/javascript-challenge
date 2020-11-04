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

//Reading each column from the tableData
var datesFromTableData = tableData.map(dataColumn => dataColumn.datetime)
var cityFromTableData = tableData.map(dataColumn => dataColumn.city)
var stateFromTableData = tableData.map(dataColumn => dataColumn.state)
var countryFromTableData = tableData.map(dataColumn => dataColumn.country)
var shapeFromTableData = tableData.map(dataColumn => dataColumn.shape)
var commentsFromTableData = tableData.map(dataColumn => dataColumn.comments)
//var scores = students.map(student => student.score)
console.log(stateFromTableData)

var dateValue = document.getElementById("datetime").dateValue;
console.log(dateValue)

var dateMatchFromScreen = tableData.filter(dataColumn => { dataColumn.datetime == date })
console.log(stateFromTableData)
console.log(datesFromTableData)
console.log(cityFromTableData)
console.log(commentsFromTableData)