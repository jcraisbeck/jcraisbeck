// Inline menu loader - works without a web server
(function() {
	var menuHTML = `<nav id="menu">
	<h2>Menu</h2>
	<ul>
		<li><a href="index.html">Home</a></li>
		<li><a href="Contact.html">Contact</a></li>
		<li><a href="Biography.html">Biography</a></li>
		<li><a href="ResearchStatement.html">Research Statement</a></li>
		<li><a href="https://all.cs.umass.edu">Autonomous Learning Laboratory</a></li>

		<li><a href="https://curriculum-vitae.piofn.com">Curriculum Vitae</a></li>
	</ul>
</nav>`;

	// Insert menu before main.js runs
	var placeholder = document.getElementById('menu-placeholder');
	if (placeholder) {
		placeholder.innerHTML = menuHTML;
	}
})();
