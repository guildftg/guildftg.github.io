/**
 * Shared NavBar component assumes boostrap and custom css files are loaded.
 */
class NavBar extends HTMLElement {
    connectedCallback() {
        const activeItem = Number(this.getAttribute("active-item"));
        const hrefOrigin = window.location.origin;
        const navItems = [
            { name: "About", url: hrefOrigin + "/index.html#aboutUs", active: activeItem == 1 ? "active" : "" },
            { name: "Loot System", url: hrefOrigin + "/loot/", active: activeItem == 2 ? "active" : "" },
            { name: "Raider Expectations", url: hrefOrigin + "/raiding/", active: activeItem == 3 ? "active" : "" },
            { name: "Raid Structure", url: hrefOrigin + "/raids/", active: activeItem == 4 ? "active" : "" },
            { name: "Leadership", url: hrefOrigin + "/leadership/", active: activeItem == 5 ? "active" : "" },
            { name: "Warcraft Logs", url: "https://fresh.warcraftlogs.com/guild/us/dreamscythe/ftg", active: "" },
            { name: "Join", url: "https://discord.gg/BXNDTVCyhf", active: "" }
        ];

        this.innerHTML = `
            <header class="sticky-top bg-dark">
                <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a href="/">
                    <img class="navbar-brand logo px-3 rounded-circle" style="max-height: 90px" src="${hrefOrigin}/assets/images/ftg_logo.png" alt="FTG Guild Logo">
                    <!-- <img 
                    class="navbar-brand logo px-3 rounded-circle"
                    style="max-height: 90px"
                    src="assets/images/ftg_logo.png"
                    srcset="
                        assets/images/ftg_logo-64.png 64w,
                        assets/images/ftg_logo-128.png 128w,
                        assets/images/ftg_logo-256.png 256w
                    "
                    sizes="90px"
                    decoding="async"
                    alt="FTG Guild Logo"> -->
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto">
                        ${navItems.map((_, i) => `
                            <li class="nav-item">
                            <a class="nav-link ${_.active}" href="${_.url}">${_.name}</a>
                            </li>
                        `).join('')}
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
        `;
    }
}

customElements.define("nav-bar", NavBar);