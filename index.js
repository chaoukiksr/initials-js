module.exports = function getInitials (fullname){
   return fullname.trim().split(" ").filter(word => word.length > 0).map(word=>word[0].toUpperCase()).join("");
}