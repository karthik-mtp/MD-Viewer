
/******************************************************************************
 * API Functions
 ******************************************************************************/

const _apiConfig = {
    baseUrl: {
      Prod: "http://localhost:4321",
      Test: "http://localhost:61179/"
    },
    Environment: "prod"
  };
  
  // Simplified base URL retrieval
  const GetBaseURL = () => _apiConfig.Environment.toLowerCase() === "test" 
    ? _apiConfig.baseUrl.Test 
    : _apiConfig.baseUrl.Prod;
  
  // Generic fetch wrapper with error handling
  async function fetchWithErrorHandling(url, options = {}) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) throw new Error(`API error: ${response.status}`);
      return [await (options.parseAs === 'text' ? response.text() : response.json()), false];
    } catch (error) {
      console.error("API error:", error);
      return [error.message || "Error connecting API", true];
    }
  }
  
  // Optimized file info fetching
  async function FetchFilesInfo() {
    return fetchWithErrorHandling(`${GetBaseURL()}/Docs/FetchFilesInfo`, {
      headers: { Accept: "application/json" }
    }).then(([data, isError]) => [isError ? data : data.children, isError]);
  }
  
  // Optimized file content fetching
  async function GetFileContents(obj) {
    return fetchWithErrorHandling(`${GetBaseURL()}/Docs/FetchFileContents`, {
      method: "POST",
      body: JSON.stringify({ FileName: obj.FileName, FolderPath: obj.FolderPath }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      parseAs: 'text'
    });
  }
  
  // Optimized file content saving
  async function SaveFileContents(obj) {
    const { FileName, FolderPath, Content } = obj;
    return fetchWithErrorHandling(`${GetBaseURL()}/Docs/UpdateFileContents`, {
      method: "PUT",
      body: JSON.stringify({ FileName, FolderPath, Content }),
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      parseAs: 'text'
    }).then(([data, isError]) => isError ? "Error updating file contents" : data);
  }
  
  // Simplified image URL construction
  const GetImageUrl = (folder, imageName) => 
    `${GetBaseURL()}/${folder || "docs"}/images/${imageName}`;
  
  // Simplified config fetching
  const GetConfig =  async () => (await fetch("docs.config.json")).json();