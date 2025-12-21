// each pattern is a list of lines to be loaded into a TreeView element
var PATTERNS = [
    [
        "  ∧,,,∧",
        "(  ̳• · • ̳)",
        "/    づ♡ I love you"
    ],
    [
        "☆ *　. 　☆",
        "　　. ∧＿∧　∩　* ☆",
        "* ☆ ( ・∀・)/ .",
        "　. ⊂　　 ノ* ☆",
        "☆ * (つ ノ .☆",
        "　　 (ノ"
    ],
    [
        "⠀⠀⣀⣀⣠⣀⣀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣀⣀⡀⠀",
        "⢰⠋⠀⠀⠀⠀⠀⠉⠲⣄⠀⢀⠔⠋⠁⠀⠀⠀⠀⠉⡆",
        "⠈⢑⠖⠂⠀⢀⠔⠒⢢⠘⣦⠏⡴⠒⠲⡄⠀⠀⠲⡚⠁",
        "⠀⠈⠒⢲⠀⢸⡀⠓⠊⣠⠋⢆⠙⠚⢀⡇⠀⡖⠖⠁⠀",
        "⠀⠀⠀⠀⠉⠉⠈⠉⠉⠀⠀⠀⠉⠉⠁⠈⠉⠁⠀⠀⠀"
    ],
    [
        "　　　-ゆめうつつ-",
        "01:43 ━━━━●───── 05:16",
        "　　　⇆ㅤ ㅤ◁ㅤ ❚❚ ㅤ▷ ㅤㅤ↻﻿",
        "　　　ılıılıılıılıılıılı",
        "ᴠᴏʟᴜᴍᴇ : ▮▮▮▮▮▮"
    ]
]

var random_pattern = PATTERNS[Math.floor(Math.random() * PATTERNS.length)]

var tree = document.getElementById("sidebar-tree")
if (tree) {
    for (let index = 0; index < random_pattern.length; index++) {
        var listElement = document.createElement("li")
        listElement.appendChild(document.createTextNode(random_pattern[index]))
        tree.appendChild(listElement)
    }
}