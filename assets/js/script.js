var apiKey = "982a46fdbb24ea3ccb3549d3d6910ee6";
var savedSearches = [];

//list previously searched cities
var searchHistoryList = function(cityName) {
    $('.past-search:contains("' + cityName + '")').remove();

// create entry with city name
    var searchHistoryEntry = $("<p>");
        searchHistoryEntry.addClass("past-search");
        searchHistoryEntry.text(cityName);

// create container for entry
    var searchEntryContainer = $("<div>");
    searchEntryContainer.addClass("past-search-container");
       // append entry to container
    searchEntryContainer.append(searchHistoryEntry);

       // append entry container to search history container
    var searchHistoryContainerEl = $("#search-history-container");
    searchHistoryContainerEl.append(searchEntryContainer);

    if (savedSearches.length > 0){
        // update savedSearches array w/previously saved searches
        var previousSavedSearches = localStorage.getItem("savedSearches");
        savedSearches = JSON.parse(previousSavedSearches);
    }

    // add city name to savedSearches array
    savedSearches.push(cityName);
    localStorage.setItem("savedSearches", JSON.stringify(savedSearches));

    // resetting search input
    $("#search-input").val("");
    
};