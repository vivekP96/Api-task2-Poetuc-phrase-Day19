const api_url = "https://poetrydb.org/title/Ozymandias/lines.json";
async function PoemData() {
  const response = await fetch(api_url);
  const data = await response.json();

  const pEle = document.createElement("p");

  pEle.style.textAlign = "center";
  pEle.style.fontSize = "32px";
  pEle.style.fontWeight = "bold";

  let random = Math.floor(Math.random() * 11);

  pEle.innerHTML = ` "${data[0].lines[random]}"`;
  const divele = document.getElementById("divele");
  divele.append(pEle);
}

const btnEle = document.getElementById("buttonid");

btnEle.addEventListener("click", () => {
  const divele = document.getElementById("divele");
  divele.innerHTML = "";
  PoemData();
});
