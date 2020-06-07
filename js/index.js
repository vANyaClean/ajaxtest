document.querySelector('.time').innerText = new
Date().toLocaleTimeString();
 
document.querySelector('.fetch-html').addEventListener('click', fetchHtml)
//function fetchHtml(){
    //fetch('client-data.html').
  //  then(response => response.text())
   // .then(html => document.querySelector('.html-container') .innerHTML = html)
    
//}
async function fetchHtml(){
    const response = await fetch("client-data.html");
    const html = await response.text();
    document.querySelector('.html-container').innerHTML = html;
}

document.querySelector('.get-ajax-json').addEventListener('click', getAjaxJson)
function getAjaxJson(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
           const data = JSON.parse(xhr.responseText)
            document.querySelector('.name').innerText=data.name;
            document.querySelector('.date').innerText=data.date;
            document.querySelector('.gender').innerText=data.gender;
        }
        else if(xhr.readyState === 4 && xhr.status === 404){
            alert ("IDI NAXHUI PIDAR");

        }
    }


xhr.open('get','client-data.json',true)
xhr.send()
}
document.querySelector('.fetch-json').addEventListener('click', fetchJson)
async function fetchJson(){
    const response = await fetch("client-data.json");
    const data = await response.json();
       document.querySelector('.name').innerText=data.name;
       document.querySelector('.date').innerText=data.date;
       document.querySelector('.gender').innerText=data.gender;
}

document.querySelector('.get-ajax-html').addEventListener('click', getAjaxHtml)
function getAjaxHtml(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
        else if(xhr.readyState === 4 && xhr.status === 404){
            alert ("IDI NAXHUI PIDAR");

        }
    }
    xhr.open('get','client-data.html',true)
xhr.send()
}