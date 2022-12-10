import React from "react";
import SocialIcon from "components/SocialIcon";
import { FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pb-100px">
      <div className="container">
        <div className="grid max-w-[20rem] md:max-w-none mx-auto md:mx-0 text-center md:text-left md:grid-cols-3 gap-12">
          <div>
            <img
              src="images/logo.png"
              className="w-24 lg:w-28 xl:w-32 mb-8 mx-auto md:mx-0"
              alt=""
            />

            <p className="text-white text-xs lg:text-sm xl:text-base leading-[1.6] mb-8 opacity-80">
              The option eyes by something from the than a no offering a more to
              and the likely behavioural thought rhetoric of right now{" "}
            </p>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              <SocialIcon
                href="/"
                target="_blank"
                rel="noreferrer"
                Icon={() => <FaInstagram className="text-white text-xl" />}
              />
              <SocialIcon
                href="/"
                target="_blank"
                rel="noreferrer"
                Icon={() => <FaTwitter className="text-white text-lg" />}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h4 className="text-sm lg:text-base xl:text-xl text-white font-medium mb-4 lg:mb-6 xl:mb-8">
                Company
              </h4>

              <ul className="space-y-3">
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="text-xs lg:text-sm xl:text-base text-white opacity-80"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="text-xs lg:text-sm xl:text-base text-white opacity-80"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    target="_blank"
                    className="text-xs lg:text-sm xl:text-base text-white opacity-80"
                  >
                    Support Center
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4 className="text-sm lg:text-base xl:text-xl text-white font-medium mb-4 lg:mb-6 xl:mb-8">
              Newsletter
            </h4>

            <p className="text-xs lg:text-sm xl:text-base text-white opacity-80 leading-[1.6] mb-6">
              Get the latest news, product updates and special offer from us. We
              hate spamming.
            </p>

            <form className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 lg:space-x-2">
              <input
                type="email"
                placeholder="Email"
                className="text-center md:text-left lg:flex-1 w-full h-10 xl:h-12 px-5 outline-none bg-dark-green rounded-md text-xs lg:text-sm xl:text-base"
              />
              <button
                type="submit"
                className="gradient-button w-full lg:w-auto h-10 xl:h-12 px-4 xl:px-6 rounded-md capitalize text-xs lg:text-sm xl:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
