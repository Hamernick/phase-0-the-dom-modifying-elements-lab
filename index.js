const element = document.createElement("div");

document.body.append(element);

const ul = document.createElement("ul");

for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}

element.append(ul);

const newHeader = document.createElement("h1");

document.body.append(newHeader);

newHeader.className = "victory";

newHeader.textContent = "Caleb Hamernick is the champion";
