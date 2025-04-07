/**
 * DocTool - Combined JavaScript
 * This file combines all the JavaScript modules from the src/js directory
 */

  
  /******************************************************************************
   * SVG Icons
   ******************************************************************************/
  
  const svg = {
    moon: `<svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
      ></path>
    </svg>`,
    sun: ` <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"
    ></path>
  </svg>`,
    arrow: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path></svg>`,
    copy: `<svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 15 15" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1 9.50006C1 10.3285 1.67157 11.0001 2.5 11.0001H4L4 10.0001H2.5C2.22386 10.0001 2 9.7762 2 9.50006L2 2.50006C2 2.22392 2.22386 2.00006 2.5 2.00006L9.5 2.00006C9.77614 2.00006 10 2.22392 10 2.50006V4.00002H5.5C4.67158 4.00002 4 4.67159 4 5.50002V12.5C4 13.3284 4.67158 14 5.5 14H12.5C13.3284 14 14 13.3284 14 12.5V5.50002C14 4.67159 13.3284 4.00002 12.5 4.00002H11V2.50006C11 1.67163 10.3284 1.00006 9.5 1.00006H2.5C1.67157 1.00006 1 1.67163 1 2.50006V9.50006ZM5 5.50002C5 5.22388 5.22386 5.00002 5.5 5.00002H12.5C12.7761 5.00002 13 5.22388 13 5.50002V12.5C13 12.7762 12.7761 13 12.5 13H5.5C5.22386 13 5 12.7762 5 12.5V5.50002Z" fill="currentColor"></path></svg>`,
    copied: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path></svg>`,
    folder: `<svg class="svg-inline--fa fa-folder mr-2 text-yellow-500 directory-collapsible" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="folder" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z"></path></svg>`
  };
  
  const svgAlertIconsMap = {
    info: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path></svg>`,
    warning: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>`,
    caution: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zM480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416zm32 352a48.01 48.01 0 0 1 0-96 48.01 48.01 0 0 1 0 96z"></path></svg>`,
    danger: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"></path></svg>`,
    success: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"></path></svg>`,
    tip: `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"></path></svg>`,
  };
  
  /******************************************************************************
   * Theme Functions
   ******************************************************************************/
  
  // Code highlighting themes
  const mdCodeTheme = {
    light: `pre code.hljs {
      display: block;
      overflow-x: auto;
      padding: 1em;
    }
    code.hljs {
      padding: 3px 5px;
    }
    .hljs {
      background: #fff;
      color: #000;
    }
    .hljs-comment,
    .hljs-quote,
    .hljs-variable {
      color: green;
      /* font-style: italic; */
    }
    .hljs-built_in,
    .hljs-keyword,
    .hljs-name,
    .hljs-selector-tag,
    .hljs-tag {
      color: #00f;
    }
    .hljs-addition,
    .hljs-attribute,
    .hljs-literal,
    .hljs-section,
    .hljs-string,
    .hljs-template-tag,
    .hljs-template-variable,
    .hljs-title,
    .hljs-type {
      color: #a31515;
    }
    .hljs-deletion,
    .hljs-meta,
    .hljs-selector-attr,
    .hljs-selector-pseudo {
      color: #2b91af;
    }
    .hljs-doctag {
      color: grey;
    }
    .hljs-attr {
      color: red;
    }
    .hljs-bullet,
    .hljs-link,
    .hljs-symbol {
      color: #00b0e8;
    }
    .hljs-emphasis {
      font-style: italic;
    }
    .hljs-strong {
      font-weight: 700;
    }
    `,
    dark: `pre code.hljs {
          display: block;
          overflow-x: auto;
          padding: 1em;
        }
        code.hljs {
          padding: 3px 5px;
        }
        .hljs {
          background: #1e1e1e;
          color: #dcdcdc;
        }
        .hljs-keyword,
        .hljs-literal,
        .hljs-name,
        .hljs-symbol {
          color: #569cd6;
        }
        .hljs-link {
          color: #569cd6;
          text-decoration: underline;
        }
        .hljs-built_in,
        .hljs-type {
          color: #4ec9b0;
        }
        .hljs-class,
        .hljs-number {
          color: #b8d7a3;
        }
        .hljs-meta .hljs-string,
        .hljs-string {
          color: #d69d85;
        }
        .hljs-regexp,
        .hljs-template-tag {
          color: #9a5334;
        }
        .hljs-formula,
        .hljs-function,
        .hljs-params,
        .hljs-subst,
        .hljs-title {
          color: #dcdcdc;
        }
        .hljs-comment,
        .hljs-quote {
          color: #57a64a;
          font-style: italic;
        }
        .hljs-doctag {
          color: #608b4e;
        }
        .hljs-meta,
        .hljs-meta .hljs-keyword,
        .hljs-tag {
          color: #9b9b9b;
        }
        .hljs-template-variable,
        .hljs-variable {
          color: #bd63c5;
        }
        .hljs-attr,
        .hljs-attribute {
          color: #9cdcfe;
        }
        .hljs-section {
          color: gold;
        }
        .hljs-emphasis {
          font-style: italic;
        }
        .hljs-strong {
          font-weight: 700;
        }
        .hljs-bullet,
        .hljs-selector-attr,
        .hljs-selector-class,
        .hljs-selector-id,
        .hljs-selector-pseudo,
        .hljs-selector-tag {
          color: #d7ba7d;
        }
        .hljs-addition {
          background-color: #144212;
          display: inline-block;
          width: 100%;
        }
        .hljs-deletion {
          background-color: #600;
          display: inline-block;
          width: 100%;
        }
        `
  };
  
  // Build theme switch toggle
  function buildSwitch() {
    document.querySelector("#divthemeswitch").innerHTML = `  
      <input type="checkbox" onchange="toggleTheme()" class="checkbox-theme" id="chkthemechanger" />
      <label for="chkthemechanger" class="checkbox-label">
        <i class="moon">${svg.moon}</i>
        <i class="sun">${svg.sun}</i>
        <span class="ball"></span>
      </label>`;
  }
  
  // Set CSS variables from config
  function setCSSConfig(config) {
    const { light = "#0969da", dark = "#00e1ff" } = config.color || {};
    document.documentElement.style.setProperty("--color-scheme-light", light);
    document.documentElement.style.setProperty("--color-scheme-dark", dark);
  }
  
  // Set theme and update localStorage
  function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    
    // Update code theme
    const themeKey = themeName.replace("theme-", "");
    const style = document.querySelector("#mdCodeTheme") || document.createElement("style");
    style.id = "mdCodeTheme";
    style.innerHTML = mdCodeTheme[themeKey];
    document.head.appendChild(style);
  }
  
  // Toggle between light and dark themes
  const toggleTheme = () => 
    setTheme(localStorage.getItem("theme") === "theme-dark" ? "theme-light" : "theme-dark");
  
  // Apply theme from localStorage
  function ApplyThemeFromLS() {
    const isDark = localStorage.getItem("theme") === "theme-dark";
    setTheme(isDark ? "theme-dark" : "theme-light");
    document.getElementById("chkthemechanger").checked = isDark;
  }
  
  /******************************************************************************
   * Layout Functions
   ******************************************************************************/
  
  var showNav = false;
  function toggle() {
    if (showNav) openNav();
    else closeNav();
    showNav = !showNav;
  }
  
  function openNav() {
    document.getElementById("mySidebar").style.width = "20%";
    document.getElementById("main").style.marginLeft = "20%";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  
  function ShowHideLoading(isShow) {
    if (isShow) {
      document.querySelector(".spinner").style.display = "block";
      document.querySelector(".breadcrumb-container").style.display = "none";
    } else {
      document.querySelector(".spinner").style.display = "none";
      document.querySelector(".breadcrumb-container").style.display = "block";
    }
  }
  
  function ApplyScrolling() {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset >= 50) {
        document.querySelector("#backtotop").style.display = "block";
      } else {
        document.querySelector("#backtotop").style.display = "none";
      }
    });
  
    document.querySelector("#backtotop").addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
  
  /******************************************************************************
   * Header Functions
   ******************************************************************************/
  
  /**
   * Build the header with title and menu toggle button
   * @param {Object} config - Configuration object
   */
  function buildHeader(config) {
    const title = config.title || "Docs";
    document.title = title;
    
    document.querySelector("#divheadertitle").innerHTML = `  
      <button class="openbtn" onclick="toggle()">☰</button>
      <span class="page-header-text">${title}</span>`;
  }
  
  /******************************************************************************
   * Breadcrumb Functions
   ******************************************************************************/
  
  // Track last selected item for edit functionality
  let breadParamsItem;
  
  /**
   * Create breadcrumb navigation from path items
   * @param {string} target - CSS selector for container
   * @param {Array} items - Array of path segments
   */
  function BreadCrumb(target, items) {
    const container = document.querySelector(target);
    container.innerHTML = "";
    
    const ul = Object.assign(document.createElement("ul"), {
      className: "breadcrumb"
    });
    
    items.forEach((item, i) => {
      const li = document.createElement("li");
      
      // Add edit button to the last item
      if (i === items.length - 1) {
        li.innerHTML = `
          <span class="breadcrumb-last-item">${item}</span>
          <span class="breadcrumb-edit-icon" onclick="editContent(this)">✏️</span>
        `;
      } else {
        li.innerHTML = `<span>${item}</span>`;
      }
      
      ul.appendChild(li);
    });
    
    container.appendChild(ul);
  }
  
  /**
   * Create breadcrumb items from path parameters
   * @param {Object} params - Path parameters object
   * @returns {Array} - Array of breadcrumb items
   */
  function GetBreadItems(params) {
    breadParamsItem = params;
    const items = ["🏠 Home"];
    
    // Process folder path segments
    const names = params.FolderPath.split("\\").filter(segment => segment !== "");
    
    // Remove "docs" or "na" from the beginning if present
    if (names.length > 0) {
      const firstFolder = (names[0] || "").toLowerCase();
      if (firstFolder === "na" || firstFolder === "docs") {
        names.shift();
      }
    }
    
    // Add folder names to breadcrumb
    items.push(...names);
    
    // Add the file name
    items.push(params.DisplayName);
    
    return items;
  }
  
  /**
   * Open file editor in a modal popup
   * @param {HTMLElement} element - The edit button element
   */
  function editContent(element) {
    // Get path from breadcrumb
    const li = element.closest("li");
    const ul = li.parentElement;
    const path = [];
    
    // Extract path segments from breadcrumb items
    ul.querySelectorAll("li span:first-child").forEach(span => {
      path.push(span.textContent.trim());
    });
    
    // Form folder path and file name
    const fileName = path[path.length - 1];
    const folderPath = path.slice(1, -1).join("\\");
    
    // Prepare URL parameters
    const params = { FileName: fileName, FolderPath: folderPath };
    const queryString = new URLSearchParams(params).toString();
    const url = `edit.html?${queryString}`;
    
    // Create modal elements
    const modal = createModal(url);
    const overlay = createOverlay();
    
    // Setup event handlers for closing
    overlay.onclick = () => {
      document.body.removeChild(modal);
      document.body.removeChild(overlay);
    };
    
    // Add elements to DOM
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
  }
  
  /**
   * Create modal window for editor
   * @param {string} url - URL to load in iframe
   * @returns {HTMLElement} - Modal element
   */
  function createModal(url) {
    const modal = document.createElement("div");
    Object.assign(modal.style, {
      display: "block",
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: "1000",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      border: "1px solid #ccc",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      width: "95%",
      height: "95%"
    });
    
    // Create iframe
    const iframe = document.createElement("iframe");
    Object.assign(iframe.style, {
      width: "100%",
      height: "100%",
      border: "none"
    });
    iframe.src = url;
    
    // Create close button
    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    Object.assign(closeButton.style, {
      position: "absolute",
      top: "1px",
      right: "20px",
      color: "red",
      cursor: "pointer",
      fontSize: "24px"
    });
    
    closeButton.onclick = () => {
      document.body.removeChild(modal);
      document.body.removeChild(document.querySelector("[data-modal-overlay]"));
    };
    
    modal.appendChild(iframe);
    modal.appendChild(closeButton);
    
    return modal;
  }
  
  /**
   * Create overlay for modal background
   * @returns {HTMLElement} - Overlay element
   */
  function createOverlay() {
    const overlay = document.createElement("div");
    overlay.dataset.modalOverlay = "true";
    Object.assign(overlay.style, {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.76)",
      zIndex: "999"
    });
    
    return overlay;
  }
  
  /******************************************************************************
   * Sidebar Functions
   ******************************************************************************/
  
  // Sidebar state variables
  let sidebar;
  let fileTree;
  let fileStructure = [];
  const API_URL = 'http://localhost:4321/docs/api';
  
  /**
   * Fetch and render file structure
   */
  async function fetchFileStructure() {
    sidebar = document.getElementById('mySidebar');
    fileTree = document.getElementById('side');
  
    try {
      const response = await fetch(`${API_URL}/files`);
      if (!response.ok) throw new Error('Failed to fetch file structure');
      
      fileStructure = await response.json();
      renderFileTree(fileStructure);
      if (fileStructure && fileStructure.length > 0) {
        // Find the first item with type 'file'
        const firstFile = fileStructure.find(item => item.type === 'file');
        
        // If a file is found, load it
        if (firstFile) {
          loadFile(firstFile);
        }
      }
      
      
    } catch (error) {
      console.error('Error fetching file structure:', error);
      handleError?.(); // Call handleError if it exists
    }
  }
  
  /**
   * Render file tree in sidebar
   * @param {Array} items - Array of file/directory objects
   * @param {HTMLElement} parentElement - Container to render items in
   */
  function renderFileTree(items, parentElement = fileTree) {
    if (parentElement === fileTree) parentElement.innerHTML = '';
    
    items.forEach(item => {
      const itemElement = document.createElement('div');
      itemElement.className = 'sidebar-item rounded p-2';
      
      if (item.type === 'directory') {
        // Directory item
        const directoryHeader = document.createElement('div');
        directoryHeader.className = 'flex items-center cursor-pointer';
        directoryHeader.innerHTML = `
          <i class="fas fa-folder mr-2 text-yellow-500 directory-collapsible"></i>
          <span class="directory-name">${item.name}</span>
        `;
        
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'pl-4 mt-1 space-y-1 hidden directory-children';
        
        // Add directory components to DOM
        itemElement.appendChild(directoryHeader);
        itemElement.appendChild(childrenContainer);
        
        // Toggle directory expand/collapse
        directoryHeader.addEventListener('click', () => {
          const icon = directoryHeader.querySelector('.directory-collapsible');
          childrenContainer.classList.toggle('hidden');
          
          // Update icon and lazy-load children if needed
          if (childrenContainer.classList.contains('hidden')) {
            icon.classList.replace('fa-folder-open', 'fa-folder');
          } else {
            icon.classList.replace('fa-folder', 'fa-folder-open');
            
            // Lazy load children
            if (childrenContainer.children.length === 0 && item.children?.length > 0) {
              renderFileTree(item.children, childrenContainer);
            }
          }
        });
        
      } else if (item.type === 'file') {
        // File item
        itemElement.innerHTML = `
          <div class="flex items-center cursor-pointer">
            <i class="fas fa-file-alt mr-2 text-blue-500"></i>
            <span class="file-name">${item.name}</span>
          </div>
        `;
        
        // Handle file click
        itemElement.addEventListener('click', () => {
          loadFile(item);
          // Update active file indicator
          document.querySelectorAll('.active-file').forEach(el => 
            el.classList.remove('active-file'));
          itemElement.classList.add('active-file');
        });
      }
      
      parentElement.appendChild(itemElement);
    });
  }
  
  /**
   * Load file content
   * @param {Object} item - File object to load
   */
  async function loadFile(item) {
    try {
      const filePath = item.path;
      
      // Fetch file content
      const response = await fetch(`${API_URL}/file/${filePath}`);
      if (!response.ok) throw new Error('Failed to fetch file content');
      
      const data = await response.json();
      
      // Display content
      MDViewer("");
      ShowHideLoading(true);
      MDViewer(data.content);
      
      // Create breadcrumb
      const pathParts = filePath.split('\\');
      pathParts.unshift('<i class="fas fa-home text-blue-500"></i> Docs');
      
      BreadCrumb(".breadcrumb-container", pathParts);
      ShowHideLoading(false);
      
    } catch (error) {
      console.error('Error loading file:', error);
      handleError?.();
    }
  }
  
  /******************************************************************************
   * Markdown Viewer Functions
   ******************************************************************************/
  
  // Track current document
  const currentDoc = {
    FolderPath: "",
    FileName: ""
  };
  
  // Main markdown viewer function
  function MDViewer(content) {
    const md = document.getElementsByTagName("md")[0];
    document.querySelector(".rightsidebar").innerHTML = "";
    
    // Create markdown container
    const divMD = document.createElement("div");
    divMD.className = "markdown-body";
    md.innerHTML = "";
    md.append(divMD);
    
    // Render content if provided
    if (content) {
      divMD.innerHTML = content;
      Init();
    }
  }
  
  // Initialize markdown features
  function Init() {
    hljs.highlightAll();
    AddCopyButton();
    generateTOC();
    CustomStyling();
  }
  
  // Generate table of contents
  function generateTOC() {
    const contentContainer = document.getElementsByClassName("markdown-body")[0];
    const headings = contentContainer.querySelectorAll("h1,h2,h3,h4,h5,h6");
    if (!headings.length) return;
    
    // Create TOC container
    const tocContainer = Object.assign(document.createElement("div"), { id: "toc" });
    document.querySelector(".rightsidebar").appendChild(tocContainer);
    
    // Add title
    const spanTitle = Object.assign(document.createElement("span"), {
      className: "span-toc-header",
      innerHTML: '<i class="fas fa-list text-blue-500"></i> <b>Table of Contents</b>'
    });
    tocContainer.appendChild(spanTitle);
    
    // Create TOC list
    const ul = document.createElement("ul");
    ul.id = "ul_toc";
    
    // Process each heading
    headings.forEach((heading, i) => {
      // Generate ID from heading text
      const id = heading.innerHTML.toLowerCase().replace(/ /g, "-");
      heading.id = id;
      
      // Get heading level
      const level = parseInt(heading.tagName[1]);
      
      // Create list item
      const li = document.createElement("li");
      if (i === 0) li.classList.add("toc_li_selected");
      
      // Create link
      const a = document.createElement("a");
      a.href = `#${id}`;
      a.className = "a_toc";
      a.title = heading.innerHTML;
      a.innerHTML = heading.innerHTML;
      
      // Style based on heading level
      if (level <= 2) {
        a.style.fontWeight = "500";
        a.style.paddingLeft = "0px";
      } else {
        a.style.paddingLeft = `${10 * (level - 2) * 1.4}px`;
      }
      
      // Handle click events
      a.onclick = (e) => {
        document.querySelectorAll("#toc li").forEach(el => {
          el.classList.remove("toc_li_selected");
        });
        e.target.parentElement.className = "toc_li_selected";
      };
      
      li.onclick = (e) => {
        if (e.target.tagName === "LI") e.target.firstChild.click();
      };
      
      // Add to DOM
      li.appendChild(a);
      ul.appendChild(li);
    });
    
    tocContainer.appendChild(ul);
  }
  
  // Add copy button to code blocks
  function AddCopyButton() {
    document.querySelectorAll("pre code").forEach((codeBlock) => {
      const pre = codeBlock.parentElement;
      pre.classList.add("hljs-pre");
      
      // Create copy button
      const button = Object.assign(document.createElement("button"), {
        className: "hljs-copy-button",
        type: "button",
        title: "copy code",
        innerHTML: svg.copy
      });
      button.dataset.copied = "false";
      
      // Add language indicator if configured
      if (_docsconfig.markdown && _docsconfig.markdown["show-language-name-in-code-block"]?.toLowerCase() === "yes") {
        const lang = Object.assign(document.createElement("span"), {
          className: "hljs-langName",
          innerHTML: codeBlock.className.replace("hljs", "").replace("language-", "").trim()
        });
        pre.appendChild(lang);
      }
      
      // Handle copy functionality
      button.onclick = function() {
        const code = this.parentElement.querySelector("code").innerText;
        navigator.clipboard.writeText(code).then(() => {
          button.innerHTML = svg.copied;
          button.classList.add("hljs-copy-button-copied");
          button.dataset.copied = "true";
          
          setTimeout(() => {
            button.dataset.copied = "false";
            button.innerHTML = svg.copy;
            button.classList.remove("hljs-copy-button-copied");
          }, 900);
        }).catch(() => {
          // Fallback for older browsers
          const textArea = document.createElement("textarea");
          textArea.value = code;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand("Copy");
          textArea.remove();
          
          button.innerHTML = svg.copied;
          button.classList.add("hljs-copy-button-copied");
          button.dataset.copied = "true";
          
          setTimeout(() => {
            button.dataset.copied = "false";
            button.innerHTML = svg.copy;
            button.classList.remove("hljs-copy-button-copied");
          }, 900);
        });
      };
      
      pre.appendChild(button);
    });
  }
  
  /******************************************************************************
   * Markdown Custom Styling
   ******************************************************************************/
  
  function CustomStyling() {
    enableCheckBox();
    applyAlerts();
    applyImageLinks();
  }
  
  function enableCheckBox() {
    var checkboxes = document.querySelectorAll(
      '.markdown-body li input[type="checkbox"]'
    );
    checkboxes.forEach(function (checkbox) {
      checkbox.disabled = false;
    });
  }
  
  function applyAlerts() {
    var validAlerts = "info,warning,caution,danger,success,tip".split(",");
    Array.from(document.querySelectorAll(".markdown-body blockquote")).forEach(
      (bq, index) => {
        var strong = bq.querySelector("p strong:first-child");
        if (strong != null) {
          var alertType = strong.textContent.toLowerCase().trim();
  
          if (validAlerts.includes(alertType)) {
            bq.classList.add("alert");
            bq.classList.add(`alert-${alertType}`);
            strong.style.textTransform = "uppercase";
            strong.textContent = " ";
  
            if (_docsconfig.markdown["show-alert-icon"].toLowerCase() == "yes") {
              strong.insertAdjacentHTML(
                "afterbegin",
                svgAlertIconsMap[alertType]
              );
            }
  
            // remove the <br> tag
            
            if (strong.nextElementSibling) {
              strong.parentNode.removeChild(strong.nextElementSibling);
            }
          }
        }
      }
    );
  }
  
  function handleImage() {
    //this.removeEventListener("onerror", handleImage);
    this.onerror = null;
    this.src = this.getAttribute("data-url-initial"); // pick from internet
  }
  
  function applyImageLinks() {
    let folderPath = currentDoc.FolderPath;
    Array.from(document.querySelectorAll(".markdown-body img")).forEach(
      (img, index) => {
        let fileName = img.src.substring(img.src.lastIndexOf("/") + 1);
        folderPath = folderPath == "NA" ? "" : folderPath;
        var url = GetImageUrl(folderPath, fileName, img.src);
        img.setAttribute("data-url-initial", img.src);
        // img.addEventListener("onerror", handleImage);
        img.onerror = handleImage;
        img.src = url; // pick from docs > images > folder
      }
    );
  }
  
  /******************************************************************************
   * Application Initialization
   ******************************************************************************/
  
  let _docsconfig = {};
  
  // HTML template for the main layout
  const bodyHtml = `
  <div class="header">
    <div id="divheadertitle"></div>
    <div id="divthemeswitch"></div>
  </div>
  <div id="mySidebar" class="sidebar">
    <div id="side"></div>
  </div>
  <div id="main">
    <div class="spinner"></div>
    <div class="breadcrumb-container"></div>
    <md></md>
  </div>
  <div id="mySidebarright" class="rightsidebar"></div>
  <a href="javascript:" id="backtotop"><i></i></a>`;
  
  /**
   * Initialize the application when DOM is ready
   */
  document.addEventListener("DOMContentLoaded", async () => {
    // Setup basic layout
    document.body.innerHTML = bodyHtml;
    
    // Initial setup with placeholder config
    buildHeader(_docsconfig);
    buildSwitch();
    ApplyThemeFromLS();
    ApplyScrolling();
    
    try {
      // Load actual configuration
      _docsconfig ={
        title: "MY DOCS",
        color: { light: "#0969da", dark: "#00e1ff" },
        markdown: {
          "show-language-name-in-code-block": "yes",
          "show-alert-icon": "yes"
        }
      };
      setCSSConfig(_docsconfig);
      buildHeader(_docsconfig);
      
      // Load file structure (handled by sidebar.js)
      // fetchFileStructure() will be called automatically
    } catch (error) {
      console.error("Failed to initialize:", error);
      handleError();
    }
  });
  
  /**
   * Display an error message
   */
  function handleError() {
    const errorData = `>**danger**    
    >**Connection Error**    
    >Error connecting to API`;
    
    MDViewer(errorData);
    ShowHideLoading(false);
  }
  
  // Initialize sidebar with a small delay to ensure DOM is ready
  setTimeout(fetchFileStructure, 100);