import { Label, TextInput, Textarea, List, ListItem, ButtonGroup } from "flowbite-react";
import { Button } from "flowbite-react";
import { ChangeEvent, useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toastConfig, camelCasePattern, snakeCasePattern, stripCasePattern } from "@/app/shared/utilis/utilis";
import { Card } from "flowbite-react";
import styles from "./index.module.scss";
import { MdCheckCircle } from "react-icons/md";
import { textGeneratedDto } from "./text-generate.dto";

export default function CamelCase() {
  const toast = toastConfig;
  const listModeText: textGeneratedDto.listModeText[] = [
    {
      value: "strip-case",
      label: "Strip"
    },
    {
      value: "snake-case",
      label: "Snake"
    },
    {
      value: "camnel-case",
      label: "Camel"
    }
  ];

  const [modeText, setModeText] = useState({
    value: "strip-case",
    label: "Stripe"
  });
  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("");

  const handleChangeInputResult = (e: ChangeEvent) => {
    const valueTarget = e.target as HTMLInputElement;
    setInputText(valueTarget.value);
  };
  function generateText() {
    console.log("generateText = ");
    let textConvert = "";
    // snake-case convert
    switch (modeText.value) {
      case "camnel-case":
        textConvert = camelCasePattern(inputText);
        break;
      case "snake-case":
        textConvert = snakeCasePattern(inputText);
        break;
      default:
        textConvert = stripCasePattern(inputText);
        break;
    }

    setResultText(textConvert);
    toast.fire({
      icon: "success",
      title: "Successfully convert text !"
    });
  }

  function clearText() {
    setInputText("");
    setResultText("");
    toast.fire({
      icon: "success",
      title: "Successfully clear text !"
    });
  }

  function copyText() {
    const copyText = resultText;
    navigator.clipboard.writeText(copyText);

    toast.fire({
      icon: "success",
      title: "Successfully copy text !"
    });
  }

  const textModeSelected = (val: textGeneratedDto.listModeText) => (event: React.MouseEvent<HTMLDivElement>) => {
    setModeText({
      value: val.value,
      label: val.label
    });
  };

  return (
    <div className="grid items-center justify-items-center px-4 pb-4 gap-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 w-full row-start-2 items-center sm:items-start">
        <div className="w-full">
          <h4 className="text-2xl mb-6">Generate Text Tools </h4>
          <p>You can choice generate text where options:</p>
          <List>
            <ListItem icon={HiCheckCircle}>
              {" "}
              <span className="ps-2"> Generate text to Snake Case</span>
            </ListItem>
            <ListItem icon={HiCheckCircle}>
              {" "}
              <span className="ps-2"> Generate text to Camel Case</span>
            </ListItem>
            <ListItem icon={HiCheckCircle}>
              {" "}
              <span className="ps-2"> Generate text to Stripe Case</span>
            </ListItem>
          </List>
        </div>
        <div className="w-full mb-3">
          <div className="">
            <h4 className="text-xl mb-6">Choice Generate Text </h4>
          </div>
          <div className="option-text-container flex">
            {listModeText.map((item, index) => {
              return (
                <div className="text-mode-case" key={index}>
                  <div className={styles["card-style"] + " relative my-3 mx-5"} onClick={textModeSelected(item)}>
                    {item.value === modeText.value && (
                      <span
                        className={
                          styles["black_border"] +
                          " absolute py-1 px-3 -left-6 -top-2 -rotate-[10deg] border bg-cyan-600 border-black text-white font-bold"
                        }
                      >
                        <MdCheckCircle />
                      </span>
                    )}

                    <div className={styles["purple_border"] + " p-4 border border-black"}>
                      Mode
                      <span className="font-mono text-cyan-700 font-bold"> {item.label} </span>
                      Case
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2 className="text-2xl">
            Mode : <span className="font-bold">Snake Case</span>
          </h2>
        </div>
        <div className="w-full block">
          <div className="input-container">
            <div className="mb-2 block">
              <Label className="font-semibold">Input : </Label>
            </div>
            <Textarea
              className="w-full p-2"
              id="comment"
              placeholder="Input your text in here..."
              required
              rows={4}
              value={inputText}
              onChange={handleChangeInputResult}
            />
          </div>
          <div className="w-full flex mb-3 gap-x-6 my-4">
            <div className="">
              <Button
                className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800 px-4 py-2.5 rounded"
                onClick={() => generateText()}
              >
                Generate Text
              </Button>
            </div>
            <div className="">
              <Button
                className="text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
                onClick={() => clearText()}
              >
                Clear Text
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full block">
          <div className="input-result">
            <div className="mb-2 block">
              <Label className="font-semibold">Result : </Label>
            </div>
            <Textarea
              className="w-full p-2"
              id="comment"
              placeholder="Result text in here"
              required
              rows={4}
              disabled={true}
              value={resultText}
            />
          </div>
          <div className="w-full flex mb-3 gap-x-6 my-4">
            <div className="">
              <Button
                className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800 px-4 py-2.5 rounded"
                onClick={() => copyText()}
              >
                Copy Text
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
