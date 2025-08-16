import React from 'react';

const features = [
  { title: "Trading Ka Gyaan 😎", description: "Market me do type ke log hote hain: Ek jo profit dekhte hain, dusre jo profit ka screenshot lete hain! 😂" },
  {
    title: "Chart Ki Kahani 📈",
    description: "Trading chart dekh ke lagta hai 😅– kabhi upar, kabhi neeche, bilkul meri salary ki tarah!",
  },
   {
    title: "Stop Loss Ka Dard 😢",
    description: "Stop loss lagana hai toh dil pe patthar rakh ke lagao, warna market toh waise bhi rakh hi deta hai! 😂",
  },
];

function FeaturesSection() {
  return (
    <section className="p-10  text-center">
      <h2 className="text-3xl font-bold mb-8 text-white">let's Do Some Joke</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
