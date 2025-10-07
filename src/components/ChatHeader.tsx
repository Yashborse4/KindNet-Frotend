import React from 'react';
import { MoreVertical, Shield, AlertTriangle, Search, Settings } from 'lucide-react';

interface ChatHeaderProps {
  title?: string;
  subtitle?: string;
  isOnline?: boolean;
  avatar?: string;
  showControls?: boolean;
  detectionEnabled?: boolean;
  onToggleDetection?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  title = "AI Safety Chat",
  subtitle = "Cyberbullying Detection System",
  isOnline = true,
  avatar,
  showControls = true,
  detectionEnabled = true,
  onToggleDetection
}) => {
  return (
    <div className="p-4 bg-black/30 border-b border-white/10 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <Shield size={24} className="text-white" />
          </div>
          {isOnline && (
            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-400 border-2 border-gray-800 rounded-full"></div>
          )}
        </div>
        <div>
          <h1 className="text-white font-bold text-lg">{title}</h1>
          <p className="text-white/60 text-xs">{subtitle}</p>
        </div>
      </div>

      {showControls && (
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleDetection}
            className={`btn-icon ${detectionEnabled ? 'bg-green-500/20 border-green-500/50' : 'bg-red-500/20 border-red-500/50'}`}
            title={detectionEnabled ? 'AI Protection Active' : 'AI Protection Disabled'}
          >
            {detectionEnabled ? <Shield size={18} /> : <AlertTriangle size={18} />}
          </button>
          <button className="btn-icon">
            <Search size={18} className="text-white/70" />
          </button>
          <button className="btn-icon">
            <MoreVertical size={18} className="text-white/70" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
