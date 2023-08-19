import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      All Customers
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Our Service Customers</span>
    </h1>
    <Feed />
  </section>
);

export default Home;
