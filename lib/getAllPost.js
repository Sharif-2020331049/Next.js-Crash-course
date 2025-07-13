export default async function getAllPost (){
   const result = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`,
    {
      //## by default eta thake
      // cache: "force-cache"

      //## eta o problem cause page static thakbe na, rather server-side dynamic rendering korbe which is problem
      // cache: 'no-store'

      next: {
        // 10 sec por por check korbe new kono post asce kina but ei 10 sec cache store o korbe
        revalidate: 10,
      }
    }
   )

   if(!result.ok){
     throw new Error("There is an Error fetching all post")
   }

   return result.json()
}