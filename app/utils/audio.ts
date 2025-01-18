export const playTone = (frequency: number = 1000, duration: number = 100) => {
  const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.type = 'sine';
  oscillator.frequency.value = frequency;

  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  
  oscillator.start();
  oscillator.stop(audioContext.currentTime + duration / 1000);
};