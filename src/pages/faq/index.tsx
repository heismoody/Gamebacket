import PageHeader from "../pageHeader";
import QuestionCard from "./questioncard";

export default function Faq() {
  return (
    <section className="bg-background flex flex-col justify-center items-center pb-16">
      <PageHeader
        image="/hero-faq.jpg"
        title="Frequently Asked Questions"
        description="Here, you'll find answers to some of the most common questions we receive about our products, services, and community. We're committed to keeping them up-to-date and accurate. If you have a question that isn't answered here, please don't hesitate to contact us. We're always happy to help!"
      />
      <div className="flex flex-col w-[1161px] mobile:w-[90%] gap-y-10 pt-8">
        <div className="flex justify-between mobile:flex-col">
          <div className="w-[35%] mobile:w-full h-[450px] mobile:h-[30vh] overflow-hidden ">
            <img src="about1.jpg" className="imagerender" alt="" />
          </div>
          <div className="w-[62%] mobile:w-full">
            <ul>
              <li>
                <QuestionCard
                  question="What is your cancellation policy?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="Can other info be added to an invoice?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="How do i change my account email?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="How do i change my account password?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="Is tracking my order possible?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="How to enter in a tournament?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between mobile:flex-col">
          <div className="w-[62%] mobile:w-full">
            <ul>
              <li>
                <QuestionCard
                  question="What is your cancellation policy?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="Can other info be added to an invoice?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="How do i change my account email?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="How do i change my account password?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="Is tracking my order possible?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
              <li>
                <QuestionCard
                  question="How to enter in a tournament?"
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nisi ipsa
                    odit facere voluptates ullam, vel, numquam itaque sint quasi cumque
                    doloremque corporis nostrum, assumenda sed"
                />
              </li>
            </ul>
          </div>
          <div className="w-[35%] mobile:w-full h-[350px] mobile:h-[30vh] overflow-hidden mobile:order-first">
            <img src="faq2.jpg" className="imagerender" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
