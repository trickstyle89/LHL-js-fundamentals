const talkingCalendar = function(date) {
    let humanDate = {
      year: "",
      month: "",
      day: ""
    }
  
    for (let i = 0; i < date.length; i++){
      if(i >= 0 && i < 4){
        humanDate.year += date[i];
      }
      else if(i > 4 && i < 7){
        humanDate.month += date[i];
      }
      else if (i > 7){
        humanDate.day += date[i];
      }
    }
  
    switch(humanDate.month){
      case '01':
        humanDate.month = "January";
        break;
      case '02':
        humanDate.month = "February";
        break;
      case "03":
        humanDate.month = "March";
        break;
      case "04":
        humanDate.month = "April";
        break;
      case "05":
        humanDate.month = "May";
        break;
      case "06":
        humanDate.month = "June";
        break;
      case "07":
        humanDate.month = "July";
        break;
      case "08":
        humanDate.month = "August";
        break;
      case "09":
        humanDate.month = "September";
        break;
      case "10":
        humanDate.month = "October";
        break;
      case "11":
        humanDate.month = "November";
        break;
      case '12':
        humanDate.month = "December";
        break;
      default:
        console.log("Error: Incorrect input.");
        return;
    }
    switch (humanDate.day){
      case '01':
        humanDate.day = '1st';
        break;
      case '02':
        humanDate.day = '2nd';
        break;
      case '03':
        humanDate.day = "3rd";
        break;
      case '21' && '31':
        humanDate.day += "st";
        break;
      case '22':
        humanDate.day += "nd";
        break;
      case '23':
        humanDate.day += "rd";
        break;
      default:
        humanDate.day += 'th';
    }
    return humanDate.month + " " + humanDate.day +", "+humanDate.year;
  };
  
  console.log(talkingCalendar("2017/12/01"));
  console.log(talkingCalendar("2007/11/11"));
  console.log(talkingCalendar("1987/08/24"));