const paletteBlocks = document.querySelectorAll('.palette-block');

paletteBlocks.forEach((block) => {
	block.addEventListener('click', (event) => {
		var tooltip = block.querySelector('.tooltip');
		copyToClipboard(tooltip.textContent);

		const oldText = tooltip.textContent;
		tooltip.textContent = 'Copied!';
		block.classList.add('copied');

		console.log(oldText);

		setTimeout(function () {
			block.classList.remove('copied');
			tooltip.textContent = oldText;
		}, 1800);
	});
});

function copyToClipboard(text) {
	var aux = document.createElement('input');
	aux.setAttribute('value', text);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand('copy');
	document.body.removeChild(aux);
}
