
function getQuote() {
    var cars = ["Don't cry because it's over, smile because it happened.","Be yourself; everyone else is already taken.","So many books, so little time.","A room without books is like a body without a soul.","You only live once, but if you do it right, once is enough.","Be the change that you wish to see in the world.","If you tell the truth, you don't have to remember anything.","Always forgive your enemies; nothing annoys them so much.","Live as if you were to die tomorrow. Learn as if you were to live forever.","Be Yourself"];
    var num=Math.floor(Math.random()*10)
    displayQuote(cars[num]);
}
function displayQuote(quote) {
    const quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

function colorChange()
{
    document.getElementById("app").style.backgroundColor = "salmon";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="Arial, Helvetica, sans-serif";
    var newQuoteButton = document.querySelector('.red');
    newQuoteButton.addEventListener('click', getQuote);
    getQuote();
}

function colorChange1()
{
    document.getElementById("app").style.backgroundColor = "mediumpurple";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="Verdana, Geneva, sans-serif";
    var newQuoteButton = document.querySelector('.red');
    newQuoteButton.addEventListener('click', getQuote);
    getQuote();
}

function colorChange2()
{
    document.getElementById("app").style.backgroundColor = "dimgray ";
    document.getElementById("p1").style.color = "white";
    document.getElementById("p1").style.fontFamily="\"Times New Roman\", Times, serif";
    var newQuoteButton = document.querySelector('.red');
    newQuoteButton.addEventListener('click', getQuote);
    getQuote();
}

function colorChange3()
{
    document.getElementById("app").style.backgroundColor = "peachpuff ";
    document.getElementById("p1").style.color = "maroon";
    document.getElementById("p1").style.fontFamily="Georgia, serif";
    var newQuoteButton = document.querySelector('.red');
    newQuoteButton.addEventListener('click', getQuote);
    getQuote();
}

function change()
{
    var y=document.getElementById('state').value;
    console.log(y);
    if(y=="lb_to_kg")
    {
        var x=document.getElementById("in_lb").value;
        var num;
        num = x*0.4536;
        document.getElementById("demo").innerHTML=num;
    }
    else if(y=="kg_to_lb")
    {
        var x=document.getElementById("in_lb").value;
        var num;
        num = x*2.2046;
        document.getElementById("demo").innerHTML=num;
    }

}
function calculate() {
    var values = document.getElementById("box1").value.split(/,/g);
    var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
    document.getElementById("max").innerHTML = values.max();
    document.getElementById("min").innerHTML = values.min();
    document.getElementById("sum").innerHTML = sum;
    document.getElementById("avg").innerHTML = sum / values.length;
    document.getElementById("reverse").innerHTML = values.reverse().join(',');
}

Array.prototype.max = function() {
    return Math.max.apply(null, this);
};

Array.prototype.min = function() {
    return Math.min.apply(null, this);
};
function clearIt(){
    document.getElementById("textAir").value = "";
};
var adi=true;
function capitilizing()
{

   if(adi){ document.getElementById("textAir").style.textTransform = "uppercase"; adi=false;}
   else {
       document.getElementById("textAir").style.textTransform = "lowercase";
   adi=true;
   }
}

function sortInput(){
    var inputField = document.getElementById("textAir");

    var lineArray = inputField.value.split('\n'); //create array of strings
    lineArray.sort(); //sort the array
    inputField.value = lineArray.join('\n'); //join it together in the output
}

function reverse()
{
    var text = document.getElementById("textAir").value;
    var result = text.split('\n').map(function(line) {
        return line.split(" ").reverse().join(" ");
    }).join('\n');

    document.getElementById("textAir").value = result;
}

function stripBlank()
{
    var  someText = document.getElementById("textAir").value;

//This javascript code removes all 3 types of line breaks
    someText = someText.replace(/(\r\n|\n|\r)/gm,"");
    someText=someText.join('\n');
    document.getElementById("textAir").value=someText;
    console.log(someText);
}

function delBlankLines() {
    var stringArray = document.getElementById("textAir").value.split('\n');
    var temp = [""];
    var x = 0;

    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].trim() != "") {
            var ops= stringArray[i].trim();
            temp[x] = ops;
            x++;
        }
    }
    temp = temp.join('\n');
    document.getElementById("textAir").value= temp;
}


function addNumbers()
{
    var numbered =document.getElementById("textAir").value;
    var content = document.getElementById("textAir").value.split("\n");

    //create array to hold new Content
    var newContent = [];

    //loop through and add line numbers
    for(var i = 0; i < content.length; i++){//begin for loop


        //append the line numbers and the new value to the newContent array
        if(content[i].startsWith("1")||content[i].startsWith("2")||content[i].startsWith("3")||content[i].startsWith("4")||content[i].startsWith("5")||content[i].startsWith("6")||content[i].startsWith("7")||content[i].startsWith("8")||content[i].startsWith("9")) {
            newContent.push(content[i] + "\n");
        }
        else {
            newContent.push((i + 1) + ". " + content[i] + "\n");
        }

    }//end for loop


    //update the content of textArea with line numbers
    document.getElementById("textAir").value = newContent.join("");


}

function shuffel()
{
    var str = document.getElementById("textAir").value;
    var array = str.split("\n");
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    document.getElementById("textAir").value=array.join('\n');
}