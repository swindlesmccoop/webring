var webring = "https://swindlesmccoop.xyz/webring/webring.html"

fetch(webring)
	.then(response => response.text())
	.then(html => {
		const bannerDiv = document.querySelector('#banner-div');
		bannerDiv.innerHTML = html;

		const urls = Array.from(bannerDiv.querySelectorAll('a')).map(a => a.href);
		const randomIndex = Math.floor(Math.random() * urls.length);
		const randomUrl = urls[randomIndex];

		document.getElementById('random-link').addEventListener('click', (event) => {
			event.preventDefault();
			window.location.href = randomUrl;
		});

		document.getElementById('random-link').href = '#';
	})
	.catch(error => {
		console.error(error);
	});