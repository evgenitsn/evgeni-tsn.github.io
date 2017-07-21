fetch('https://www.instagram.com/evgeni.tsn/?__a=1')
.then((data) => data.json())
.then((data) => console.log(data))