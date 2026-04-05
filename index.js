function getInitials (fullname){
   return fullname.trim().split(" ").filter(word => word.length > 0).map(word=>word[0].toUpperCase()).join("");
}

function getInitialsArray(array){
   return array.filter(word => word.trim().length > 0).map(word => getInitials(word));
}

module.exports = {getInitials,getInitialsArray}