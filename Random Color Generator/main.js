const colors = [
	"#FFFFD0",
	"#FB2576",
	"#F0FF42",
	"#B3FFAE",
	"#72FFFF",
	"#00FFAB",
	"#DDFFBC",
	"#FA1E0E",
	"#FFF600",
	"#E6B325",
	"#D6E4E5",
	"#EB6440",
	"#00FFF6",
	"#FCCDE2",
	"#C5E3F6",
	"#F4E022",
	"#F6C90E",
	"#D4ECDD",
	"#CEDE48",
	"#3B939B",
	"#FF2626",
	"#88D498",
	"#7C6FFF",
	"#E60965",
	"#F94892",
	"#B8B5FF",
	"#B9F9FF",
	"#DED7B1",
	"#C4F0C5",
	"#66D37E",
];

console.log(colors.length);

let btnColorChanger = document.querySelector(".btn");
let colorCode = document.querySelector(".color-code");

btnColorChanger.addEventListener("click", () => {
	let randomNumber = Math.floor(Math.random() * colors.length);

	document.body.style.backgroundColor = colors[randomNumber];
	colorCode.innerText = colors[randomNumber];
});
