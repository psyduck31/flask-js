var but = document.getElementsByClassName("btn btn-primary fold-button");

function doSomeThing()
{
	if (event.target.className == "btn btn-primary fold-button folded")
	{
		event.target.innerHTML = "Свернуть"
		event.target.className = "btn btn-primary fold-button"
		var displayState = "block"
	}
	else
	{
		event.target.innerHTML = "Развернуть"
		event.target.className = "btn btn-primary fold-button folded"
		var displayState = "none"
	}
	event.target
		.parentElement
		.getElementsByClassName("content")[0]
		.style.display = displayState
}

for (var i = 0; i < but.length; i++)
{
	but[i].addEventListener('click', doSomeThing)
}