let a = 5;
for (let i = 0; i<a; i++){
    console.log(i);
}

let obj = {
    name : "Harry",
    roll : "Programmer",
    company : "cwh"
};
for (const key in obj) {
    const element = obj[key];
    console.log(key, element);
}

for (const c of "Harry") {
    console.log(c);
}