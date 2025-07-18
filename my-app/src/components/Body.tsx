import { useState } from 'react';

type CardProps = {
  title: string;
  content: string;
};

function Card({ title, content }: CardProps) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
}

function Body() {

  const [count, setCount] = useState(0);

  const generateCards = (num: number) => {setCount(num)};

  const cards = Array.from({ length: count }, (_, i) => ({
    title: `Card ${i + 1}`,
    content: `This is card number ${i + 1}`
  }));


  return (
    


    <main style={{ padding: '1rem' }}>
      <div style={{ marginBottom: '1rem' }}>
        <button onClick={() => generateCards(24)}>Generate {count} Cards</button>
        <button onClick={() => setCount(6)}>Generate 6 Cards</button>
      </div>

      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}
      </div>
    </main>
  )
}

export default Body