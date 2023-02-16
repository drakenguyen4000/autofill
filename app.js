//Define baseline
document.body.innerHTML = `<div id='container'></div>`;
document.body.style.boxSizing = " border-box";
document.body.style.padding = "0";
document.body.style.margin = "0";
//Create & style container
const container = document.querySelector("#container");
container.style.height = "700px";
container.style.width = "1000px";
container.style.border = "solid 1px lightgrey";
container.style.backgroundColor = "white";

//Setup form
container.innerHTML = `<form action="" method="get" id="userForm" class="form">
<div class="form-group">
  <label for="fname">First Name: </label>
  <input type="text" name="fname" id="fname" required>
</div>
<div class="form-group">
    <label for="mname">Middle Name: </label>
    <input type="text" name="mname" id="lname">
</label>
</div>
<div class="form-group">
  <label for="lname">Last Name: </label>
  <input type="text" name="lname" id="lname" required>
</div>
<div class="form-group">
    <label for="email">Email:</label>
    <input type="email" name="email" id="email" required>
</div>
<div class="form-group">
    <label for="phone">Phone Number:</label>
    <input type="tel"  id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
</div>
<div class="form-group">
  <label for="address">Address:</label>
  <input type="text" id="address" name="address">
</div>
<div class="form-group">
  <label for="city">City:</label>
  <input type="text" id="city" name="city">
</div>
<div class="form-group">
  <label for="postcode">Postal Code:</label>
  <input type="value" id="postcode" name="postcode">
</div>
<div class="form-group">
  <label for="state">State:</label>
  <input type="value" id="state" name="state">
</div>
<div class="form-group">
  <label for="country">Country:</label>
  <input type="value" id="country" name="country">
</div>
<div class="form-group">
  <input type="submit" value="Submit!" id="submit-btn">
</div>
</form>`;

//Stylize form
const form = document.querySelector(".form");
form.style.margin = "5%";
form.style.padding = "5%";
form.style.border = "1px solid lightgray";
form.style.fontWeight = "600";

//Stylize Form Items
let formGroup, i;
formGroup = document.querySelectorAll(".form-group");
for (i = 0; i < formGroup.length; ++i) {
  formGroup[i].style.display = "grid";
  formGroup[i].style.margin = "10px";
  formGroup[i].style.gridTemplateColumns = "15% 500px";
}

//Stylize input fields
// let inputfield, j;
// inputfield = document.getElementsByTagName("input");
// for (j = 0; j < inputfield.length - 1; ++j) {
//   inputfield[j].style.width = "50%";
// }

//Store User Submitted data in JSON
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  var object = {};
  formData.forEach((value, key) => (object[key] = value));
  var json = JSON.stringify(object);
  console.log(json);
});


//================Work Day Form=========================//
//Define baseline
document.body.innerHTML += `<div id='container2'></div>`;
document.body.style.boxSizing = " border-box";
document.body.style.padding = "0";
document.body.style.margin = "0";
//Create & style container2
const container2 = document.querySelector("#container2");
container2.style.height = "700px";
container2.style.width = "1000px";
container2.style.border = "solid 1px lightgrey";
container2.style.backgroundColor = "white";

//Setup form - Workday
container2.innerHTML = `<form action="" method="get" id="Work-Form" class="css-7t35fz">
<h3>Workday</h3>
<div data-automation-id="formField-legalNameSection_firstName" class="css-7t35fz"><label for="input-4" required="" class="css-1rncms5">First Name<abbr title="required" class="css-1fc83zd">*</abbr></label><div class="css-15rz5ap"><div ><input type="text" data-automation-id="legalNameSection_firstName" id="input-4" aria-required="true" class="css-ilrio6" value=""></div></div></div>

<div data-automation-id="formField-legalNameSection_lastName" class="css-7t35fz"><label for="input-5" required="" class="css-1rncms5">Last Name<abbr title="required" class="css-1fc83zd">*</abbr></label><div class="css-15rz5ap"><div ><input type="text" data-automation-id="legalNameSection_lastName" id="input-5" aria-required="true" class="css-ilrio6" value=""></div></div></div>

<div data-automation-id="formField-addressSection_addressLine1" class="css-7t35fz"><label for="input-7" class="css-1rncms5">Address Line 1</label><div class="css-15rz5ap"><div ><input type="text" data-automation-id="addressSection_addressLine1" id="input-7" aria-required="false" class="css-ilrio6" value=""></div></div></div>


<div data-automation-id="formField-addressSection_city" class="css-7t35fz"><label for="input-8" class="css-1rncms5">City</label><div class="css-15rz5ap"><div ><input type="text" data-automation-id="addressSection_city" id="input-8" aria-required="false" class="css-ilrio6" value=""></div></div></div>

<div data-automation-id="formField-addressSection_countryRegion" class="css-7t35fz"><label for="input-9" class="css-1rncms5">State</label><div class="css-15rz5ap"><div ><div class="css-12zup1l"><button aria-haspopup="listbox" type="button" value="" data-automation-id="addressSection_countryRegion" id="input-9" aria-label="State select one" class="css-6653us" aria-expanded="true" aria-controls="yl648n">select one</button><input type="text" class="css-77hcv" value=""><span class="menu-icon css-gvnnq4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="wd-icon-caret-down-small wd-icon" focusable="false" role="presentation" viewBox="0 0 24 24"><g fill-rule="evenodd" class="wd-icon-container"><path d="M12.288 15.866c.117.18.31.177.424 0l4.235-6.538c.116-.18.034-.328-.176-.328H8.229c-.214 0-.29.15-.176.328l4.235 6.538z" class="wd-icon-fill"></path></g></svg></span></div></div></div></div>

<div data-automation-id="formField-addressSection_postalCode" class="css-7t35fz"><label for="input-10" class="css-1rncms5">Postal Code</label><div class="css-15rz5ap"><div ><input type="text" data-automation-id="addressSection_postalCode" id="input-10" aria-required="false" class="css-ilrio6" value=""></div></div></div></form>`


//Stylize 
const form2 = document.querySelector("#Work-Form");
form2.style.margin = "5%";
form2.style.padding = "5%";
form2.style.border = "1px solid lightgray";
form2.style.fontWeight = "600";

// Stylize input fields
let inputfield, j;
inputfield = document.getElementsByTagName("input");
for (j = 0; j < inputfield.length - 1; ++j) {
  inputfield[j].style.width = "50%";
}