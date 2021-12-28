const stringifyDate = (date) => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const newDate = !date ? 'undefined' : new Date(Date.parse(date).toLocaleString('en-GB', options));
  return newDate;
}

const checkName = (name) => {
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if (!nameRegex.test(name)) throw "Name is Incorrect";
}

const checkStartDate = (startDate) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const empDate = startDate == undefined ? 'undefined' :
      startDate.toLocaleDateString('en-US', options);
    let previous = new Date();
    previous.setDate(previous.getDate() - 30);
    if (!(new Date(empDate) <= new Date()) || !(new Date(empDate) >= previous)){
    throw "Invalid Date: should be within 30 days of joining."
    }
}