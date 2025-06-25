
"use client"
import { getProductById } from '@/components/Items';
import { notFound } from 'next/navigation';


export default function ProductDetail({ params }) {
  const product = getProductById(params.items); // use `params.items` not `params.id`

  if (!product) {
    return <p>oops not founds</p>
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      
    </div>
  );
}
