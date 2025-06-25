// 1. Random Emoji Generator

let emoji=document.querySelector(".emojis");
let texts=document.querySelector(".texts")
emojis=[
  {icon:"😀",text:"Grinning Face"},
  {icon:"😎",text:"Cool Shades"},
  {icon:"😡",text:"Angry Face"},
  {icon:"😍",text:"Heart Eyes"},
  {icon:"🤔",text:"Thinking Face"},
  {icon:"😴",text:"Sleeping Face"},
  {icon:"😱",text:"Shocked Face"},
  {icon:"🤗",text:"Hugging Face"},
  {icon:"😇",text:"Angel Mode"},
  {icon:"🤩",text:"Star-Struck"},
  {icon:"🥳",text:"Party Time"},
]
emoji.addEventListener("mouseover",()=> {
    let randomIndex = Math.floor(Math.random() * emojis.length);
    emoji.innerHTML = emojis[randomIndex].icon;
    texts.innerHTML = emojis[randomIndex].text;
})


