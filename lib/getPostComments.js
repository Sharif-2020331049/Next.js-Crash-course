export default async function getPostComments({ id }) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  if (!result.ok) {
    throw new Error("There is an Error fetching single post");
  }

  return result.json();
}
