import Swal from "sweetalert2";

const toastConfig = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2200,
  timerProgressBar: true,
  didOpen: toast => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

const camelCasePattern = (inputText: string) => {
  let text = inputText
    .trim()
    .split(" ")
    .filter(word => {
      if (word.length > 0) {
        return word.toLowerCase();
      }
    });
  text = text.map((word, index) => {
    if (index > 0) {
      const wordFirst = word[0].toUpperCase();
      const wordReduce = word.slice(1);
      return wordFirst + wordReduce.toLowerCase();
    }
    return word;
  });
  return text.join("");
};

const snakeCasePattern = (inputText: string) => {
  const text = inputText
    .trim()
    .split(" ")
    .filter(word => {
      if (word.length > 0) {
        return word.toLowerCase();
      }
    })
    .join("_")
    .toLowerCase();
  return text;
};

const stripCasePattern = (inputText: string) => {
  const text = inputText
    .trim()
    .split(" ")
    .filter(word => {
      if (word.length > 0) {
        return word;
      }
    })
    .join("-")
    .toLowerCase();
  return text;
};

const typingGenerator = (input: string, type: "json" | "object" | string) => {
  const inputWhitesapce = input.replace(/\s/g, "").toString();
  const jsonParse = JSON.parse(inputWhitesapce);
  
  let resultText = ``;
  let text = "text";
  if (type === "json") {
    const objectEntries = Object.entries(jsonParse);
    objectEntries.forEach(([key, value], index) => {
      if (index === 0) {
        resultText += `{\n`;
        resultText = formatingInterfaceGenerator(resultText, key, value, index, objectEntries);
      } else if (Object.entries(jsonParse).length - 1 === index) {
        resultText = formatingInterfaceGenerator(resultText, key, value, index, objectEntries);
        resultText += `}`;
      } else {
        resultText = formatingInterfaceGenerator(resultText, key, value, index, objectEntries);
      }
    });

    text = "json";
  } else {
    text = "object";
  }
  return resultText;
};

const formatingInterfaceGenerator = (
  resultText: string,
  key: string,
  value: any,
  index: number,
  jsonParse: [string, unknown][]
) => {
  if (typeof value === "string") {
    resultText += `\t ${key}:string;\n`;
  } else if (typeof value === "number") {
    resultText += `\t ${key}:number;\n`;
  } else if (typeof value === "boolean") {
    resultText += `\t ${key}:boolean;\n`;
  } else if (value === undefined) {
    resultText += `\t ${key}:undefined;\n`;
  } else if (value === null) {
    resultText += `\t ${key}:null;\n`;
  } else if (jsonParse.length - 1 === index) {
    resultText += `\n}`;
  } else {
    resultText += ` \t ${key}:any;\n`;
  }
  return resultText;
};

export { toastConfig, camelCasePattern, snakeCasePattern, stripCasePattern, typingGenerator };
