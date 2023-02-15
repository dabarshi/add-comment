
const commentContainer = document.getElementById('comment-container');
const commentBox = document.getElementById('comment-box');
const postButton = document.getElementById('btn-post')


postButton.addEventListener('click', function(){
    const comment = commentBox.value;
    const p = document.createElement('p');
    p.innerText = comment;
    commentContainer.appendChild(p);
    commentBox.value = '';
})