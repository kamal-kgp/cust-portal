import React, { useState, useEffect } from 'react';
import { Customer, Photo } from '../types';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const UNSPLASH_ACCESS_KEY = 'ScSUnG9OXS_Z4JEUJiUa16BDsen7eUzCUKKk8mgJPtI';

    async function fetchNineImages() {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/random?count=9&client_id=${UNSPLASH_ACCESS_KEY}&w=300&h=300&fit=crop`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();

        const imageUrls = data.map((image: any) => image.urls.regular);

        console.log(imageUrls);
        setPhotos(imageUrls);

        return imageUrls;
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    }

    fetchNineImages();
    const interval = setInterval(fetchNineImages, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="customer-details">
      <h2>{customer.title}</h2>
      <p>{customer.description}</p>
      <div className="photo-grid">
        {photos.length > 0 && photos.map((photo:any) => (
          <img key={photo || ""} src={photo || ""} alt="Customer" />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;