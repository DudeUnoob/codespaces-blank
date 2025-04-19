import { useEffect, useRef } from 'react';

function ChatWidget() {
  const widgetContainerRef = useRef(null);
  
  useEffect(() => {
    // We need to modify how the widget script is loaded
    const loadWidget = () => {
      // Create a modified version of the widget script
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = function() {
        // After loading, we need to check if the widget exists
        // and then apply it to our specific container
        if (window.myChatWidget && typeof window.myChatWidget.load === 'function') {
          try {
            window.myChatWidget.load({
              id: 'c7b1c99b-62ce-40fe-a799-9dc049a69182',
              container: widgetContainerRef.current // Use our container reference
            });
          } catch (err) {
            console.error('Failed to load chat widget:', err);
          }
        }
      };
      
      // Set the script source
      script.src = "https://agentivehub.com/production.bundle.min.js";
      
      // Add to document
      document.body.appendChild(script);
      
      // Return the script element for cleanup
      return script;
    };
    
    // Apply modifications to intercept the widget's behavior
    // Override the original function to prevent it from creating a root element
    const originalCreateElement = document.createElement;
    document.createElement = function(tagName) {
      // If the widget tries to create a div with id="root", prevent it
      const element = originalCreateElement.call(document, tagName);
      if (tagName.toLowerCase() === 'div') {
        const originalSetAttribute = element.setAttribute;
        element.setAttribute = function(name, value) {
          if (name === 'id' && value === 'root') {
            // Skip creating a root div, use our container instead
            return;
          }
          return originalSetAttribute.call(this, name, value);
        };
      }
      return element;
    };
    
    // Load the widget
    const scriptElement = loadWidget();
    
    // Cleanup function
    return () => {
      // Restore original createElement
      document.createElement = originalCreateElement;
      
      // Remove the script
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
      
      // If there's an unload function, call it
      if (window.myChatWidget && typeof window.myChatWidget.unload === 'function') {
        window.myChatWidget.unload();
      }
    };
  }, []);
  
  return (
    <div 
      id="chat-widget-container" 
      ref={widgetContainerRef} 
      className="fixed bottom-4 right-4 z-50 w-96 h-96"
    />
  );
}

export default ChatWidget; 