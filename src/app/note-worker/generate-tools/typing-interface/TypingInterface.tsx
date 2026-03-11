import { Label, TextInput, Textarea, List, ListItem, ButtonGroup, Button } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
export default function TypingInterface() {
  return (
    <div className="grid items-center justify-items-center px-4 pb-4 gap-4 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 w-full row-start-2 items-center sm:items-start">
        <div className="w-full">
          <h4 className="text-3xl mb-6">Generate Tools </h4>
          <p>You can choice generate text where options:</p>
          <List>
            <ListItem icon={HiCheckCircle}>
              <span className="ps-2"> This feature for make typing from objeck to typing interface typecsript</span>
            </ListItem>
          </List>
        </div>
        <div className="w-full flex mb-3">
          <div className="">
            <Button className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 text-white hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800">
              Generate Text
            </Button>
          </div>
        </div>
        <div className="w-full block">
          <div className="mb-2 block">
            <Label className="font-semibold">Input : </Label>
          </div>
          <Textarea className="w-full p-2" id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>

        <div className="w-full block">
          <div className="mb-2 block">
            <Label className="font-semibold">Result : </Label>
          </div>
          <Textarea className="w-full p-2" id="comment" placeholder="Leave a comment..." required rows={4} />
        </div>
      </main>
    </div>
  );
}
