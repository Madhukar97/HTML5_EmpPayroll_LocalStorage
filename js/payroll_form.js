window.addEventListener('DOMContentLoaded', (event) => {
  const name = document.querySelector('#name');
  const textError = document.querySelector('.name-error');
  name.addEventListener('input',function() {
      if(name.value.length == 0){
          textError.textContent = "";
          return;
      }
      try {
          (new EmployeePayrollData()).name = name.value;
          textError.textContent = "";
      }catch (e) {
          textError.textContent = e;
      }
  });

  const salary = document.querySelector('#salary');
  const output = document.querySelector('.salary-output');
  salary.addEventListener('input',function(){
      output.textContent=salary.value;
  });
})

