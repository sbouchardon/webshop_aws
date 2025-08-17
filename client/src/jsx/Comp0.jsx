import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductPage from './ProductPage.jsx';
import ProductCard from './ProductCard.jsx';

export default function Comp0() {


  return (
    <>
      <div className='flex'>
        <ProductCard
          id="1"
          image= "/data/data2.svg"
          title= "Crème Hydratante Vitamine C"
          description= "Vitamine C stabilisée | Huile d'avocat"
          nbPrice= "18.99"
          nbStars="0"
          nbReviews= "439"
        />

        <ProductCard
          id="2"
          image= "/data/data1.svg"
          title= "Crème Affinante pour le Corps Glow-AHA"
          description= "Acide glycolique à 9 % | Huile de pépins de canneberge"
          nbPrice= "15.95"
          nbStars="4"
          nbReviews="1925"
        />
      </div>


    </>
  )
}




/*
        <Product
          image= "/data/data1.svg"
          title= "Crème Affinante pour le Corps Glow-AHA"
          description= "Acide glycolique à 9 % | Huile de pépins de canneberge"
          nbPrice= "15.95"
          nbStars="4"
          nbReviews="1925"
        />
*/