// import React, { useState, useRef, useEffect } from 'react';
// import { Send, X } from 'lucide-react';

// interface Message {
//   id: string;
//   text: string;
//   isUser: boolean;
//   timestamp: Date;
// }

// const ChatBot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: '1',
//       text: "Hi there! I'm Tara, Rishi's personal AI assistant. How can I help you today?",
//       isUser: false,
//       timestamp: new Date(),
//     },
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!inputValue.trim() || isLoading) return;

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       text: inputValue,
//       isUser: true,
//       timestamp: new Date(),
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('https://rishig45.app.n8n.cloud/webhook/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message: inputValue,
//           timestamp: new Date().toISOString(),
//         }),
//       });

//       const data = await response.json();

//       const aiMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         text: data.response || data.message || "I'm sorry, I couldn't process your request right now.",
//         isUser: false,
//         timestamp: new Date(),
//       };

//       setMessages(prev => [...prev, aiMessage]);
//     } catch (error) {
//       console.error('Chat error:', error);
//       const errorMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         text: "I'm experiencing some technical difficulties. Please try again later.",
//         isUser: false,
//         timestamp: new Date(),
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   return (
//     <>
//       {/* Chat Toggle Button */}
//       <div className="fixed right-6 bottom-6 z-50">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="group relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:rotate-12 flex items-center justify-center overflow-hidden"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur opacity-40 group-hover:opacity-70 transition-opacity duration-300"></div>
//           {isOpen ? (
//             <X className="w-7 h-7 text-white relative z-10" />
//           ) : (
//             <img
//               src="/tara.gif"
//               alt="Tara Avatar"
//               className="w-full h-full object-cover rounded-full relative z-10"
//             />
//           )}
//         </button>
//       </div>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed right-6 bottom-24 z-50 w-80 h-[500px] bg-gray-950 text-white rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-fade-in-up duration-300">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-purple-600 to-pink-500 p-4 flex items-center space-x-3">
//             <img
//               src="/tara.gif"
//               alt="Tara Avatar"
//               className="w-10 h-10 object-cover rounded-xl shadow-md"
//             />
//             <div>
//               <h3 className="font-semibold text-white">Tara</h3>
//               <p className="text-xs text-white/80">Rishi's AI Assistant</p>
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-4 overflow-y-auto space-y-3">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={`max-w-xs px-4 py-2 rounded-xl text-sm leading-snug font-medium shadow-sm ${
//                     message.isUser
//                       ? 'bg-pink-600 text-white rounded-br-none'
//                       : 'bg-white text-gray-800 rounded-bl-none'
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-white text-gray-800 px-3 py-2 rounded-lg rounded-bl-none text-sm">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-white/10 bg-gray-900">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
//                 disabled={isLoading}
//               />
//               <button
//                 onClick={sendMessage}
//                 disabled={!inputValue.trim() || isLoading}
//                 className="px-3 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatBot;









// import React, { useState, useRef, useEffect } from 'react';
// import { Send, X } from 'lucide-react';

// interface Message {
//   id: string;
//   text: string;
//   isUser: boolean;
//   timestamp: Date;
// }

// const ChatBot: React.FC = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: '1',
//       text: "Hi there! I'm Tara, Rishi's personal AI assistant. How can I help you today?",
//       isUser: false,
//       timestamp: new Date(),
//     },
//   ]);
//   const [inputValue, setInputValue] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const sendMessage = async () => {
//     if (!inputValue.trim() || isLoading) return;

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       text: inputValue,
//       isUser: true,
//       timestamp: new Date(),
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');
//     setIsLoading(true);

//     try {
//       const response = await fetch('https://rishig45.app.n8n.cloud/webhook/chat', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           message: inputValue,
//           timestamp: new Date().toISOString(),
//         }),
//       });

//       const data = await response.json();

//       const aiMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         text: data.response || data.message || "I'm sorry, I couldn't process your request right now.",
//         isUser: false,
//         timestamp: new Date(),
//       };

//       setMessages(prev => [...prev, aiMessage]);
//     } catch (error) {
//       console.error('Chat error:', error);
//       const errorMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         text: "I'm experiencing some technical difficulties. Please try again later.",
//         isUser: false,
//         timestamp: new Date(),
//       };
//       setMessages(prev => [...prev, errorMessage]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       sendMessage();
//     }
//   };

//   return (
//     <>
//       {/* Chat Toggle Button (Just Tara GIF, no background or button) */}
//       <div
//         onClick={() => setIsOpen(!isOpen)}
//         className="fixed right-6 bottom-6 z-50 cursor-pointer"
//       >
//         {isOpen ? (
//           <X className="w-10 h-10 text-white" />
//         ) : (
//           <img
//             src="/tara.gif"
//             alt="Tara Avatar"
//             className="w-20 h-20"
//           />
//         )}
//       </div>

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="fixed right-6 bottom-24 z-50 w-80 h-[500px] bg-gray-950 text-white rounded-2xl shadow-2xl border border-white/10 flex flex-col overflow-hidden animate-fade-in-up duration-300">
//           {/* Header */}
//           <div className="bg-gray-900 p-4 flex items-center space-x-3">
//             <img
//               src="/tara.gif"
//               alt="Tara Avatar"
//               className="w-16 h-16"
//             />
//             <div>
//               <h3 className="font-semibold text-white">Tara</h3>
//               <p className="text-xs text-white/80">Rishi's AI Assistant</p>
//             </div>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-4 overflow-y-auto space-y-3">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
//               >
//                 <div
//                   className={`max-w-xs px-4 py-2 rounded-xl text-sm leading-snug font-medium shadow-sm ${
//                     message.isUser
//                       ? 'bg-pink-600 text-white rounded-br-none'
//                       : 'bg-white text-gray-800 rounded-bl-none'
//                   }`}
//                 >
//                   {message.text}
//                 </div>
//               </div>
//             ))}
//             {isLoading && (
//               <div className="flex justify-start">
//                 <div className="bg-white text-gray-800 px-3 py-2 rounded-lg rounded-bl-none text-sm">
//                   <div className="flex space-x-1">
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
//                     <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//             <div ref={messagesEndRef} />
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t border-white/10 bg-gray-900">
//             <div className="flex space-x-2">
//               <input
//                 type="text"
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 placeholder="Type your message..."
//                 className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
//                 disabled={isLoading}
//               />
//               <button
//                 onClick={sendMessage}
//                 disabled={!inputValue.trim() || isLoading}
//                 className="px-3 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
//               >
//                 <Send className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ChatBot;




import React, { useState, useRef, useEffect } from 'react';
import { Send, X } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi there! I'm Tara, Rishi's personal AI assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const playSound = (src: string) => {
    const audio = new Audio(src);
    audio.play().catch(err => console.error('Audio play error:', err));
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowIntro(true);
    playSound('/open1.wav'); // 🔊 play open sound
    setTimeout(() => setShowIntro(false), 1000); // 0.5s intro
  };

  const sendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch('https://rishig45.app.n8n.cloud/webhook/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputValue,
          timestamp: new Date().toISOString(),
        }),
      });

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || data.message || "I'm sorry, I couldn't process your request right now.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);
      playSound('/reply.mp3'); // 🔊 play reply sound
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm experiencing some technical difficulties. Please try again later.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
      playSound('/reply.mp3'); // 🔊 play reply sound
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Toggle Button */}
      <div
        onClick={() => (isOpen ? setIsOpen(false) : handleOpen())}
        className="fixed right-6 bottom-6 z-50 cursor-pointer"
      >
        {isOpen ? (
          <X className="w-10 h-10 text-white" />
        ) : (
          <img
            src="/tara.gif"
            alt="Tara"
            className="w-24 h-24"
          />
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed right-6 bottom-24 z-50 w-80 h-[500px]">
          {showIntro ? (
            <img
              src="/tara-intro.gif"
              alt="Tara Intro"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
          ) : (
            <div className="flex flex-col h-full bg-gray-950 text-white rounded-2xl shadow-2xl border border-white/10 overflow-hidden animate-fade-in-up">
              {/* Header */}
              <div className="bg-gray-900 p-4 flex items-center space-x-3">
                <img
                  src="/tara.gif"
                  alt="Tara Avatar"
                  className="w-20 h-20"
                />
                <div>
                  <h3 className="font-semibold text-white">Tara</h3>
                  <p className="text-xs text-white/80">Rishi's AI Assistant</p>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-xl text-sm leading-snug font-medium shadow-sm ${
                        message.isUser
                          ? 'bg-pink-600 text-white rounded-br-none'
                          : 'bg-white text-gray-800 rounded-bl-none'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-3 py-2 rounded-lg rounded-bl-none text-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10 bg-gray-900">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 text-sm"
                    disabled={isLoading}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={!inputValue.trim() || isLoading}
                    className="px-3 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
