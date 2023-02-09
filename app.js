//Define baseline
document.body.innerHTML = `<div id='container'></div>`;
document.body.style.boxSizing = " border-box";
document.body.style.padding = "0";
document.body.style.margin = "0";
//Create & style container
const container = document.querySelector("#container");
container.style.height = "568px";
container.style.width = "320px";
container.style.border = "solid 1px lightgrey";
container.style.backgroundColor = "lightgrey";

container.innerHTML = `<form action="" method="get" class="form">
<div class="form">
  <label for="fname">First Name: </label>
  <input type="text" name="fname" id="fname" required>
</div>
<div class="form">
    <label for="mname">Middle Name: </label>
    <input type="text" name="mname" id="lname">
</label>
</div>
<div class="form">
  <label for="lname">Last Name: </label>
  <input type="text" name="lname" id="lname" required>
</div>
<div class="form">
    <label for="email">Email: </label>
    <input type="email" name="email" id="email" required>
</div>
<div class="form">
    <label for="phone">Phone Number: </label>
    <input type="tel"  id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
</div>
<div class="form">
  <input type="submit" value="Submit!">
</div>
</form>`;

const form = document.querySelector(".form");
form.style.margin = "5%";
form.style.padding = "5%";
form.style.backgroundColor = "white";
