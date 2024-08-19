let para = document.querySelector("#para")
let paraContent = para.textContent
let words = paraContent.split(" ")
console.log(words)
let str = " "
for (let i = 0; i < words.length; i++) {
    str += "<span>" + words[i] + " </span>"
}
para.innerHTML = str;

console.log(str)
para.addEventListener("click", (e) => {
    e.target.style.backgroundColor = "green"
})