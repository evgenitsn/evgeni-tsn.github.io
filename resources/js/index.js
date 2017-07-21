fetch('https://api.instagram.com/v1/users/37619101/media/recent?access_token=37619101.34e42b0.225c784d9f6948b7929faf8835681018')
.then((data) => data.json())
.then((data) => console.log(data))