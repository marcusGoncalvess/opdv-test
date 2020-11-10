import styled from 'styled-components';

import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1200px;
  height: 70%;

  padding: 20px 40px;
  z-index: 5;
  background-color: #dedcf1;
  overflow: overlay;

  @media (max-width: 1200px) {
    width: 90%;
  }
  .title {
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 20px;
    h1 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      text-align: center;
      font-size: 50px;
      color: #1f1f1f;
    }

    svg {
      width: 20px;
      cursor: pointer;
    }
  }
  .category {
    & + .category {
      margin-top: 50px;
    }
    h2 {
      margin-bottom: 10px;
    }
    .category-list {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      @media (max-width: 800px) {
        grid-template-columns: 1fr;
      }

      .product {
        background-color: #fff;
        display: flex;
        overflow: hidden;
        border-radius: 10px;
        .image {
          width: 50%;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .info {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          padding: 0 10px;
          p {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            font-size: 14px;
          }

          h4 {
            font-weight: 500;
            font-size: 20px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            color: #1f1f1f;
          }

          span {
            color: #1f1f1f;
          }
        }
      }
    }
  }
`;

export const DownloadButton = styled.a`
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translateX(-50%);

  width: 210px;
  height: 50px;
  border-radius: 10px;
  background-color: #6253c6;

  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.4s;

  &:hover {
    background-color: #8579d2;
  }

  span {
    color: #fff;
    font-weight: 600;
    margin-left: 5px;
  }
`;
