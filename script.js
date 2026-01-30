function sayHello() {
  var name = document.getElementById("username").value;

  if (name === "") {
    alert("Pehle apna naam likho 🙂");
  } else {
    document.getElementById("message").innerText =
      "Mubarak ho " + name + "! 🎉 Tumhari first app chal rahi hai";
  }
}