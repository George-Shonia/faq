import classes from "../modules/Main.module.scss";
import Star from "../assets/images/icon-star.svg";
import PlusIcon from "../assets/images/icon-plus.svg";
import MinusIcon from "../assets/images/icon-minus.svg";
import { useState } from "react";

const Main = () => {
  const [firstAnswer, setFirstAnswer] = useState(false);
  const [secondAnswer, setSecondAnswer] = useState(false);
  const [thirdAnswer, setThirdAnswer] = useState(false);
  const [fourthAnswer, setFourthAnswer] = useState(false);

  const onFirstAnswerClickHandler = () => {
    setFirstAnswer(!firstAnswer);
  };

  const onSecondAnswerClickHandler = () => {
    setSecondAnswer(!secondAnswer);
  };
  const onThirdAnswerClickHandler = () => {
    setThirdAnswer(!thirdAnswer);
  };
  const onFourthAnswerClickHandler = () => {
    setFourthAnswer(!fourthAnswer);
  };

  return (
    <div className={classes["main-wrapper"]}>
      <div className={classes["faq-container"]}>
        <div className={classes["title"]}>
          <img src={Star} alt="star-image" />
          <h1>FAQs</h1>
        </div>
        <div className={classes["questions-list"]}>
          <div className={classes["faq"]}>
            <div className={classes["question"]}>
              <p>What is Frontend Mentor, and how will it help me?</p>
              <img
                role="button"
                src={firstAnswer ? MinusIcon : PlusIcon}
                onClick={onFirstAnswerClickHandler}
              ></img>
            </div>
            {firstAnswer && (
              <p>
                Frontend Mentor offers realistic coding challenges to help{" "}
                <br />
                developers improve their frontend coding skills with projects in{" "}
                <br />
                HTML, CSS, and JavaScript. It's suitable for all levels and
                ideal for <br /> portfolio building.{" "}
              </p>
            )}
          </div>

          <div className={classes["faq"]}>
            <div className={classes["question"]}>
              <p>Is Frontend Mentor free?</p>
              <img
                role="button"
                src={secondAnswer ? MinusIcon : PlusIcon}
                onClick={onSecondAnswerClickHandler}
              ></img>
            </div>
            {secondAnswer && (
              <p>
                Yes, Frontend Mentor offers both free and premium coding
                challenges, with the free option providing access to a range of
                projects suitable for all skill levels
              </p>
            )}
          </div>

          <div className={classes["faq"]}>
            <div className={classes["question"]}>
              <p>Can I use Frontend Mentor projects in my portfolio? </p>
              <img
                role="button"
                src={thirdAnswer ? MinusIcon : PlusIcon}
                onClick={onThirdAnswerClickHandler}
              ></img>
            </div>
            {thirdAnswer && (
              <p>
                Yes, you can use projects completed on Frontend Mentor in your
                portfolio. It's an excellent way to showcase your skills to
                potential employers!
              </p>
            )}
          </div>

          <div className={classes["faq"]}>
            <div className={classes["question"]}>
              <p>
                How can I get help if I'm stuck on a Frontend Mentor challenge?{" "}
              </p>
              <img
                role="button"
                src={fourthAnswer ? MinusIcon : PlusIcon}
                onClick={onFourthAnswerClickHandler}
              ></img>
            </div>
            {fourthAnswer && (
              <p>
                The best place to get help is inside Frontend Mentor's Discord
                community. There's a help channel where you can ask questions
                and seek support from other community members.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
