export default function sortHealth(users) {
  return users.sort((a, b) => b.health - a.health);
}
