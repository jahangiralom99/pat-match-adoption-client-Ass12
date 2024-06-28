const Testimonials = () => {
  return (
    <div>
      <section className="max-w-screen-xl mx-auto px-4 mt-16">
        <div className="mx-auto max-w-3xl text-center">
          <h3 className="mb-6 text-2xl font-bold text-[#ef6f18]">
            Testimonials
          </h3>
          <h3 className="mb-6 text-3xl font-bold">Our Happy Customers</h3>
          <p className="mb-6 pb-2dark:text-neutral-300 md:mb-12">
            Brilliant! I highly recommend Jo due to her lovely relaxed and
            gentle disposition. This fosters a wonderful environment for all
            pooches in particular those who may otherwise get a little anxious.
            The premises are always clean, the pooches content and the grooming
            sensational
          </p>
        </div>

        <div className="grid gap-12 text-center md:grid-cols-2">
          <div className="mb-6 md:mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(22).jpg"
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <p className="my-4 text-xl">
              Smudge doesn’t like grooming at the best of times but Jo makes it
              so much easier for him on little dogs day!! Now he loves it!
            </p>
            <p className="italic">- Anna Morian</p>
          </div>

          <div className="mb-0">
            <div className="mb-6 flex justify-center">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(19).jpg"
                className="w-24 rounded-full shadow-lg dark:shadow-black/30"
              />
            </div>
            <p className="my-4 text-xl">
              I went to Jo for our Westie pup’s first grooming. Jo is very
              caring and knowledgeable and obviously loves dogs and enjoys her
              role. I was very impressed and will be back. Highly recommended.
            </p>
            <p className="italic">- Teresa May</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
