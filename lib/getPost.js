export default async function getPost({ id }) {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!result.ok) {
    throw new Error("There is an Error fetching single post");
  }

  return result.json();
}
