// Key: https://www.publicdomainpictures.net/pictures/50000/velka/shining-blue-water-background.jpg
// a25cb760fe338242975ee2ef7ad4eba1

// Secret:
// 46095268ca95bdab
var number = parseInt(0);
var textEntry = 'test';
var myUrl;
const myForm = document.getElementById("inputform");
var urls = [];
var count = parseInt(0);


    myForm.addEventListener("submit", (e)=> {
    
    e.preventDefault();
    number = parseInt(document.forms["inputform"]["numbers"].value);
    textEntry = document.forms["inputform"]["text_entry"].value;
    myUrl=" https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=a25cb760fe338242975ee2ef7ad4eba1&sort=relevance&per_page="+ parseInt(number+count) +"&tags="+textEntry+"&privacy_filter=1&safe_search=1&extras=url_sq&format=json&nojsoncallback=1";

    var request = new XMLHttpRequest();
    request.open("GET", myUrl);
    request.onload = function(){
        var myData = JSON.parse(request.responseText);
        for(var i = count; i < parseInt(number+count); i++)
        {
            createCard(myData.photos.photo[i].url_sq);
            
        }

        count = parseInt(number+count);
    }


    request.send();
     
    // number = count;
    // console.log("number" + number);
});



function createCard(url)
{
    let card = document.createElement('div');
    card.className = 'gallery';
    card.innerHTML = '<img src ="' + url + '">';
    // let cardBody = document.createElement('div');
    // cardBody.className = 'card-body';

    
  
    //card.appendChild(cardBody);
    document.body.appendChild(card);
}
