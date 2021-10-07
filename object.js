const students = [
    {id:21, name: 'Tom', phone: 1240455477},
    {id:24, name: 'tommy', phone: 1240455455},
    {id:26, name: 'Tarun', phone: 1240455466},
    {id:23, name: 'Taohid', phone: 1240455444},
    {id:22, name: 'Tamim', phone: 1240455433},
    {id:25, name: 'Tarek', phone: 1240455422}
];

const sNames = [];
for(let i = 0; i < students.length; i++){
    const object = students[i];
    const objectName = object.name;
    sNames.push(objectName);
};
console.log(sNames);

const sNames1 = students.map( student => student.name);
console.log(sNames1);
const sNameFilter = students.filter(student => student.name !== 'Tom');
const sName2 = students.find(s => s.id > 22);
console.log(sName2);


// if({}){

//     console.log("I am not false")

// }

// else{

//     console.log("I am false")

// }