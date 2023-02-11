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
let inputfield, j;
inputfield = document.getElementsByTagName("input");
for (j = 0; j < inputfield.length - 1; ++j) {
  inputfield[j].style.width = "50%";
}

//Store User Submitted data in JSON
document.getElementById("userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  var object = {};
  formData.forEach((value, key) => (object[key] = value));
  var json = JSON.stringify(object);
  console.log(json);
});
