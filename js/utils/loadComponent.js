// /js/utils/loadComponent.js
export default function loadComponent(elementId, url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to load ${url}: ${response.statusText}`);
        }
        return response.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;
        } else {
          throw new Error(`Element with ID "${elementId}" not found.`);
        }
      })
      .catch(error => {
        console.error(`Error loading component from ${url}:`, error);
        // Optionally, display an error message on the page
      });
  }
  