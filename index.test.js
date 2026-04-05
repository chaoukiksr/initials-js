const {getInitials,getInitialsArray} = require('./index.js');

test("gets initials from two names", ()=>{
   expect(getInitials("John Doe")).toBe("JD");
});

test("gets initials from three names", () => {
   expect(getInitials("John Doe Mark")).toBe("JDM");
});

test("handles extra spaces", () => {
   expect(getInitials("    John Doe    Mark  ")).toBe("JDM");
});

test("uppercasing letters", () => {
   expect(getInitials("john doe  ")).toBe("JD");
});

test("reutrn one letter for a name that has one part", () => {
   expect(getInitials("alex")).toBe("A");
});

test("reutrn empty string from an empty string input", () => {
   expect(getInitials("")).toBe("");
});

// getInitialsArrays

test("return an array of initials", ()=>{
   expect(getInitialsArray(["John Doe", "Kessouri Chaouki"])).toStrictEqual(["JD","KC"]);
})

test("handle an empty stirng in an array name list", ()=>{
   expect(getInitialsArray(["", "Kessouri Chaouki"])).toStrictEqual(["KC"]);
})

test("filters out whitespace-only names", ()=>{
   expect(getInitialsArray(["     ", "Kessouri Chaouki"])).toStrictEqual(["KC"]);
})