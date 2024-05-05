document.getElementById('exportButton').addEventListener('click', function() {
    // Get the content of the character sheet
    var characterSheetContent = document.documentElement.outerHTML;
    
    // Create a blob with the character sheet content
    var blob = new Blob([characterSheetContent], { type: 'text/html' });
    
    // Create a temporary anchor element
    var a = document.createElement('a');
    a.download = 'character_sheet.html'; // Set the filename for the downloaded file
    a.href = window.URL.createObjectURL(blob);
    
    // Append the anchor element to the document body and trigger a click event to initiate the download
    document.body.appendChild(a);
    a.click();
    
    // Remove the anchor element from the document body
    document.body.removeChild(a);
});


