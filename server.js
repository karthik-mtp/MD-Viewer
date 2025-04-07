const fs = require("fs");
const path = require("path");
const express = require("express");
var cors = require("cors");
const marked = require("marked");
const app = express();
app.use(cors());
app.use(express.json());

const rootDir = "docs";
const baseURI = "/docs/";

// DocTool Configuration (moved from docs.config.json)
const docsConfig = {
  "title": "MY DOCS",
  "home-page-file-name": "open issues.md",
  "markdown": {
    "show-alert-icon": "yes",
    "show-language-name-in-code-block": "no"
  },
  "color": {
    "light": "",
    "dark": ""
  },
  "show-folder-icon-in-side-bar": "yes"
};

app.use("/docs", express.static("docs"));
app.use("", express.static("public"));

 

app.get(baseURI + "FetchFilesInfo", (req, res) => {
  const result = readDirRecursive(rootDir);
  res.json(result);
});

function readDirRecursive(dir) {
  const result = {
    name: path.basename(dir),
    type: "folder",
    folder: "",
    children: [],
  };

  const files = fs.readdirSync(dir);

  // separate files from folders
  const fileNames = files
    .filter((file) => fs.statSync(path.join(dir, file)).isFile())
    .sort();
  const folderNames = files
    .filter((file) => fs.statSync(path.join(dir, file)).isDirectory())
    .sort();
  // files to consider
  const filesToConsider = [".txt", ".md"];
  const validFiles = fileNames.filter((file) => {
    const extension = path.extname(file).toLowerCase();
    return filesToConsider.includes(extension);
  });
  // folders to ignore
  const folderNamesToIgnore = ["images"];
  const validFolders = folderNames.filter((file) => {
    return !folderNamesToIgnore.includes(file.toLowerCase());
  });

  validFiles.forEach((file) => {
    let dirNameNew = dir.toLowerCase() == "docs" ? "" : dir;
    result.children.push({
      folder: dirNameNew,
      name: file,
      type: "file",
    });
  });

  validFolders.forEach((file) => {
    const filePath = path.join(dir, file);
    result.children.push(readDirRecursive(filePath));
  });

  return result;
}

app.post(baseURI + "FetchFileContents", (req, res) => {
  let { FileName, FolderPath } = req.body;

FolderPath = FolderPath.trim() === "" ? "docs" : path.join("docs", FolderPath.trim());

 const filePath = path.join(__dirname, FolderPath, FileName);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      res.status(500).send({ error: err.message });
    } else {
      res.send(data);
    }
  });
});

app.put(baseURI + "UpdateFileContents", (req, res) => {
  let { FileName, FolderPath, Content } = req.body;
  console.log(FileName,FolderPath);
  FolderPath = (FolderPath + "").toLowerCase() == "" ? "docs" : FolderPath;
  const filePath = path.join(__dirname, FolderPath, FileName);
  console.log(filePath,FolderPath);
  
  

  fs.writeFile(filePath, Content, "utf8", (err) => {
    if (err) {
      res.status(500).send(  err.message );
    } else {
      res.send( "File updated successfully"  );
    }
  });
});

// Helper function to recursively scan directories
async function scanDirectory(dir) {
  const items = await fs.promises.readdir(dir, { withFileTypes: true });

  const result = await Promise.all(
    items.map(async (item) => {
      const itemPath = path.join(dir, item.name);
      const relativePath = path.relative(rootDir, itemPath);

      if (item.isDirectory()) {
        const children = await scanDirectory(itemPath);
        return {
          type: "directory",
          name: item.name,
          path: relativePath,
          children,
        };
      } else if ( path.extname(item.name).toLowerCase() === ".md" || 
      path.extname(item.name).toLowerCase() === ".txt") {
        return {
          type: "file",
          name: item.name,
          path: relativePath,
        };
      }
      return null;
    })
  );

  return result.filter(Boolean);
}

// API endpoint to get file structure
app.get(baseURI + "api/files", async (req, res) => {
  try {
    const fileStructure = await scanDirectory(rootDir);

    const sortedItems = fileStructure.sort((a, b) => {
      if (a.type === 'file' && b.type === 'directory') {
        return -1;  // a (file) comes before b (directory)
      }
      if (a.type === 'directory' && b.type === 'file') {
        return 1;  // a (directory) comes after b (file)
      }
      return 0;  // if both are files or both are directories, leave order unchanged
    });
    
    
    res.json(sortedItems);
  } catch (error) {
    console.error("Error scanning directory:", error);
    res.status(500).json({ error: "Failed to scan directory" });
  }
});

// API endpoint to get file content
app.get(baseURI + "api/file/:filePath(*)", async (req, res) => {
  try {
    const filePath = path.join(rootDir, req.params.filePath);
    const content = await fs.promises.readFile(filePath, "utf-8");

    // Parse markdown and extract headers
    const html = marked.parse(content);

    // Extract headers using a simple regex (a real app would use a proper parser)
    const headersRegex = /<h([1-6]).*?id="(.*?)".*?>(.*?)<\/h\1>/g;
    const headers = [];
    let match;

    while ((match = headersRegex.exec(html)) !== null) {
      headers.push({
        level: parseInt(match[1]),
        id: match[2],
        text: match[3].replace(/<[^>]*>/g, ""), // Remove any inner HTML tags
      });
    }

    res.json({
      content: html,
      headers: headers,
    });
  } catch (error) {
    console.error("Error reading file:", error);
    res.status(500).json({ error: "Failed to read file" });
  }
});

 

const server = app.listen(4321, () => {
  console.log("APP running at" + "\x1b[32m" + "  http://localhost:4321");
});