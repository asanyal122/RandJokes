fetch("https://icanhazdadjoke.com/slack")
.then(data => data.json())
.then(jsonData =>
    {
         document.getElementById('jokeElement').innerHTML=jsonData.attachments[0].text
    })