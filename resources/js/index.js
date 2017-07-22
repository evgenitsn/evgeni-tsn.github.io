var url = 'https://api.instagram.com/v1/users/37619101/media/recent?access_token=37619101.34e42b0.225c784d9f6948b7929faf8835681018'

$.ajax({
    url: url,
    type: "GET",
    crossDomain: true,
    dataType: "jsonp",
    success: function(data){
        var imageArr = data.data;
        for(var image of imageArr){
            console.log(image.caption.text)
        }
    }
});