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

export { toastConfig, camelCasePattern, snakeCasePattern, stripCasePattern };
