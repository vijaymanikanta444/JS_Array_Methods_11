const companies = [
    {name:"Company One", category: "Finance", start: "1980", end: "2004"},
    {name:"Company Two", category: "Retail", start: "1998", end: "2004"},
    {name:"Company Three", category: "Auto", start: "1956", end: "1999"},
    {name:"Company Four", category: "Retail", start: "1962", end: "1990"},
    {name:"Company Five", category: "Technology", start: "1997", end: "2000"},
    {name:"Company Six", category: "Finance", start: "1982", end: "1992"},
    {name:"Company Seven", category: "Auto", start: "1975", end: "2010"},
    {name:"Company Eight", category: "Technology", start: "2000", end: "2015"},
    {name:"Company Nine", category: "Retail", start: "2003", end: "2004"},
    {name:"Company Ten", category: "Technology", start: "1925", end: "1988"}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//for
// for(let i = 0; i< companies.length; i++){
//     console.log(companies[i]);
// }


//for each
// companies.forEach(function(company){
//     console.log(company.name, company.category, company.start, company.end);
// })

//filter

// age 21 and older

// let canDrink = []
// for(let i = 0; i < ages.length; i++){
//  if(ages[i] >= 21){
//      canDrink.push(ages[i])
//  }
// }

// const canDrink = ages.filter(function(age){
//     if(age >= 21){
//         return true;
//     }

// })

// const canDrink = ages.filter(age => age >= 21);
    
// filterv retail category

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true ;
//     }
// });

// const retailCompanies = companies.filter(company => company.category === 'Retail');

// get 80s companies

//const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990 ));

// get companies of span 10 years

// const  lastedTenYears = companies.filter(company => (company.end - company.start > 10 ));

// console.log(lastedTenYears);


//map
// craeate array of company names

// const companyNames = companies.map(function(company){
//     return company.name
// });
 
// const companyNames = companies.map(company => company.name);

// const testMap = companies.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`
// });

// const testMap = companies.map(company =>  `${company.name} [${company.start} - ${company.end}]`
// );

// const agesqrt = ages.map(age => Math.sqrt(age));


// console.log(ageSqrt);

//sort

// const sortCompanies = companies.sort(function ( c1, c2 ){   
//     if(c1.start > c2.start){
//         return 1;
//     }else {
//         return -1;
//     }
// });

// const sortCompanies = companies.sort((a,b)=> (a.start > b.start ? 1 : -1));

// const sortAges = ages.sort(function(a,b){
//     if(a > b){
//         return 1;
//     }else {
//         return -1;
//     }
// });

// const sortAges = ages.sort((a,b)=> (a > b ? 1 : -1));

// const sortAges = ages.sort((a,b) => a - b);

// console.log(sortAges);

//reduce

// let ageSum = 0;
// for(i = 0; i < ages.length; i++) {
//     ageSum += ages[i];
// }

// const ageSum = ages.reduce(function(total, age){
//     return total + age
// }, 0);

// const ageSum = ages.reduce((total, age) => total + age , 0)

// total years of companies
// const totalYears = companies.reduce(function(total, company){
//     return total + (company.end - company.start)
// }, 0)

// const totalYears = companies.reduce((total, company)=> total + (company.end - company.start) , 0 );

// console.log(totalYears);

// combine 

const combine = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a,b)=> a-b)
    .reduce((a,b)=> a+b, 0);

    
console.log(combine);