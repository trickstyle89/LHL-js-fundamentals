const talkingCalendar = function(date) {
    // Your code here

        let dateObject = new Date(date);
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: '2-digit'
        }).format(dateObject);
      }
  
  console.log(talkingCalendar("2017/12/02"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));

// Output 
//December 2nd, 2017
//November 11th, 2007
//August 24th, 1987