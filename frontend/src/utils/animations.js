export const containerAnimation = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.2,
      when: 'beforeChildren',
      staggerChildren: 0,
      duration: 0.4,
    },
  },
};

export const itensAnimation = {
  hidden: { y: 30, opacity: 0 },
  visible: i => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.3 * i,
    },
  }),
};

export const pressEnterAnimation = {
  hidden: { y: -30, opacity: 0, x: '-50%' },
  visible: {
    y: 0,
    opacity: 1,
    x: '-50%',
  },
};

export const modalAnimation = {
  hidden: { y: '-100%', opacity: 0, x: '-50%' },
  visible: {
    y: '-50%',
    opacity: 1,
    x: '-50%',
  },
};
