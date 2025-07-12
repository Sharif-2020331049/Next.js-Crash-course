export default async function getAllPost (){
   const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`)

   if(!result.ok){
     throw new Error("There is an Error fetching all post")
   }

   return result.json()
}