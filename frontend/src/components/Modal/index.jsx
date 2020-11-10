/* eslint-disable react/prop-types */
import React from 'react';

import { Container, DownloadButton } from './styles';
import { modalAnimation } from '../../utils/animations';
import formatValue from '../../utils/formatValue';

import { ReactComponent as DownloadIcon } from '../../assets/download.svg';
import { ReactComponent as GoBack } from '../../assets/goBack.svg';

function Modal({ menu, setIsModalVisible }) {
  console.log(menu);
  return (
    <>
      <Container variants={modalAnimation}>
        <div className="title">
          <GoBack
            onClick={() => {
              setIsModalVisible(false);
            }}
          />
          <h1>Cardápio</h1>
        </div>

        {menu.categories.map(category => (
          <div className="category" key={category.id}>
            <h2>{category.name}</h2>
            <div className="category-list">
              {category.products.map(product => (
                <div className="product" key={product.sku}>
                  <div className="info">
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    <span>{formatValue(product.price)}</span>
                  </div>
                  <div className="image">
                    <img
                      src="https://via.placeholder.com/400x200"
                      alt="Product"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Container>
      <DownloadButton
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(menu),
        )}`}
        download="restaurant.json"
      >
        <DownloadIcon />
        <span>Download JSON</span>
      </DownloadButton>
    </>
  );
}

export default Modal;
