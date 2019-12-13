


var userPasswordLength = prompt('enter a number between 8 and 128')

console.log(userPasswordLength)
for (var i = userPasswordLength; userPasswordLength < 8 || userPasswordLength > 128; userPasswordLength = prompt('enter a number between 8 and 128')) {
    alert('not smaller then 8 or greater then number 128')
}

var wantSpecialCharacter = confirm('Do you want a special Character?')

console.log(wantSpecialCharacter)

var wantNumberCharacter = confirm('Do you wants a Number?')

console.log(wantNumberCharacter)

var wantLowerCaseCharacter = confirm('Would you like a lower case letter?')

console.log(wantLowerCaseCharacter)

var wantUppercaseCharacter = confirm('Would you also like an upper case letter?')

console.log(wantUppercaseCharacter)