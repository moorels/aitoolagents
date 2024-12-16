import React from 'react';

interface RobotModalProps {
  isVisible: boolean;
  position: { x: number; y: number };
  text: string;
}

const RobotModal: React.FC<RobotModalProps> = ({ isVisible, position, text }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed z-50 p-4 rounded-lg shadow-xl backdrop-blur-md border border-gray-500/20"
      style={{
        left: `${position.x}px`,
        top: `${position.y - 100}px`,
        transform: 'translate(-50%, -50%)',
        background: 'rgba(17, 24, 39, 0.85)',
        maxWidth: '300px',
      }}
    >
      <div className="text-sm font-medium text-gray-200">{text}</div>
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45"
           style={{ background: 'rgba(17, 24, 39, 0.85)' }}></div>
    </div>
  );
};

export default RobotModal;
