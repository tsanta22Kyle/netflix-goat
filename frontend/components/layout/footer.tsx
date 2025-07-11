import Link from "next/link";

export const Footer = () => {
  return (
    <footer id="footer" className="max-h-132 h-full w-full">
      <div className="footer_wrapper text-[#b3b3b3] h-fit w-full space-y-2">
        <div className="h-12 flex items-center w-full">
          <label className="underline text-lg">Questions? Contact us.</label>
        </div>
        <div className="w-full">
          <ul className="flex-wrap flex w-full *:w-full *:md:w-1/2 *:lg:w-1/3 *:mt-4 py-4 *:font-medium">
            <li className="underline text-sm">
              <Link href="">FAQ</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Help Center</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Account</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Media Center</Link>
            </li>

            <li className="underline text-sm">
              <Link href="">Investor Relations</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Jobs</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Ways to Watch</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Terms of Use</Link>
            </li>

            <li className="underline text-sm">
              <Link href="">Privacy</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Cookies Preferences</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Corporate Information</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Contact Us</Link>
            </li>

            <li className="underline text-sm">
              <Link href="">Speed Test</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Legal Notices</Link>
            </li>
            <li className="underline text-sm">
              <Link href="">Only on Netflix</Link>
            </li>
          </ul>
        </div>
        <div className="w-full h-12 font-medium text-sm flex items-center">
          <h4>Netflix Madagascar Goat</h4>
        </div>
        <div className="w-full h-12 flex items-center">
          <p className="text-sm">
            This pages is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
            <Link href="" className="underline text-blue-500">
              Learn more
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
