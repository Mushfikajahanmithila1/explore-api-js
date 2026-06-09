function loadUser2() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => loadUser3(data));
}

function loadUser3(data) {
  const ul = document.getElementById("user-list");
  for (const post of data) {
    const li = document.createElement("li");
    li.innerText = post.title;
    ul.appendChild(li);
  }
}
