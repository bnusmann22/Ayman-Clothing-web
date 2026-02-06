import React from 'react';
import Button from '../ui/Button';

const ProductCard = ({ product }) => {
  const { name, price, image, category, isNew, inStock = true } = product;

  return (
    <div className="group bg-brand-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative overflow-hidden bg-gray-100 aspect-[3/4]">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-silver to-gray-300">
            <svg className="w-20 h-20 text-brand-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-brand-gold text-brand-dark px-3 py-1 rounded-full text-xs font-sans font-bold">
              NEW
            </span>
          )}
          {!inStock && (
            <span className="bg-red-500 text-brand-white px-3 py-1 rounded-full text-xs font-sans font-bold">
              SOLD OUT
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="bg-brand-white text-brand-gold p-2 rounded-full hover:bg-brand-gold hover:text-brand-white transition-colors duration-200 shadow-lg">
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {category && (
          <p className="text-xs font-sans text-brand-silver uppercase tracking-wider mb-1">
            {category}
          </p>
        )}
        
        <h3 className="text-lg font-sans font-semibold text-brand-dark mb-2 line-clamp-2">
          {name}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <p className="text-xl font-sans font-bold text-brand-gold">
            ₦{price?.toLocaleString()}
          </p>
        </div>

        <Button 
          variant="primary" 
          size="sm" 
          fullWidth
          disabled={!inStock}
        >
          {inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
