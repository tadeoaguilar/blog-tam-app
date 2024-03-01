import Container from "@/app/components/container";
import { HeroPost } from "@/app/components/hero-post";
import { Intro } from "@/app/components/intro";
import { MoreStories } from "@/app/components/more-stories";
import { getAllPosts } from "../lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <div className="flex w-screen h-screen" >
             <div className="w-1/2 h-full bg-light-on-primary-surface dark:bg-light-primary-container">Light</div> 
             <div className="w-1/2 h-full bg-dark-on-primary-surface dark:bg-dark-primary-container">Dark</div> 
        </div>

        {/*
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      */}
      </Container>
    </main>
  );
}
