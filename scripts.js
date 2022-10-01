fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    l=data.length
    console.log(l)
    let n=getRandomArbitrary(0,l-1)

    let quote = data[n].text;
    let auth = data[n].author
    console.log(n)
    console.log(data.length)
    console.log(data[n].text);
    console.log(data[n].author);
    let quotation=document.getElementById("quotation");
    let writer=document.getElementById("writer");
    quotation.innerHTML=quote;
    writer.innerHTML=auth;
    console.log(data);
  });

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

