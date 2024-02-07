import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI-Powered Prompts
        </span>
        </h1>
        <p className="desc text-center">
          PromptCraft is a contemporary, 
          open-source AI prompting tool designed for the modern world, 
          enabling users to explore, generate, 
          and collaborate on creative projects.
        </p>
        <Feed />
    </section>
  )
}

export default Home