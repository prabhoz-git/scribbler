function myFunction(button) {
    var title = document.getElementById("title");
    var description =  document.getElementById('description');
    if (title.contentEditable == "true") {
        title.contentEditable = "false";
        description.contentEditable = "false";
        button.innerHTML = "Edit";
        title.classList.remove("editable");
        description.classList.remove("editable");
    } else {
        title.contentEditable = "true";
        description.contentEditable = "true";
        button.innerHTML = "Save";
        title.classList.add("editable");
        description.classList.add("editable");
    }
}

window.postComment=function()
{
    var div = document.getElementById("comments");

    div.innerHTML = div.innerHTML +"<br>"+ document.getElementById("comment").value;
    document.getElementById("comment").value='';

}
var numberOfLikes = 1;
function updateLike(){

    let likeText = document.getElementById('liketext');
    let likeBtn =  document.getElementById('likebtn');
    let isThumbsUp = likeBtn.classList.contains('fa-thumbs-up');
    
    if (numberOfLikes > 1) {
        likeText.innerHTML = '<p>' + numberOfLikes + ' persons likes this.</p>';
    } else {
    likeText.innerHTML = '<p>' + numberOfLikes + ' people likes this.</p>';
    }
    numberOfLikes += 1 ;



}