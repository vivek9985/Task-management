import moment from "moment";

const Footer = () => {
  const time = moment().format("LT");
  return (
    <section className="w-full bg-[#fff] border-t-2 dark:bg-[#1d1d1d]">
      <div className="w-10/12 mx-auto grid md:grid-cols-3 gap-5 pt-10 md:pt-20 pb-10 md:pb-16">
        <div>
          <h2 className="uppercase dhurjati text-xl dark:text-stone-300">
            Local Time
          </h2>
          <h2 className="font-medium tracking-wide text-gray-500 dark:text-[#a9e943] lobster">
            {time}
          </h2>
        </div>
        <div className="hidden md:flex items-end justify-center">
          <p className="text-gray-500 text-sm text-center">
            © Copyright-All Rights Reserved by{" "}
            <span className="text-gray-800 font-medium dark:text-gray-500">
              Fasty
            </span>
          </p>
        </div>
        <div>
          <h2 className="uppercase dhurjati text-xl dark:text-stone-300 md:text-right">
            Socials
          </h2>
          <ul className="flex items-center md:justify-end gap-5 text-gray-500 font-medium dark:text-[#a9e943] text-sm">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
        <div className="flex md:hidden items-center justify-center mt-7">
          <p className="text-gray-500 dark:text-stone-400 text-sm text-center">
            © Copyright-All Rights Reserved by{" "}
            <span className="text-gray-800 font-medium dark:text-gray-500">
              Fasty
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
