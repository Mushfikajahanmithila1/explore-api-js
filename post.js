function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => loadPost2(data));
}

function loadPost2(data) {
  const postContainer = document.getElementById("post-container");
  for (const post of data) {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h4>${post.title}</h4><p>${post.body}</p>`;
    postContainer.appendChild(postElement);
  }
}

loadPost();
