function loadUser() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadUser2(data));
}

function loadUser2(data) {
  console.log(data);
}
