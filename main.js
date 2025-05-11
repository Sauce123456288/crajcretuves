document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Blog Search (basic)
const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();
    const posts = document.getElementById("postList").getElementsByTagName("li");
    Array.from(posts).forEach(post => {
      const text = post.textContent || post.innerText;
      post.style.display = text.toLowerCase().includes(filter) ? "" : "none";
    });
  });
}
