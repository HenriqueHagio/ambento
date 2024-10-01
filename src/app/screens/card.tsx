
import Link from 'next/link';
import React from 'react';

interface CardProps {
  title: string;
  image?: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, link ,image }) => {
  return (
    <div className='card bg-primary' style={styles.card} >
      {image && <img src={image} alt={title} className='card-img-top' style={styles.image} />}
      <div className='card-body'>
        <h2 style={styles.title} className='card-text text-light'>
          <Link className="nav-link" href={link} >
            {title}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Card;


const styles = {
  card: {
    width: '20rem',
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