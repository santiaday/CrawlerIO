import React, {
  Component,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import "./LoaderStyles.css";

const Loader = () => {
  const wordBank = ["Reading", "Extracting", "Studying", "Running Code"];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("Running Code");

  useEffect(() => {
    let tempIndex = index;

    if (index === wordBank.length - 1) {
      console.log("INDEX IS EITHER -1 OR IT IS 4        " + index);
      setIndex(0);
      tempIndex = 0;
    } else {
      console.log("INDEX IS NEITHER        " + index);
      setIndex(index + 1);
      tempIndex++;
    }

    setTimeout(() => setText(wordBank[tempIndex]), 4000);
  }, [text]);

  return (
    <div class="loader-component-container">
      <div class="loader-container">
        <div class="left">
          <div class="first">
            <div class="first">
              <div class="first">
                <div class="first"></div>
              </div>
            </div>
          </div>
          <div class="second">
            <div class="second">
              <div class="second">
                <div class="second"></div>
              </div>
            </div>
          </div>
          <div class="third">
            <div class="third">
              <div class="third">
                <div class="third"></div>
              </div>
            </div>
          </div>
          <div class="fourth">
            <div class="fourth">
              <div class="fourth">
                <div class="fourth"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="first">
            <div class="first">
              <div class="first">
                <div class="first"></div>
              </div>
            </div>
          </div>
          <div class="second">
            <div class="second">
              <div class="second">
                <div class="second"></div>
              </div>
            </div>
          </div>
          <div class="third">
            <div class="third">
              <div class="third">
                <div class="third"></div>
              </div>
            </div>
          </div>
          <div class="fourth">
            <div class="fourth">
              <div class="fourth">
                <div class="fourth"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="loader-animation-text">{text}</div>
    </div>
  );
};

export default Loader;
