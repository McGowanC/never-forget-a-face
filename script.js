let submitButton = document.querySelector("button[type=submit]");
submitButton.innerHTML = "yes"
submitButton.addEventListener('click', function(event){
    event.preventDefault();

    alert("hello");

});

const Http = new XMLHttpRequest();
const url='http:localhost:3000/hello';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}