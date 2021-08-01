function onSubmit()  {
    $("#video").empty
    let searchvalue = document.querySelector("#searchBox").value
    console.log(searchvalue)
    var video =''
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC3rTcLrKtCSQUcii_NK3Ne1ivBWT2vqXo&type=video&maxResults=12&q='+searchvalue,


        success: function (data) {

            data.items.forEach(item =>{
                console.log(item.id.videoId);
                video = `<iframe width="420" height="315"
                src="https://www.youtube.com/embed/${item.id.videoId}"
                frameborder="0" allowfullscreen></iframe>`
                $("#video").append(video)
            })
        },


    });
}