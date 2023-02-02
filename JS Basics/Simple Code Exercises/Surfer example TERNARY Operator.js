/* Pro or KOOK? 
* Pro = Right Board size = 'True' + Experience ='True'
* Experienced = Right Board size = 'True' + Experience ='False'
* Beginner = Right Board size = 'False' + Experience ='True'
* Kook = Right Board size = 'False' + Experience ='False'
*/

var board = false;
var experience = false;

var surfer = board ? (experience ? "You are a Pro" : "You are seasoned") : (experience ? "You are a beginner" : "You are a KOOK");

console.log (surfer)