function build_Palindrome(new_str) {
    var flag;
    for (var i = new_str.length;; i++) {
      flag = true;
      for (var j = 0; j < i - j - 1; j++) {
        if (i - j - 1 < new_str.length && new_str[j] != new_str[i - j - 1]) {
          flag = false;
          break;
        }
      }
      if (flag) {
  
        for (var j = new_str.length; j < i; j++) {
          new_str += new_str[i - j - 1];
        }
        return new_str;
      }
    }
  }
  console.log(build_Palindrome("abcddc"))
  console.log(build_Palindrome("122"))
  console.log(build_Palindrome("15425542"))
  console.log(build_Palindrome("asdfkjhgfsda"))