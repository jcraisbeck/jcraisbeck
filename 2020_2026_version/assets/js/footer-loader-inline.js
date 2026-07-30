// Inline footer loader - works without a web server
(function() {
	var footerHTML = `<footer id="footer">
	<div class="inner">
		<!--
		<section>
			<h2>Contact Me</h2>
			<form method="post" action="#">
				<div class="fields">
					<div class="field half">
						<input type="text" name="name" id="name" placeholder="Name" />
					</div>
					<div class="field half">
						<input type="email" name="email" id="email" placeholder="Email" />
					</div>
					<div class="field">
						<textarea name="message" id="message" placeholder="Message"></textarea>
					</div>
				</div>
				<ul class="actions">
					<li><input type="submit" value="Send" class="primary" /></li>
				</ul>
			</form>
		</section>
		-->
		<section>
			<h2>Find Me</h2>
			<ul class="icons">
				<li><a href="Contact.html" class="icon solid style2 fa-envelope"><span class="label">Email</span></a></li>
				<li><a href="https://twitter.com/jcraisbeck" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
				<li><a href="https://github.com/jcraisbeck" class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
				<li><a href="https://www.linkedin.com/in/jcraisbeck/" class="icon brands style2 fa-linkedin"><span class="label">LinkedIn</span></a></li>
				<li><a href="https://www.researchgate.net/profile/John-Raisbeck" class="icon brands style2"><i class='fab fa-researchgate fa-lg'></i><span class="label">Research Gate</span></a></li>
				<li><a href="https://scholar.google.com/citations?user=XthOL3QAAAAJ&hl=en" class="icon brands style2"><i class="fab icon-scholar fa-lg"></i><span class="label"> Google Scholar </span></a></li>
				<li><a href="https://orcid.org/0009-0003-3586-4298" class="icon brands style2 fa-orcid"><span class="label">ORCID</span></a></li>
			</ul>
		</section>
		<ul class="copyright">
			<li>&copy; John C. Raisbeck. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
		</ul>
	</div>
</footer>`;

	// Insert footer before scripts run
	var placeholder = document.getElementById('footer-placeholder');
	if (placeholder) {
		placeholder.outerHTML = footerHTML;
	}
})();
