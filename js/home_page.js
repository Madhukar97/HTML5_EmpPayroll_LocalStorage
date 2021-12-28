let empPayrollList;

window.addEventListener('DOMContentLoaded', (event) => {
  if (site_properties.use_local_storage.match("true")) {
    getEmployeePayrollDataFromStorage();
  } else getEmployeePayrollDataFromJSONServer();
});

const processEmployeeCountDataResponse = () => {
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
  localStorage.removeItem('editEmp');
}

const getEmployeePayrollDataFromStorage = () => {
  empPayrollList = localStorage.getItem('EmployeePayrollList') ? JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
  processEmployeeCountDataResponse();
}

const getEmployeePayrollDataFromJSONServer = () => {
  makeServiceCall("GET", site_properties.server_url, true)
    .then(responseText => {
      empPayrollList = JSON.parse(responseText);
      processEmployeeCountDataResponse();
    })
    .catch(error => {
      console.log("GET Error Status: " + JSON.stringify(error));
      empPayrollList = [];
      processEmployeeCountDataResponse();
    });
}

const createInnerHtml = () => {
  const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
    "<th>Salary</th><th>StartDate</th><th>Actions</th>";
  let innerHtml = `${headerHtml}`;
  if (empPayrollList.length != 0) {
    for (const empPayrollData of empPayrollList) {
      innerHtml = `${innerHtml}
    <tr>
    <td class="profile"><img alt="" src="${empPayrollData._profilePic}">
    </td>
    <td>${empPayrollData._name}</td>
    <td>${empPayrollData._gender}</td>
    <td>${getDeptHtml(empPayrollData._department)}</td>
    <td>${empPayrollData._salary}</td>
    <td>${empPayrollData._startDate}</td>
    <td>
      <img class="buttons" id="${empPayrollData.id}" onclick="remove(this)" src="../assets/icons/delete-black-18dp.svg" alt="delete">
      <img class="buttons" id="${empPayrollData.id}" onclick="update(this)" src="../assets/icons/create-black-18dp.svg" alt="edit">
    </td>
  </tr>
    `;
    }
  }
  document.querySelector('#table-display').innerHTML = innerHtml;
}

const getDeptHtml = (deptList) => {
  let deptHtml = '';
  for (const dept of deptList) {
    deptHtml = `${deptHtml} <div class='dept-label'>${dept}</div>`
  }
  return deptHtml;
}

const remove = (node) => {
  let empPayrollData = empPayrollList.find(empData => empData.id == node.id);
  if (!empPayrollData) return;
  const index = empPayrollList
    .map(empData => empData.id)
    .indexOf(empPayrollData.id);
  console.log(index);
  empPayrollList.splice(index, 1);
  localStorage.setItem("EmployeePayrollList", JSON.stringify(empPayrollList));
  document.querySelector(".emp-count").textContent = empPayrollList.length;
  createInnerHtml();
}

const update = (node) => {
  const empPayrollData = empPayrollList.find(empData => empData.id == node.id);
  if (!empPayrollData) return;
  localStorage.setItem("editEmp", JSON.stringify(empPayrollData))
  window.location.replace(site_properties.add_emp_payroll_page)
}