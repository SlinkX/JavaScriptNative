const shortBtn = document.getElementById('short-btn')
const reloadBtn = document.getElementById('reload-btn')

shortBtn.addEventListener('click',shortUrl)

function shortUrl(){
    var originURL = document.getElementById("originURL").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originURL);
    shortenedUrlTextarea = document.getElementById("shortenedUrl")

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
    }).catch(error => {
        shortenedUrlTextarea.value=" error: unable to shorten url"
    })
}
reloadBtn.addEventListener('click',()=>{
    location.reload();
})