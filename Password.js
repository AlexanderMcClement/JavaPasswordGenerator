


var userPasswordLength = prompt('enter a number between 8 and 128')

console.log(userPasswordLength)

for (var i = userPasswordLength; userPasswordLength < 8 || userPasswordLength > 128; userPasswordLength = prompt('enter a number between 8 and 128')) {
    alert('not smaller then 8 or greater then number 128')
}