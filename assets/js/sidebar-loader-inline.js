// Inline sidebar loader for Editorial — single source of truth for the nav.
// Populates <div id="sidebar-placeholder"></div> on every page.
(function () {
	var sidebarHTML = `<div id="sidebar">
	<div class="inner">

		<!-- Portrait -->
			<section id="portrait">
				<a href="/Biography.html" class="image fit"><img src="/images/Franconia_portrait.jpeg" alt="Portrait" /></a>
			</section>

		<!-- Menu -->
			<nav id="menu">
				<header class="major">
					<h2>Menu</h2>
				</header>
				<ul>
					<li><a href="/index.html">Home</a></li>
					<li><a href="/Publications.html">list of publications</a></li>
					<li>
						<span class="opener">About</span>
						<ul>
							<li><a href="/Biography.html">Biography</a></li>
							<li><a href="/Contact.html">Contact</a></li>
						</ul>
					</li>
					<li>
						<span class="opener">Research</span>
						<ul>
							<li><a href="/ResearchStatement.html">Research Statement</a></li>
						</ul>
					</li>
					<li>
						<span class="opener">Papers</span>
						<ul>
							<li><a href="/papers/DifferentialExpressivity.html">Differential Expressivity</a></li>
							<li><a href="/papers/AltNet.html">AltNet</a></li>
							<li><a href="/papers/AgentSpaces.html">Agent Spaces</a></li>
							<li><a href="/papers/EvolutionStrategiesConvergesToFiniteDifferences.html">ES Converges to FD</a></li>
							<li><a href="/papers/ES+AgentSpaces.html">ES + Agent Spaces</a></li>
						</ul>
					</li>
					<li>
						<span class="opener">Writing</span>
						<ul>
							<li><a href="/posts.html">All Posts</a></li>
							<li><a href="/posts/not_so_gradient_free.html">Not So Gradient Free</a></li>
							<li><a href="/posts/Research_Interest.html">Getting Into Research</a></li>
						</ul>
					</li>
					<li><a href="https://curriculum-vitae.piofn.com">Curriculum Vitae</a></li>
				</ul>
			</nav>

		<!-- Get in touch -->
			<section>
				<header class="major">
					<h2>Get in touch</h2>
				</header>
				<p>For collaboration, questions on any of my work, or general research discussion, please feel free to reach out.</p>
				<ul class="contact">
					<li class="icon solid fa-envelope"><a href="mailto:john@jcraisbeck.com">john@jcraisbeck.com</a></li>
					<li class="icon brands fa-github"><a href="https://github.com/jcraisbeck">github.com/jcraisbeck</a></li>
					<li class="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/jcraisbeck/">linkedin.com/in/jcraisbeck</a></li>
					<li class="icon brands fa-twitter"><a href="https://twitter.com/jcraisbeck">@jcraisbeck</a></li>
					<li class="icon brands fa-researchgate"><a href="https://www.researchgate.net/profile/John-Raisbeck">ResearchGate</a></li>
					<li class="icon-scholar"><a href="https://scholar.google.com/citations?user=XthOL3QAAAAJ&hl=en">Google Scholar</a></li>
					<li class="icon brands fa-orcid"><a href="https://orcid.org/0009-0003-3586-4298">ORCID</a></li>
				</ul>
			</section>

		<!-- Footer -->
			<footer id="footer">
				<p class="copyright">&copy; John C. Raisbeck. All rights reserved. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
			</footer>

	</div>
</div>`;

	var placeholder = document.getElementById('sidebar-placeholder');
	if (placeholder) {
		placeholder.outerHTML = sidebarHTML;
	}
})();
