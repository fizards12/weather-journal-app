//the Base URL and the Api Key variables
const weatherWeb = "http://api.openweathermap.org/data/2.5/weather?zip="
const aKey = "44e2503520d8773bec40b2527224378e";

//declare a object variable called d holds the Date of today
let d = new Date();
//declare a variable called "newDate" as string holds the date of today
let newDate = `${d.getMonth()+1}.${d.getDate()}.${d.getFullYear()}`;

//declare an asynchronous function called "fetFunc" 
const asyncFunc = async ()=>{
    //declare a variable holds the zipCode the user enters in an element has 'zip' id.
    let zCode = document.getElementById('zip').value;

    // wait the get request to finish and store the body to an element called "getData"
    const getData = await fetch(`${weatherWeb}${zCode},us&appid=${aKey}&units=metric`);
    // wait untill the data converted to understandable object and store it to variable called "dataRes" 
    const dataRes = await getData.json()
    //wait the post request and store the return variable to a variable called fetch2
    await fetch('/PostToServer',{
        method: 'POST',
        credentials: "same-origin",
        headers:{
            'Content-Type':'application/json'
        },body: JSON.stringify({
            //store the date 
            date: newDate,
            //store the temperature
            temp: dataRes.main.temp,
            //store the feelings the user entered on an element have id ="feelings"
            content: document.getElementById("feelings").value 
        })
    })
    //wait the get request until finishing and store the return value to variable called "getFromServer"
    const getFromServer = await fetch('/update')
    //when it finished try to do this sentences
    try{
        //convert the return value to understandable object and store it into variable
        const gt = await getFromServer.json();
        //change the innerHTML of the elements that have the ids "date","temp",and "content"
        document.getElementById("date").innerHTML = gt.date;
        document.getElementById("temp").innerHTML = gt.temp;
        document.getElementById("content").innerHTML = gt.content;
    }
    //if the something goes wrong print "error"
    catch{
        console.log('error');
    }
}

//do the asyncFunc function if the element has the id "generate" was clicked
document.addEventListener('click',(e)=>{
    if (e.target.id === 'generate'){
        asyncFunc()
    }
})
