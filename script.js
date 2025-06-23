const extensions = [
  {
    name: "DevLens",
    description: "Quickly inspect page layouts and visualize element boundaries.",
    status: "active",
    icon: "assets/images/logo-devlens.svg",
    
  },
  {
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    status: "inactive",
    icon: "assets/images/logo-speed-boost.svg"
  },
  {
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    status: "active",
    icon: "assets/images/logo-tab-master-pro.svg"
  },
  {
    name: "stylespy",
    description: "Instant analysis of CSS styles and layout issues.",
    status: "active",
    icon: "assets/images/logo-style-spy.svg"
  },
  {
    name: "JSONWizard",
    description: "formmats,validates and prettiflies JSON responses in-browser",
    status: "active",
    icon: "assets/images/logo-json-wizard.svg"
  },
  {
    name:"viewportBuddy",
    description: "Visualizes and adjusts viewport dimensions for responsive design testing.",
    status: "inactive",
    icon: "assets/images/logo-viewport-buddy.svg"
  },
  {
    name: "Markup Notes",
    description: "Enable annotation and notes on web pages for collaborative feedback.",
    status: "active",
    icon: "assets/images/logo-markup-notes.svg"

  },
  {
    name: "Grid Guides",
    description: "Overlay customizable grids and alignent guides on any webpage.",
    status: "inactive",
    icon: "assets/images/logo-grid-guides.svg"
  },
  {
    name: "LinkChecker",
    description: "Automatically checks and validates all links on a page.",
    status: "active",
    icon: "assets/images/logo-link-checker.svg"
  },
  {
    name: "Palette Picker",
    description: "Instantly extract and analyze color palettes from any webpage.",
    status: "active",
    icon: "assets/images/logo-palette-picker.svg"
  },
  {
    name:"DOM Snapshot",
    description: "Capture and analyze the current DOM state for debugging.",
    status: "inactive",
    icon: "assets/images/logo-dom-snapshot.svg"
  },
  {
    name:"consolePlus",
    description: "Enhances the browser console with advanced debugging features.",
    status: "active",
    icon: "assets/images/logo-console-plus.svg"
  }

];
const container = document.getElementById("extension-list");

function renderCards(filter = "all") {
  container.innerHTML = "";
  let filtered = extensions;
  if (filter === "active") filtered = extensions.filter(e => e.status === "active");
  else if (filter === "inactive") filtered = extensions.filter(e => e.status === "inactive");

  filtered.forEach(ext => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${ext.icon}" alt="${ext.name}" />
    <h2>${ext.name}</h2>
    <p>${ext.description}</p>
    <label class="switch">
      <input type="checkbox" data-name="${ext.name}" ${ext.status === "active" ? "checked" : ""}>
      <span class="slider"></span>
      <span class="status-label">${ext.status === "active" ? "Active" : "Inactive"}</span>
    </label>
    <div class="button-group">
      <button class="remove-btn" onclick="alert('Removed ${ext.name}')">Remove</button>
    </div>
    `;
    // Add event listener for toggle switch
    card.querySelector('input[type="checkbox"]').addEventListener('change', function() {
      const extName = this.getAttribute('data-name');
      const extObj = extensions.find(e => e.name === extName);
      extObj.status = this.checked ? "active" : "inactive";
      // Re-render with current filter to instantly move card
      renderCards(filter);
    });
    container.appendChild(card);
  });
}

document.getElementById("filter-all").onclick = () => renderCards("all");
document.getElementById("filter-active").onclick = () => renderCards("active");
document.getElementById("filter-inactive").onclick = () => renderCards("inactive");

renderCards();

document.getElementById('theme-toggle').onclick = function() {
  document.body.classList.toggle('dark-theme');
}
