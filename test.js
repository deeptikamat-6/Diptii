
const students = [
 { id: 1, name: "Amit Sharma", age: 20, course: "Computer Science", marks: 85, feesPaid: true },
 { id: 2, name: "Priya Singh", age: 22, course: "Information Technology", marks: 92, feesPaid: false },
 { id: 3, name: "Ravi Kumar", age: 19, course: "Electronics", marks: 76, feesPaid: true },
 { id: 4, name: "Neha Verma", age: 21, course: "Mechanical", marks: 88, feesPaid: true },
 { id: 5, name: "Sohan Lal", age: 23, course: "Civil Engineering", marks: 65, feesPaid: false },
 { id: 6, name: "Anjali Mehta", age: 20, course: "Computer Science", marks: 95, feesPaid: true },
 { id: 7, name: "Vikas Gupta", age: 22, course: "Information Technology", marks: 58, feesPaid: false },
 { id: 8, name: "Pooja Mishra", age: 19, course: "Mechanical", marks: 80, feesPaid: true },
 { id: 9, name: "Rajesh Khanna", age: 21, course: "Electronics", marks: 70, feesPaid: false },
 { id: 10, name: "Sneha Kapoor", age: 22, course: "Civil Engineering", marks: 90, feesPaid: true }
 ];

 let a=students.map (students=>students.name
	);
 console.log(a);

 const stu=[
	{ name:"Amit Sharma", course:"Computer Science"},
	{ name:"Priya Singh", course:"Information Technology"},
	{ name:"Ravi Kumar", course:"Electronics"},
	{ name:"Neha Verma", course:"Mechanical"},
	{ name:"Sohan Lal", course:"Civil Engineering"},
	{ name:"Anjali Mehta", course:"Computer Science"},
	{ name:"Vikas Gupta", course:"Information Technology"},
    { name:"Pooja Mishra", course:"Mechanical"},
	{ name:"Rajesh Khanna", course:"Electronics"},
	{ name:"Sneha Kapoor", course:"Civil Engineering"},
 ];

 const update=students.map (students=> {
	return {...students,status: students.marks>=60? "Pass" : "Fail"};
 } );
 console.log(update);

const arr = students.map(s=> `${s.name}-${s.course}`);
console.log(arr);

const nmarks=students.map(el=> {
	return{...el,marks:el.marks+5};
});
console.log(nmarks);

const ucourse=students.filter(el =>
	(el.course=="Computer Science")
);
console.log(ucourse);

const hmarks=students.filter(el=> el.marks>80);
console.log(hmarks);

const fees=students.filter(el=> el.feesPaid==false);
console.log(fees);

const ages=students.filter(el=> (el.age>20 && el.marks>70));
console.log(ages);

const cm=students.filter(el=> (el.course=="Mechanical" && el.marks<85));
console.log(cm);

let mar=students.reduce((sum,s) => sum+s.marks,0);
console.log(mar);

let avg=students.reduce((av,s) => (av+s.marks),0);
avg=avg/10;
console.log(avg);

let fc=students.reduce((count,s)=>count+(s.feesPaid==1),0);
console.log(fc);

let max=students.reduce((acc,s)=>s.marks>acc?s.marks:acc,0);
console.log(max);

