let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)


{/* <script> */}
let popup = document.getElementById("btn_popup");

function openPopup() {
	popup.classList.add("open-popup");
}

function closePopup() {
	popup.classList.remove("open-popup");
}
{/* </script> */}