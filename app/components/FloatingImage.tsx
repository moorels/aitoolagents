import Image from 'next/image';
import './FloatingRobot.css';

interface FloatingImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
}

export default function FloatingImage({ src, alt, width = 64, height = 64 }: FloatingImageProps) {
    return (
        <div className="floating-image">
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
}
