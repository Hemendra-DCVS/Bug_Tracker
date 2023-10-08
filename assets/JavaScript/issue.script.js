document.addEventListener('DOMContentLoaded', function () {
  const searchInput = document.getElementById('search-query');
  const issueTableBody = document.getElementById('issue-table-body');

  // Function to update the table based on the search query
  function updateTable(searchQuery) {
      // Clear previous search results
      issueTableBody.innerHTML = '';

      // Fetch issues data from the backend
      fetch('/api/issues') // Use the correct endpoint URL
          .then(response => response.json())
          .then(issues => {
              // Filter issues based on the search query
              const filteredIssues = issues.filter(issue => {
                  const titleAndDescription = issue.issueTitle.toLowerCase() + ' ' + issue.description.toLowerCase();
                  return titleAndDescription.includes(searchQuery.toLowerCase());
              });

              // Update the table with filtered issues
              filteredIssues.forEach(issue => {
                  const row = document.createElement('tr');
                  row.innerHTML = `
                      <td class="font-weight-bold text-primary">${issue.issueTitle}</td>
                      <td>${issue.description}</td>
                      <td>${issue.Author}</td>
                      <td>${issue.labels.join(', ')}</td>
                  `;
                  issueTableBody.appendChild(row);
              });
          })
          .catch(error => {
              console.error('Error fetching issues data:', error);
          });
  }

  // Event listener for input changes (live search)
  searchInput.addEventListener('input', () => {
      const searchQuery = searchInput.value.trim();
      updateTable(searchQuery);
  });

  // Initial table update with empty search query (show all issues)
  updateTable('');
});



// Show/hide the "Back to Top" button based on scroll position
// window.addEventListener('scroll', () => {
//     const backToTopButton = document.querySelector('.back-to-top');
//     if (window.scrollY > 400) {
//       backToTopButton.style.display = 'block';
//     } else {
//       backToTopButton.style.display = 'none';
//     }
//   });

// Show/hide the "Back to Top" button based on scroll position
// window.addEventListener('scroll', () => {
//     const backToTopButton = document.querySelector('.back-to-top');
//     if (window.scrollY > 400) {
//       backToTopButton.style.display = 'block';
//     } else {
//       backToTopButton.style.display = 'none';
//     }
//   });


