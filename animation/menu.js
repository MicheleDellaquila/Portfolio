const MenuAnimation = {
  hidden: {
    opacity: 0,
    x: '-100%',
    transition: { type: 'easeInSine', duration: 0.5 },
  },
  show: { opacity: 1, x: 0, transition: { type: 'easeInSine', duration: 0.5 } },
  exit: {
    opacity: 0,
    x: '-100%',
    transition: { type: 'easeOutSine', duration: 0.5 },
  },
};

export default MenuAnimation;