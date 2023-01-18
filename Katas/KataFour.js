    // Use the name.length function and compare the names in the array.
    // Loop through the array and compare length of each
    // return the name and course for the instructors


const instructorWithLongestName = function(instructors) {
    let nameGame = 0;
    let longest = "";

    for (const firstName of instructors) {
        if (firstName.name.length >= nameGame) {
            nameGame = firstName.name.length;
            longest = firstName;
        }
    }
 return longest;
};


console.log(instructorWithLongestName([
    {name: "Samuel", course: "iOS"},
    {name: "Jeremiah", course: "Web"},
    {name: "Ophilia", course: "Web"},
    {name: "Donald", course: "Web"}
  ]));
  console.log(instructorWithLongestName([
    {name: "Matthew", course: "Web"},
    {name: "David", course: "iOS"},
    {name: "Domascus", course: "Web"}
  ]));

  //expected Output
  //{name: "Jeremiah", course: "Web"}
  //{name: "Domascus", course: "Web"}