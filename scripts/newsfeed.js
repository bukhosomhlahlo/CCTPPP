
document.addEventListener('DOMContentLoaded', () => {
    const postBtn = document.getElementById('post-btn');
    const postInput = document.getElementById('post-input');
    const feed = document.getElementById('feed');
    const userForm = document.getElementById('user-form');
    const nameInput = document.getElementById('name');
    const surnameInput = document.getElementById('surname');

    postBtn.addEventListener('click', () => {
        const postContent = postInput.value.trim();
        const userName = nameInput.value.trim();
        const userSurname = surnameInput.value.trim();

        if (postContent && userName && userSurname) {
            addPostToFeed(postContent, `${userName} ${userSurname}`);
            postInput.value = '';
        } else {
            alert('Please enter your name, surname, and a post.');
        }
    });

    function addPostToFeed(content, user) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        postDiv.innerHTML = `
            <p><strong>${user}</strong></p>
            <p>${content}</p>
            <div class="post-actions">
                <a href="#" class="like-btn"><i class='bx bxs-heart'></i> Like</a>
                <a href="#" class="comment-btn"><i class='bx bx-message-rounded-dots'></i> Comment</a>
                <a href="#" class="share-btn"><i class='bx bx-share'></i> Share</a>
                <a href="#" class="save-btn"><i class='bx bxs-bookmark'></i> Save</a>
            </div>
            <div class="comments-section">
                <input type="text" class="comment-input" placeholder="Add a comment...">
                <button class="comment-submit-btn">Submit</button>
                <div class="comments-list"></div>
            </div>
        `;

        const likeBtn = postDiv.querySelector('.like-btn');
        const commentBtn = postDiv.querySelector('.comment-btn');
        const commentInput = postDiv.querySelector('.comment-input');
        const commentSubmitBtn = postDiv.querySelector('.comment-submit-btn');
        const commentsSection = postDiv.querySelector('.comments-section');
        const commentsList = postDiv.querySelector('.comments-list');

        likeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            likeBtn.classList.toggle('liked');
            if (!likeBtn.classList.contains('liked')) {
                likeBtn.innerHTML = `<i class='bx bxs-heart'></i> Like`;
            } else {
                likeBtn.innerHTML = `<i class='bx bxs-heart'></i> Liked by ${user}`;
            }
        });

        commentBtn.addEventListener('click', (e) => {
            e.preventDefault();
            commentsSection.style.display = commentsSection.style.display === 'block' ? 'none' : 'block';
            commentInput.focus();
        });

        commentSubmitBtn.addEventListener('click', () => {
            const commentText = commentInput.value.trim();
            if (commentText) {
                const commentDiv = document.createElement('div');
                commentDiv.classList.add('comment');
                commentDiv.innerHTML = `<strong>${user}</strong>: ${commentText} <button class="reply-btn">Reply</button>`;
                commentsList.appendChild(commentDiv);
                commentInput.value = '';

                const replyBtn = commentDiv.querySelector('.reply-btn');
                replyBtn.addEventListener('click', () => {
                    commentInput.focus();
                    commentInput.value = `@${user.split(' ')[0]} `;
                });
            }
        });

        feed.prepend(postDiv);
    }
});


