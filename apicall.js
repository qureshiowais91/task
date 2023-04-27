const baseUrl  =  'https://restcountries.com/v3.1/all';

let xhr = new XMLHttpRequest();
// method – HTTP-method. Usually "GET" or "POST".
// URL – the URL to request, a string, can be URL object.
// async – if explicitly set to false, then the request is synchronous, we’ll cover that a bit later.
// user, password – login and password for basic HTTP auth (if required).

xhr.open("get",baseUrl);
xhr.send();


xhr.onload = function() {
   let json = JSON.parse(xhr.response);
    json.forEach((e)=>{
        // document.write(" ")
        // document.write(e.flag)
        // document.write(e.flag.name);
        // document.write(Object.keys(e));
        debugger
        const bd = document.querySelector("body")
        const br = document.createElement("br");
        bd.append(`${e.flag} ${e.name.official} ,${e.region},${e.subregion}`);
        bd.append(br);
        // document.write((e.region));
        // document.write((e.subregion));
        // document.write((e.population));  


    })
  };