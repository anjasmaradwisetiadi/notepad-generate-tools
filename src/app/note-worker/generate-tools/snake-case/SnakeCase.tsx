import { Label, TextInput, Textarea, List, ListItem, ButtonGroup } from "flowbite-react";
import { Button } from "flowbite-react";
import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { toastConfig } from "@/app/shared/utilis/utilis";

export default function CamelCase() {
  const toast = toastConfig;

  const [inputText, setInputText] = useState("");
  const [resultText, setResultText] = useState("Result Your Text");

  const handleChangeInputResult = (e: Event) => {
    const valueTarget = e.target as HTMLInputElement;
    console.log("handleChangeInputResult = ");
    console.log(valueTarget.value);
  };
  function generateText() {
    console.log("generateText = ");
  }

  function clearText() {
    console.log("clearText = ");
  }

  function copyText() {
    const copyText = resultText;
    navigator.clipboard.writeText(copyText);

    toast.fire({
      icon: "success",
      title: "Successfully copy text!"
    });
  }
  return (
    <div className="grid items-center justify-items-center px-4 pb-4 gap-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 w-full row-start-2 items-center sm:items-start">
        <div className="w-full">
          <h4 className="text-3xl mb-6">Generate Tools </h4>
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
        <div className="w-full flex mb-3">
          <div className="me-2">
            <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800">
              Snake Case
            </Button>
          </div>
          <div className="me-2">
            <Button className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800">
              Camel Case
            </Button>
          </div>
          <div className="me-2">
            <Button className="bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 text-white hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800">
              Stripe Case
            </Button>
          </div>
          <div className="mx-8 px-8 border-l-2">
            <Button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
              Generate Text
            </Button>
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
              onChange={() => handleChangeInputResult}
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
