export const dialog = () => ({
  height: 'auto',
  left: 0,
  marginTop: '-225px',
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '500px',
  overflow: 'auto',
  padding: '20px 0',
  position: 'fixed',
  right: 0,
  width: '100%',
  zIndex: 9001,
  top: '250px'
});

export const closeBtn = () => ({
  display: 'none'
});

export const overlay = () => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: 9000,
  backgroundColor: 'rgba(0,0,0,0.3)'
});
