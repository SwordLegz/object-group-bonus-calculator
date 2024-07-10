// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.





// This function will calculate 1 employee's bonus!
//
function calculateIndividualEmployeeBonus( employee ) {  
  // your logic here
  
  // No loop.
  // Check the rating and compare against the bonus percentage.
let bonusPercent = 0;

if (employee.reviewRating === 3) {
  bonusPercent += 4;
}
if (employee.reviewRating === 4) {
  bonusPercent += 6;
}
if (employee.reviewRating === 5) {
  bonusPercent += 10;
}
console.log(bonusPercent);

  // Check employee ID number length to determine if there will be an additional bonus.
if (employee.employeeNumber.length <= 4) {
  bonusPercent += 5
}

  // Check employee annual income and adjust to be within the min/max.

  if (employee.annualSalary > 65000) {
    bonusPercent -= 1
  }

  if (bonusPercent < 0) {
    bonusPercent = 0
  }

  if (bonusPercent > 13) {
    bonusPercent = 13
  }
    console.log(bonusPercent);

    let totalBonus = 
  // return new object with bonus results
  return {
    name: employee.name,
    bonusPercentage: bonusPercent,
  }

}
calculateIndividualEmployeeBonus( {
  name: 'Scout',
  employeeNumber: '6243',
  annualSalary: '74750',
  reviewRating: 5
});

calculateIndividualEmployeeBonus({
  name: 'Mayella',
  employeeNumber: '89068',
  annualSalary: '35000',
  reviewRating: 1
});