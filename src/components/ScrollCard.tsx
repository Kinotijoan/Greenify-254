'use client'
import React, { useEffect, useRef } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/UI/HowItWorksCard";
import Image from 'next/image';

const cards = [
  { id: 1, image:"/images/3R's.png", title: 'Become a Waste Management Pro', content: 'Empower yourself with knowledge! Access informative articles, tips, and resources to learn about waste reduction, recycling best practices, and composting techniques. Take control of your waste footprint and make a difference.' },
  {
    id: 2, image:"/images/3R's.png", title: 'Join the Greenify-254 Movement', content: 'Connect with like-minded individuals passionate about reducing waste! Share experiences, swap tips, and find encouragement within our supportive community forum. Together, we can create positive change for our planet.' },
  { id: 3, image:"/images/3R's.png", title: 'Find recycling places near you and make recycling effortless', content: 'Locate recycling companies in your area with a tap! Our app connects you with a network of verified recyclers, simplifying responsible waste disposal. Find the perfect recycling solution for your needs and contribute to a more sustainable future.' },
];

const StackingCards: React.FC = () => {
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    if (!cardsContainer) return;

    const cardsElements = cardsContainer.querySelectorAll('.card');
    cardsContainer.style.setProperty('--cards-count', cardsElements.length.toString());
    cardsContainer.style.setProperty('--card-height', `${cardsElements[0].clientHeight}px`);

    Array.from(cardsElements).forEach((card: Element, index) => {
      const offsetTop = 20 + index * 20;
      card.setAttribute('style', `padding-top: ${offsetTop}px`);

      if (index === cardsElements.length - 1) return;

      const toScale = 1 - (cardsElements.length - 1 - index) * 0.1;
      const nextCard = cardsElements[index + 1];

      const cardInner = card.querySelector('.card__inner');
      if (!cardInner) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(({ isIntersecting, boundingClientRect }) => {
          if (isIntersecting) {
            const percentageY = (window.innerHeight - boundingClientRect.top) / boundingClientRect.height;
            cardInner.setAttribute('style', `
              transform: scale(${1 - (toScale - 1) * percentageY});
              filter: brightness(${1 - (0.4 * percentageY)});
            `);
          }
        });
      }, {
        root: null,
        threshold: 0,
      });

      observer.observe(nextCard);
    });
  }, []);

  return (
    <div className="relative h-[500vh] cards" ref={cardsContainerRef}>
      {cards.map((card) => (
        <div
          key={card.id}
          className="sticky top-0 flex items-center justify-center h-screen card"
        >
          <Card className="bg-green-200 border-white md:py-10 card__inner flex flex-col md:flex-row items-center">
            {/* Text Section */}
            <div className="flex-1 p-4">
              <CardHeader>
                <p className="text-sm text-gray-500">How it works</p>
                <CardTitle className="text-lg font-semibold md:text-4xl">{card.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-lg font-light md:font-normal md:text-xl">
                <p className="text-base md:text-lg font-light">
                  {card.content}
                </p>
              </CardContent>
            </div>

            {/* Image Section */}
            <div className="flex-1 p-4">
              <Image
                src={card.image}
                alt="How it works"
                width={300}
                height={200}
                className="rounded-md shadow-md"
                priority
              />
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default StackingCards;
