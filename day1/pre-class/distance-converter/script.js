// App Details
var TITLE = "Distance Converter";
var RATING = "Base"
var DESCRIPTION = "Convert user input distance from kilometres to miles";

// Program
function main(input) {
  return convertKmToMiles(input);
}

function convertKmToMiles(distanceInKm) {
  var distanceInMiles = distanceInKm * 0.62;
  return `${distanceInKm} km is equal to ${distanceInMiles} miles.`;
};