import React from 'react';
import { User, Bot } from 'lucide-react';

interface MessageProps {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  avatar?: string;
  username?: string;
}

const Message: React.FC<MessageProps> = ({ 
  text, 
  isUser, 
  timestamp, 
  avatar, 
  username 
}) => {
  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  return (
    <div className={`flex items-start gap-3 animate-fade-in ${isUser ? 'flex-row-reverse' : ''}`}>
      <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${isUser ? 'bg-white' : 'bg-gradient-to-br from-gray-600 to-gray-800'}`}>
        {avatar ? (
          <img src={avatar} alt={username} className="w-full h-full rounded-full object-cover" />
        ) : isUser ? (
          <User size={20} className="text-black" />
        ) : (
          <Bot size={20} className="text-white" />
        )}
      </div>
      <div className={`flex flex-col gap-1 ${isUser ? 'items-end' : 'items-start'}`}>
        <div className={`flex items-center gap-2 text-xs text-white/50 ${isUser ? 'flex-row-reverse' : ''}`}>
          <span>{username ? (isUser ? 'You' : username) : (isUser ? 'You' : 'Bot')}</span>
          <span>&bull;</span>
          <span>{formatTime(timestamp)}</span>
        </div>
        <div
          className={`card-dark px-4 py-2.5 rounded-2xl max-w-md ${isUser
              ? 'rounded-br-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              : 'rounded-bl-lg'
            }`}>
          <p className="text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
