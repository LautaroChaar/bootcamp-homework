const fragment = document.createDocumentFragment();
const postsSection = document.getElementById("posts");

//Fetch posts, sort randomly and show 10 of them
const getPosts = async () => {
  await fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      data
        .sort(() => Math.random() - 0.5)
        .slice(0, 10)
        .forEach(post => {
          const div = document.createElement("DIV");
          const title = document.createElement("H3");
          const paragraph = document.createElement("P");
          const hr = document.createElement("HR");
          div.appendChild(title);
          div.appendChild(paragraph);
          div.appendChild(hr);
          title.textContent = `${post.title}`;
          paragraph.textContent = `${post.body}`;
          fragment.appendChild(div);
        });

      postsSection.children.length > 0 ? postsSection.replaceChildren(fragment) : postsSection.appendChild(fragment);
    });
};
