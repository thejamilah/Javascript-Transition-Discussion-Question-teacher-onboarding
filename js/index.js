// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))
//
// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
//   $('#foreground').fadeOut(interval);
// }

//const is binding of assignment and can't be reassigned
const saveLincoln = document.getElementById('save_lincoln')
const timeIinterval = document.getElementById('interval')
const foregroundFade = document.getElementById('foreground')
let lincolnMessage = document.getElementById('hidden-message')
