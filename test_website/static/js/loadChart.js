
ajax({
  url: "/habit_tracker/data/filter-options/",
  type: "GET",
  dataType: "json",
  success: (jsonResponse) => {
    // Load all the options
    jsonResponse.options.forEach(option => {
      $("#year").append(new Option(option, option));
    });
  },
  error: () => console.log("Failed to fetch chart filter options!")
});
