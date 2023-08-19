import Link from "next/link";

const CustomerForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className='w-full max-w-full flex-center flex-col mb-5'>
      <h1 className='head_text text-center'>
        <span className='fs-36 green_gradient'>{type} Customer</span>
      </h1>
     

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7'
      >
        {/* <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Customer
          </span>

          <textarea
            value={post.customer}
            onChange={(e) => setPost({ ...post, customer: e.target.value })}
            placeholder='Write your customer here'
            required
            className='form_textarea '
          />
        </label> */}

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Customer
          </span>

          <input
            value={post.firstname}
            onChange={(e) => setPost({ ...post, firstname: e.target.value })}
            placeholder='Write your customer here'
            required
            className='form_textarea '
          />
        </label>


        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Customer
          </span>

          <input
            value={post.lastname}
            onChange={(e) => setPost({ ...post, lastname: e.target.value })}
            placeholder='Write your customer here'
            required
            className='form_textarea '
          />
        </label>


        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Customer
          </span>

          <input
            value={post.email}
            onChange={(e) => setPost({ ...post, email: e.target.value })}
            placeholder='Write your customer here'
            required
            className='form'
          />
        </label>


        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button
            type='submit'
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary rounded-full text-white'
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CustomerForm;
