const formPage = document.querySelector("#blogForm")
const subBut = document.querySelector("#submitButton");
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");
const ulPosts = document.getElementById("posts");


// This function creates and renders the blog
function createAndRenderBlog() {
    const blog = {
        username: usernameInput.value,
        title: titleInput.value,
        content: contentInput.value.trim()
    };

    let blogs = JSON.parse(localStorage.getItem('blog')) || [];
    blogs.push(blog);
    
    localStorage.setItem('blog', JSON.stringify(blogs));
    
}

subBut.addEventListener('click', function(event) {
    event.preventDefault();
    createAndRenderBlog();
    window.location.assign('./blogpage.html');
})








