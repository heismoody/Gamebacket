import SubmitBtn from "../../components/buttons/submitBtn";

export default function ContactUs() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <div className="w-full pt-56 bg-[url('/hero-contact.jpg')] bg-cover bg-no-repeat relative flex justify-center">
        <div className="bg-black/50 absolute top-0 w-full h-full" />
        <div className="bg-gradient-to-t from-background absolute top-0 w-full h-full" />
        <div className="relative introheading-2 w-[1161px]">
          <span>
            Contact us
          </span>
          <p className="descr-1 text-base py-5">
            At Gamebacket, we're committed to providing our customers with
            the best possible support. We believe that customer satisfaction is
            essential to our success, and we're always looking for ways to
            improve our service. If you have any suggestions or feedback, please
            don't hesitate to share it with us.
          </p>
        </div>
      </div>
      <div className="flex justify-between w-[1161px] pt-3">
        <div className="bg-[url('/bg-catalog.png')] bg-cover bg-no-repeat w-[50%] h-fit flex flex-col gap-y-4 py-10 px-16">
          <div className="flex flex-col">
            <span className="introheading-1 block">CONTACT</span>
            <span className={`introheading-2 leading-[3.75rem]`}>
              Get In Touch
            </span>
            <p className="descr-1">
              We're here to help! If you have any questions or feedback, please
              don't hesitate to contact us. We're always happy to hear from our
              customers.
            </p>
          </div>
          <div className="flex flex-col gap-y-5">
            <div>
              <span className="introheading-2 text-sm">Address</span>
              <span className="descr-1">
                Sayansi Bagamoyo - Road, Kijitonyama Dar es Salaam
              </span>
            </div>
            <div>
              <span className="introheading-2 text-sm">Phone</span>
              <span className="descr-1">+255 684 298 314</span>
              <span className="descr-1">+255 629 780 187</span>
            </div>
            <div>
              <span className="introheading-2 text-sm">Email</span>
              <span className="descr-1">inquiries@gamebacket.com</span>
            </div>
            <div>
              <span className="introheading-2 text-sm">Follow Us</span>
              <span className="descr-1">
                <div className="flex items-center gap-3 pt-3">
                  <div className="p-2 rounded-sm bg-blue-900 w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 320 512"
                      fill="white"
                      className="w-4 h-4"
                    >
                      <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
                    </svg>
                  </div>
                  <div className="p-2 rounded-sm bg-blue-900 w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                      fill="white"
                      className="w-4 h-4"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </div>
                  <div className="p-2 rounded-sm bg-blue-900 w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                      fill="white"
                      className="w-4 h-4"
                    >
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </div>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15848.078088822445!2d39.051794171948764!3d-6.767473481959649!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1695544926993!5m2!1sen!2stz"
              loading="lazy"
              className="w-full h-[300px]"
            ></iframe>
          </div>
          <div className="px-10 bg-secondary h-fit py-8">
            <span className="introheading-2 text-3xl">Send a Message</span>
            <div className="flex flex-col gap-3 py-3">
              <input
                type="text"
                name=""
                id=""
                className="w-full py-2 px-4 outline-none text-sm rounded"
                placeholder="Name"
              />
              <input
                type="email"
                name=""
                id=""
                className="w-full py-2 px-4 outline-none text-sm rounded"
                placeholder="Your Email"
              />
              <textarea
                name=""
                id=""
                className="outline-none px-4 text-sm rounded py-2 h-20 resize-none"
                placeholder="Enter text here"
              ></textarea>
              <SubmitBtn />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
