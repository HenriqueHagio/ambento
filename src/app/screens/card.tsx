
import Link from 'next/link';
import React from 'react';

interface CardProps {
  title: string;
  image?: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, link ,image }) => {
  return (
    <div className='card mb-4' style={styles.card} >
      {image && <img src={image} alt={title} className='card-img-top' style={styles.image} />}
      <div className='card-body'>
        <h2 style={styles.title} className='card-text text-light'>
          <Link className="nav-link " href={link} >
            {title}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Card;


import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  card: {
    width: '100%',
    backgroundColor: '#45A37E',
  },
  image: {
    width: '100%',
    height: '20rem',
    objectFit: 'cover',
  },
  title: {
    textAlign: 'center',
  }
}