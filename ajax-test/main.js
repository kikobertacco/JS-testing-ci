var xhr = XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(this.readystate == 4 && this.status == 200){
        document.getElementById("data").innerHTML = this.responseText;

    }
};
xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
xhr.send();