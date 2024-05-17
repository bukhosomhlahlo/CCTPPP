document.addEventListener('DOMContentLoaded', function () {
    // Handle Like Button
    document.querySelector('.like-btn').addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('liked');
    });

    // Handle Comment Button
    document.querySelector('.comment-btn').addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('.comments-section').style.display = 'block';
    });

    // Handle Comment Submit Button
    document.querySelector('.comment-submit-btn').addEventListener('click', function () {
        const commentInput = document.querySelector('.comment-input');
        const commentText = commentInput.value.trim();
        if (commentText) {
            const comment = document.createElement('div');
            comment.className = 'comment';
            comment.innerText = commentText;
            document.querySelector('.comments-list').appendChild(comment);
            commentInput.value = '';
        }
    });

    // Handle Form Submission
    document.getElementById('post-btn').addEventListener('click', function () {
        const name = document.getElementById('name').value.trim();
        const surname = document.getElementById('surname').value.trim();

        if (name && surname) {
            const userInfo = `Name: ${name}\nSurname: ${surname}\n\n`;
            const blob = new Blob([userInfo], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'user_info.txt';
            link.click();
            alert('User information saved successfully.');
        } else {
            alert('Please fill in all fields.');
        }
    });
});
