function generateAvatar() {
  const name = document.getElementById('username').value.trim();
  if (!name) return alert("Please enter a name!");

  // Use Dicebear API (free)
const avatarUrl = `https://api.dicebear.com/7.x/adventurer/svg?seed=encodeURIComponent(name)`;

  document.getElementById('avatarContainer').innerHTML = `
    <img src="{avatarUrl}" alt="Avatar" />
  `;
}
