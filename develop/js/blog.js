


function renderBlogs() {
    let blogInfo = JSON.parse(localStorage.getItem('blog'));
    

    for (let i = 0; i < blogs.length; i++) {
        const posts = blogs[i];

        const li = document.createElement('li');
        li.textContent = posts.username;
        ulPosts.appendChild(li);
    };

}

