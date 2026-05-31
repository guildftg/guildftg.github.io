/**
 * Shared NavBar component assumes boostrap and custom css files are loaded.
 */
class FooterBar extends HTMLElement {
    connectedCallback() {
        const hrefOrigin = window.location.origin;

        this.innerHTML = `
            <footer class="container mt-5 py-5">
                <div class="row">
                    <div class="col-md-4">
                        <img class="logo rounded-circle" style="max-height: 100px" src="${hrefOrigin}/assets/images/ftg_logo.png" alt="FTG Logo">
                        <!-- <img 
                        class="logo rounded-circle"
                        style="max-height: 100px"
                        src="assets/images/ftg_logo.png"
                        srcset="
                            assets/images/ftg_logo-64.png 64w,
                            assets/images/ftg_logo-128.png 128w,
                            assets/images/ftg_logo-256.png 256w
                        "
                        sizes="100px"
                        loading="lazy"
                        decoding="async"
                        alt="FTG Logo"> -->
                        <small class="d-block text-muted mt-3">
                            © 2026 FTG Guild
                            <a href="${hrefOrigin}/login" class="text-muted ms-2" style="text-decoration: none;">Login</a>
                        </small>
                    </div>
                <div id="aboutUs" class="col-md-8">
                    <h3>About FTG</h3>
                    <p>FTG is a raiding guild built on stability, consistency, and shared responsibility. We combine structured leadership, intentional raid systems, and a supportive community culture to create an environment where players can perform, improve, and enjoy the game without unnecessary friction. Our focus is on reliable execution, clear expectations, and maintaining a guild where effort, preparation, and respect are recognized and rewarded.</p>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define("footer-bar", FooterBar);