function calculateAge() {
  var dob = document.getElementById("dob").value;

  var today = new Date();
  var birthDate = new Date(dob);
  var age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  document.getElementById("result").innerText =
    "Your age is: " + age + " years";
}
