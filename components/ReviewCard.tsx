'use client';
import Image from 'next/image';
import React from 'react';
import Button from './ui/Button';

const ReviewCard = ({ text, description, url }: ReviewCard) => {
  return (
    <div className="w-[400px] bg-[var(--primary)] space-y-6 hover:scale-101 transition-transform duration-300">
      <div className="text-center">
        <div className="overflow-hidden">
          <Image src={url} width={400} height={400} alt={text} className="object-cover" />
        </div>
      </div>

      <p className="text-white text-center text-lg">{description}</p>

      <div>
        <p className="text-base text-gray-400">@{text}</p>
      </div>

    </div>
  );
};

export default ReviewCard;
