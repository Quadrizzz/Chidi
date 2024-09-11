const { faker }  = require('@faker-js/faker');
const fs = require('fs');

const departments = [
    "Department of Accounting",
    "Department of Actuarial Science and Insurance",
    "Department of Banking and Finance",
    "Department of Business Administration",
    "Department of Industrial Relations & Personnel Management"
];

const faculties = [];

for (let i = 0; i < 100; i++) {
  const isAcademic = i % 2 === 0; // Alternating between Academic and Non-Academic
  const department = isAcademic ? faker.helpers.arrayElement(departments) : "not a department";
  const reasonForInactive = faker.lorem.sentence(); // Ensure this is never empty

  faculties.push({
    ippis_no: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
    staff_no: faker.number.int({ min: 10000, max: 99999 }),
    title: faker.helpers.arrayElement(["Dr.", "Prof.", "Mr.", "Mrs.", "Miss"]),
    name: {
      surname: faker.person.lastName(),
      first_name: faker.person.firstName(),
      middle_name: faker.person.middleName(),
      maiden_name: faker.datatype.boolean() ? faker.person.lastName() : ""
    },
    date_of_birth: faker.date.past({ years: 60 }).toISOString().split('T')[0],
    present_age: faker.number.int({ min: 25, max: 70 }),
    retirement_age: 60,
    gender: faker.helpers.arrayElement(["male", "female"]),
    retirement_date: faker.date.future({ years: 20 }).toISOString().split('T')[0],
    marital_status: faker.helpers.arrayElement(["Married", "Single", "Divorced"]),
    country: "Nigeria",
    state_of_origin: faker.address.state(),
    lga: faker.address.city(),
    geo_politcal_zone: "South West",
    date_of_first_appointment: faker.date.past({ years: 30 }).toISOString().split('T')[0],
    data_of_present_appointment: faker.date.past({ years: 10 }).toISOString().split('T')[0],
    salary_structure: "CONUASS",
    gl: faker.number.int({ min: 1, max: 15 }),
    step: faker.number.int({ min: 1, max: 8 }),
    confirmation_date: faker.date.past({ years: 20 }).toISOString().split('T')[0],
    cadre: isAcademic ? "Lecturer" : "Administrative Staff",
    post_designation: isAcademic ? "Lecturer I" : "Admin Officer",
    faculty: "Management Science",
    department: department,
    nature: "Full-time",
    transfer_date: faker.date.past({ years: 5 }).toISOString().split('T')[0],
    qualification: isAcademic ? `PhD in ${department.split(' ')[1]}` : "BSc in Business Administration",
    phd: isAcademic,
    phone: faker.phone.number('+234##########'),
    home_address: faker.location.streetAddress(),
    status: faker.datatype.boolean(),
    reason_for_inactive: reasonForInactive,
    date_of_inactive: faker.date.past({ years: 2 }).toISOString().split('T')[0],
    pfa: "Pension Fund Administrator",
    pen_number: faker.number.int({ min: 10000000, max: 99999999 }).toString(),
    category: isAcademic ? "Academic" : "Non-Academic",
    campus: "Main Campus",
    leave_status: faker.datatype.boolean(),
    start_date: faker.date.past({ years: 1 }).toISOString().split('T')[0],
    end_date: faker.date.future({ years: 1 }).toISOString().split('T')[0],
    remarks: [faker.lorem.sentence(), faker.lorem.sentence()],
    resume: faker.date.past({ years: 1 }).toISOString().split('T')[0],
  });
}

fs.writeFileSync('arts_faculty_lecturers.json', JSON.stringify(faculties, null, 2), 'utf-8');

console.log("Faculty of Arts lecturers generated!");
