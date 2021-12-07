class EmployeePayrollData {

  get name() { 
      return this._name; 
  }
  set name(name){ 
      let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
      if(nameRegex.test(name)) 
          this._name = name;
      else throw "Name is Incorrect";
  }

  get profilePic() {
      return this._profilePic;
  }
  set profilePic(profilePic){
      this._profilePic = profilePic;
  }

  get id() {
      return this._id;
  }
  set id(id){
      if(id>0) this._id = id;
      else throw "ID is not valid"
  }

  get salary() {
      return this._salary;
  }
  set salary(salary){
      if(salary>0) this._salary = salary;
      else throw "Salary is not valid"
  }

  get department() {
      return this._department;
  }
  set department(department){
      this._department = department;
  }

  get note() {return this._note;}
  set note(note){
      this._note = note;
  }

  get gender() {
      return this._gender;
  }
  set gender(gender){
      this._gender = gender;
  }

  get startDate() {
      return this._startDate;
  }
  set startDate(startDate){
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const empDate = startDate == undefined ? 'undefined' :
                      startDate.toLocaleDateString('en-US', options);
      let previous = new Date();
      previous.setDate(previous.getDate() - 30);
      if((new Date(empDate)<=new Date()) && new Date(empDate)>=previous)
          this._startDate = empDate;
      else throw "Invalid Date"
  }

  toString(){
      return "id : "+this.id+", name : "+this.name+", salary : "+this.salary+", gender : "+this.gender+
      ", date : "+this.startDate+", profilepic : "+this.profilePic+", department : "+this.department+", note : "+this.note;
  }
}
let obj = new EmployeePayrollData();
try{
  obj.startDate = new Date('1/5/2021');
  console.log(obj);
}catch (e){
  console.error(e);
}


const save = () => {
  try{
      let employeePayrollData = new EmployeePayrollData(); 
      alert(employeePayrollData.toString());
  }catch (e){
      return;
  }
}