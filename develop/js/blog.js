const blogPosts = document.getElementById('container');
const backBut = document.getElementById('backButton');

const header = document.querySelector('header');


function renderBlogs() {
    let blogInfo = JSON.parse(localStorage.getItem('blog')) || [];

    for (let i = 0; i < blogInfo.length; i++) {
        const posts = blogInfo[i];
        

        const divider = document.createElement('div');
        divider.className = 'wrapper';

        const userText = document.createElement('h2');
        userText.textContent = 'This was posted by: ' + blogInfo[i].username;
        userText.className = 'userTextContent';

        const titleText = document.createElement('h3');
        titleText.textContent = blogInfo[i].title;
        titleText.className = 'userTitleContent';

        const contentText = document.createElement('p');
        contentText.textContent = blogInfo[i].content;
        contentText.className = 'userContentContent';

        blogPosts.appendChild(divider);

        divider.appendChild(userText);
        divider.appendChild(titleText);
        divider.appendChild(contentText);
    };

}

backBut.addEventListener('click', function(event) {
    window.location.assign('./index.html');
})

function init() {
    renderBlogs();
}
init();


