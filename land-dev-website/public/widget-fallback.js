// Button-triggered widget with multiple fallback options
(function() {
  // Don't execute in iframe
  if (window.self !== window.top) return;
  
  // Wait until page is fully loaded and stable
  window.addEventListener('load', function() {
    // Create chat button
    setTimeout(function() {
      const chatButton = document.createElement('button');
      chatButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      `;
      chatButton.style.position = 'fixed';
      chatButton.style.bottom = '20px';
      chatButton.style.right = '20px';
      chatButton.style.width = '60px';
      chatButton.style.height = '60px';
      chatButton.style.borderRadius = '50%';
      chatButton.style.backgroundColor = '#4D7AE8';
      chatButton.style.color = 'white';
      chatButton.style.border = 'none';
      chatButton.style.cursor = 'pointer';
      chatButton.style.zIndex = '9999';
      chatButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
      chatButton.style.display = 'flex';
      chatButton.style.alignItems = 'center';
      chatButton.style.justifyContent = 'center';
      
      // Add hover effect
      chatButton.onmouseover = function() {
        this.style.backgroundColor = '#3867D6';
      };
      chatButton.onmouseout = function() {
        this.style.backgroundColor = '#4D7AE8';
      };
      
      document.body.appendChild(chatButton);
      
      // Variable to track if the widget is loaded
      let widgetLoaded = false;
      let widgetPopup = null;
      
      // Click handler for chat button
      chatButton.addEventListener('click', function() {
        if (!widgetLoaded) {
          // Open the static HTML page directly
          const width = 400;
          const height = 650;
          const left = window.innerWidth - width - 20;
          const top = window.innerHeight - height - 20;
          
          // Open the pre-built static chat page
          widgetPopup = window.open(
            '/simple-chat.html', 
            'chatWidget', 
            `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=no,location=no,menubar=no,toolbar=no`
          );
          
          if (widgetPopup) {
            // Handle popup closed
            const checkPopup = setInterval(function() {
              if (widgetPopup.closed) {
                clearInterval(checkPopup);
                widgetLoaded = false; // Allow reopening
              }
            }, 500);
            
            widgetLoaded = true;
          } else {
            // Popup was blocked, show a message
            alert('Please allow popups for this website to use the chat feature.');
            widgetLoaded = false;
          }
        } else if (widgetPopup && !widgetPopup.closed) {
          // Focus existing popup
          widgetPopup.focus();
        } else {
          // Popup was closed, reset state
          widgetLoaded = false;
          chatButton.click(); // Reopen
        }
      });
    }, 1000); // Short delay to ensure React is fully loaded
  });
})(); 