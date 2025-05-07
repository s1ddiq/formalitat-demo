'use client'
import Image from 'next/image';
import React from 'react';
import Button from './ui/Button';

const ClothingCard = ({ text, description, url }: ClothingCard) => {
  return (
    <div className="w-[400px] bg-[var(--primary)] space-y-6 hover:scale-101 transition-transform duration-300">
      <div className="text-center">
        <p className="text-[var(--secondary)] text-3xl font-semibold mb-2">{text}</p>
        <div className="overflow-hidden">
          <Image src={url} width={400} height={400} alt={text} className="object-cover" />
        </div>
      </div>

      <div className="flex items-center gap-4 justify-center">
        <Image src="/icons/robux.png" width={32} height={32} alt="Robux Icon" />
        <p className="text-white text-xl font-medium">7 per piece</p>
      </div>

      <p className="text-white text-center text-lg">{description}</p>

      <div>
        <Button text={`Browse ${text}`} route='/' className="!w-full text-base cursor-pointer" arrow={true}/>
      </div>
    </div>
  );
};

export default ClothingCard;
