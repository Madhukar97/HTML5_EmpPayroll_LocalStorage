window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.name-error');
  name.addEventListener('input', function () {
    if (name.value.length == 0) {
      textError.textContent = "";
      return;
    }
    try {
      (new EmployeePayrollData()).name = name.value;
      textError.textContent = "";
    } catch (e) {
      textError.textContent = e;
    }
  });

  const salary = document.querySelector('#salary');
  const output = document.querySelector('.salary-output');
  salary.addEventListener('input', function () {
    output.textContent = salary.value;
  });

  const month = document.querySelector('#month');
  const year = document.querySelector('#year');
  const day = document.querySelector('#day');
  const dateError = document.querySelector('.date-error');
  month.addEventListener('input', function () {
    try {
      new EmployeePayrollData().startDate = new Date(document.querySelector('#day').value + ' ' + document.querySelector('#month').value + ' ' +
        document.querySelector('#year').value);
      dateError.textContent = '';
    } catch (e) {
      dateError.textContent = e;
    }
  });
  day.addEventListener('input', function () {
    try {
      new EmployeePayrollData().startDate = new Date(document.querySelector('#day').value + ' ' + document.querySelector('#month').value + ' ' +
        document.querySelector('#year').value);
      dateError.textContent = '';
    } catch (e) {
      dateError.textContent = e;
    }
  });
  year.addEventListener('input', function () {
    try {
      new EmployeePayrollData().startDate = new Date(document.querySelector('#day').value + ' ' + document.querySelector('#month').value + ' ' +
        document.querySelector('#year').value);
      dateError.textContent = '';
    } catch (e) {
      dateError.textContent = e;
    }
  });

});
const save = () => {
  try {
    let employeePayrollData = createEmployeePayroll();
  } catch (e) {
    return;
  }
}

const createEmployeePayroll = () => {
  let employeePayrollData = new EmployeePayrollData();
  try {
    employeePayrollData.name = document.querySelector('#name').value;
    createAndUpdateStorage(employeePayrollData);
  } catch (e) {
    setTextValue('.name-error', e);
    throw e;
  }
  employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
  employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
  employeePayrollData.department = getSelectedValues('[name=department]');
  employeePayrollData.salary = document.querySelector('#salary').value;
  employeePayrollData.note = document.querySelector('#notes').value;
  let date = document.querySelector('#day').value + ' ' + document.querySelector('#month').value + ' ' +
    document.querySelector('#year').value;
  employeePayrollData.startDate = new Date(date);
  alert(employeePayrollData.toString());
  return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
  let allItems = document.querySelectorAll(propertyValue);
  let selItems = [];
  allItems.forEach(item => {
    if (item.checked) selItems.push(item.value);
  });
  return selItems;
}

function createAndUpdateStorage(employeePayrollData){

  let employeePayrollList = JSON.parse(localStorage.getItem('EmployeePayrollList'));

  if(employeePayrollList != undefined) {
    employeePayrollList.push(employeePayrollData);
  }else {
    employeePayrollList = [employeePayrollData]
  }
  alert(employeePayrollList.toString());
  localStorage.setItem('EmployeePayrollList', JSON.stringify(employeePayrollList))
}


