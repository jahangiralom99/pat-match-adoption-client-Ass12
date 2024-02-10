import { Link } from "react-router-dom";
import TopBar from "../../Components/Common/TopBar";
import ScrollToTop from "react-scroll-to-top";

const InspawrationStation = () => {
  return (
    <section className="max-w-screen-xl mx-auto mt-4 ">
      <ScrollToTop
        className="flex items-center justify-center transition duration-100000"
        color="#ef6f18"
        smooth
      />
      <TopBar value={"Inspire A Pet Station"}></TopBar>
      <div className="max-w-screen-lg mx-auto space-y-10 px-4">
        <h1 className="text-4xl font-bold">
          8 Great Reasons Why You Should Consider Adopting a Pet
        </h1>
        <p>
          Have you been considering expanding your family with a pet? Here are 8
          great reasons to do it now by adopting a dog or cat from a shelter or
          rescue.
        </p>
        <h1 className="text-4xl font-bold">1. Save a life</h1>
        <p>
          Shelter and rescue pets need a second chance. They’ve been lost,
          abandoned or surrendered. Depending on where they are, they may be at
          risk of euthanasia if there isn’t the space or funding to keep housing
          them. When you adopt a dog or cat, you give them the secure and loving
          home they deserve.
        </p>
        <img src="https://i.postimg.cc/15V49wTv/enrich-your-life.jpg" alt="" />
        <h1 className="text-4xl font-bold">2. Find a best friend</h1>
        <p>
          Pets are friends, stress-relievers and social ice breakers. During the
          pandemic, people reported that owning or fostering a pet gave them
          companionship (86%), helped reduce anxiety (78%), alleviated boredom
          (75%) and gave them a sense of hope (69%). Going forward, 90% of pet
          parents say they want to continue to spend as much time with pets as
          they did during the pandemic.
        </p>
        <img src="https://i.postimg.cc/mg2LP96x/get-active.jpg" alt="" />
        <h1 className="text-4xl font-bold">3. Get healthier</h1>
        <p>
          While different pets have different needs, all need some form of daily
          activity for good health and mental stimulation – and so do we! A pet
          gives you an exercise buddy and motivation to stay fit. Check out this
          post from WHISTLE™ about ways to exercise with a dog. And, here’s a
          post about exercises for cats.
        </p>
        <img src="https://i.postimg.cc/KvQ3zBDL/any-ageb.jpg" alt="" />
        <h1 className="text-4xl font-bold">4. Free up shelter space</h1>
        <p>
          Despite the hard work and dedication of shelters and rescues, there’s
          still only so much space available to house lost or abandoned pets. If
          you adopt from a shelter or rescue, you’re freeing up space for
          another animal to get the care they need and a chance for their own
          adoption.
        </p>
        <img
          src="https://i.postimg.cc/J7SK4wKZ/chen-mizrach-07-YV0y-kqvw-unsplash.jpg"
          alt=""
        />
        <h1 className="text-4xl font-bold">5. Find a pet of any type</h1>
        <p>
          Shelters generally have a wide selection of dogs and cats, including
          pure breeds and mixed breeds, big pets and small. So, chances are good
          that you can find a furry friend to fit your family. Plus, shelter
          populations change often as pets are adopted and new ones arrived, so
          you have many chances to find your perfect match.
        </p>
        <img
          src="https://i.postimg.cc/Fsf1981t/victor-grabarczyk-N04-FIf-Hhv-k-unsplash.jpg"
          alt=""
        />
        <h1 className="text-4xl font-bold">6. Or a pet of any age</h1>
        <p>
          Shelters also have a wide mix of pet ages, from puppies and kittens to
          seniors. There are benefits of every age. Younger pets can be feisty
          and adorable, but may also require training, attention and a lot of
          energy. Older pets can be laid back and obedient, but may require more
          care as they age.
        </p>
        <img
          src="https://i.postimg.cc/ZnNRLvGb/helena-lopes-za7-AME7-HExw-unsplash.jpg"
          alt=""
        />
        <h1 className="text-4xl font-bold">7. Get a ready pet</h1>
        <p>
          Shelters and rescues work tirelessly to finding loving homes for pets,
          including providing training and socialization where needed. They may
          also give medical treatment to make sure animals are healthy and
          adoptable, and microchips so they don’t get lost in the future.
        </p>
        <img
          src="https://i.postimg.cc/s2f403Dd/richard-brutyo-xv-Yx-Gcw-Fvu-E-unsplash.jpg"
          alt=""
        />
        <h1 className="text-4xl font-bold">8. Enrich your life</h1>
        <p>
          Did you know dog owners are five times more likely to know their
          neighbors? And cat owners watch and share hundreds of videos a year?
          Pets help connect us. Plus, if your company allows pets at work, you
          know pets can even improve work relationships, reduce stress and boost
          morale.
        </p>
        <img
          src="https://i.postimg.cc/yYBjSh48/chewy-f-Gxi-RXr2o-Zg-unsplash.jpg"
          alt=""
        />
        <p>
          Millions of pets end up homeless every year, often for reasons that
          have little to do with them.
        </p>
        <p>
          So please consider adopting a pet. It means one more dog or cat will
          find the loving home they deserve, and that’s good for your community,
          your pet and best of all, for you.
        </p>
        <p>
          Please share this post to encourage more people to consider adoption.
          <Link
            to="/pet-listing"
            className="hover:text-red-500 cursor-pointer font-bold ml-3 underline text-[#ef6f18]"
          >
            Find tips for welcoming a new furry friend here.
          </Link>
        </p>
      </div>
    </section>
  );
};

export default InspawrationStation;
