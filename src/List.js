import React from "react";
import "./List.css";
import Specialcard from "./Specialcard";
const questions = [
  {
    id: 1,
    ques: "Do I have to allow the use of cookes?",
    ans:
      "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
  },
  {
    id: 2,
    ques: "How do I change my My Page password?",
    ans:
      "Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse.",
  },
  {
    id: 3,
    ques: "What is BankID?",
    ans:
      "Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial.",
  },
  {
    id: 4,
    ques: "Whose birth number can I use?",
    ans:
      "Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify.",
  },
  {
    id: 5,
    ques: "When do I recieve a password ordered by letter?",
    ans:
      "Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan.",
  },
];

function List() {
  return (
    <div className="listofcards">
      {questions.map((question) => {
        return (
          <Specialcard
            key={question.id}
            ques={question.ques}
            ans={question.ans}
          />
        );
      })}
    </div>
  );
}

export default List;