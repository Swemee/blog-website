const subBut = document.querySelector("#submitButton");
const usernameInput = document.getElementById("username");
const titleInput = document.getElementById("title");
const contentInput = document.getElementById("content");


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

//Make if statement for if they complete the form or not
function incompleteForm() {
    window.alert('Please complete the form.');
}


//This function makes it so that if the form is complete then move on to the blog page, if not then an alert pops up
subBut.addEventListener('click', function(event) {

    if (usernameInput.value === '' || titleInput.value === '' || contentInput.value === '') {
        incompleteForm();
    } else {
        event.preventDefault();
        createAndRenderBlog();
        window.location.assign('./blogpage.html');
    }
})








