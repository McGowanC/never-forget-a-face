//stop submit button normal functino, and manually set HTTP request
let submitButton = document.querySelector("button[type=submit]");
submitButton.innerHTML = "yes"
submitButton.addEventListener('click', function(event){
    //grba form data
    let formEntry = document.querySelector("input[type=text]").value;
    
    event.preventDefault();

    const Http = new XMLHttpRequest();
    const url=`http:localhost:3000/hello?toSearch=${formEntry}`;
    Http.open("GET", url);
    Http.responseType = 'json';
    Http.send();

    Http.onload = () => {
        //console.log(Http.response)
        htmlNodeBuilder(Http.response);
    }

});

function htmlNodeBuilder(array){
    let htmlBuilt = "";
    array.forEach(element => {
        htmlBuilt += `<img src=${element.url}>`
    });

    let div = document.createElement('div');
    div.innerHTML = htmlBuilt;
    document.querySelector('main').appendChild(div);
}