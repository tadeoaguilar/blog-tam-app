
import { getAllPosts } from "../lib/api";
import Hero from "./pages/Hero";
export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main >
      
        <Hero />
       
      
    </main>
  );
}
