import React from 'react';
import ChatApp from './components/ChatApp';
import './index.css';

function App() {
  // You can implement your API integration here
  const handleSendMessage = async (message: string): Promise<void> => {
    // Example API call - replace with your actual endpoint
    try {
      console.log('Sending message to API:', message);
      // Add your API integration here if needed
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="App w-full h-screen bg-black">
      {/* Subtle background pattern */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='white' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-gray-900/30"></div>
      </div>
      
      {/* Main chat container */}
      <div className="relative z-10 w-full h-full">
        <div className="h-full">
          <div className="h-full glass rounded-none overflow-hidden">
            <ChatApp onSendMessage={handleSendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
