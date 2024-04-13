import React from 'react';
import './productListing.styles.css';
import ProductListingCard from '../../cards/product-listing-card/ProductListingCard';
import { BookData } from '../../../util/BookData';

const ProductListing = () => {
    return(
        <div className="product-listing-container">
            <div className="container">
                <h1>ABOUT</h1>
                <h2>Here at <span className="text-primary">HakunaMatata</span> african books and literature as well as local languages are promoted. It mostly bases on children literature to enhance their understanding of their culture. 
                HERE ARE SOME BOOKS YOU MAY LIKE.</h2>

                <div className="listing-container">
                    {BookData.slice(0,4).map((book) => (
                         <ProductListingCard key={book.id} bookData={book} />
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProductListing;