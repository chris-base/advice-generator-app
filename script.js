const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    method: "GET",
    headers: {
      "Content-Type": "text/plain",
    },
    cache: "no-cache",
    // body: JSON.stringify({}),
  });
  const json = await response.json();
  // console.log(await json["slip"]);
  document.getElementById("adviceNumberText").innerHTML = `Advice #${await json["slip"]["id"]}`;
  document.getElementById("adviceText").innerHTML = `${await json["slip"]["advice"]}`;
};

document.getElementById("newAdviceButton").addEventListener("click", fetchAdvice);
fetchAdvice();
