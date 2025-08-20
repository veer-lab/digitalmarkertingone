import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat as GeminiChat } from '@google/genai';
import { SendIcon } from './icons';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface ChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const TypingIndicator: React.FC = () => (
  <div className="flex items-center space-x-1 p-2">
    <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
    <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
    <span className="w-2 h-2 bg-amber-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
  </div>
);

const Chat: React.FC<ChatProps> = ({ isOpen, onClose }) => {
  const [chat, setChat] = useState<GeminiChat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentInput, setCurrentInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);
  
  useEffect(() => {
    if (isOpen) {
      const initChat = () => {
        let apiKey: string | undefined;
        try {
          // This will fail in a browser environment where process is not defined.
          apiKey = process.env.API_KEY;
        } catch (e) {
          console.error("`process.env.API_KEY` is not available in this browser environment.");
        }

        if (!apiKey) {
          setMessages([
            {
              role: 'model',
              text: "AI Assistant is not configured. An API key is required to use this feature.",
            },
          ]);
          return;
        }
        
        try {
          const ai = new GoogleGenAI({ apiKey: apiKey as string });
          const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
              systemInstruction: `You are a friendly and professional AI assistant for Vaurion, a digital marketing agency. Your goal is to answer user questions about our services, which include: AI in Digital Marketing, WhatsApp & Instagram Automation, Advanced Lead Capture, Unified Contact Management, and AI-Powered SEO Strategy. Keep your answers concise, helpful, and focused on Vaurion's offerings.`,
            },
          });
          setChat(newChat);
          setMessages([
            {
              role: 'model',
              text: "Hello! I'm Vaurion's AI assistant. How can I help you learn about our services today?",
            },
          ]);
        } catch (error) {
          console.error("Error initializing chat:", error);
           setMessages([
            {
              role: 'model',
              text: "Sorry, I'm having trouble connecting right now. Please try again later.",
            },
          ]);
        }
      };
      initChat();
    } else {
        // Reset chat state when closed
        setChat(null);
        setMessages([]);
        setCurrentInput('');
        setIsLoading(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim() || !chat || isLoading) return;

    const userMessage: Message = { role: 'user', text: currentInput };
    setMessages(prev => [...prev, userMessage]);
    setCurrentInput('');
    setIsLoading(true);

    try {
      const stream = await chat.sendMessageStream({ message: userMessage.text });
      let modelResponse = '';
      setMessages(prev => [...prev, { role: 'model', text: '' }]);
      
      for await (const chunk of stream) {
        modelResponse += chunk.text;
        setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1] = { role: 'model', text: modelResponse };
            return newMessages;
        });
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Oops! Something went wrong. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className={`chat-modal-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}></div>
      <div className={`chat-modal ${isOpen ? 'open' : ''}`}>
        <header className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="text-lg font-bold text-white font-heading"><span className="gradient-text">Vaurion</span> AI Assistant</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">&times;</button>
        </header>
        
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs md:max-w-sm px-4 py-2 rounded-2xl ${msg.role === 'user' ? 'bg-amber-800 text-white rounded-br-lg' : 'bg-gray-700 text-gray-200 rounded-bl-lg'}`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
              </div>
            </div>
          ))}
          {isLoading && (
             <div className="flex justify-start">
                <div className="bg-gray-700 rounded-2xl rounded-bl-lg">
                    <TypingIndicator />
                </div>
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-white/10">
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              placeholder="Ask about our services..."
              className="flex-1 p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-amber-600 transition-all"
              disabled={isLoading || !chat}
            />
            <button
              type="submit"
              className="p-3 bg-gradient-to-r from-amber-500 to-amber-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:scale-105"
              disabled={isLoading || !currentInput.trim() || !chat}
            >
              <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chat;
