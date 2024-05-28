const randomDelay = () => {
  return new Promise((resolve, reject) => {
    timeout = 1 + 6 * Math.random();
    setTimeout(() => {
      resolve();
    }, timeout * 1000);
  });
};

const addItems = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.innerHTML = item;
  document.body.append(div);
};

async function main(){

    setInterval(()=>{
        let last = document.body.lastElementChild;
        last.innerHTML = last.innerHTML+"."
    },700)

    let text = [
        "Reading Your Files...",
        "Initializing Hacking...",
        "Password Files Detected...",
        "Sending All Password And Personal Files to Server...",
        "Cleaning Up...",
    ];

    for (const item of text) {
        await addItems(item);
    }
}
main();
