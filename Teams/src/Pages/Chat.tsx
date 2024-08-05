import { Box, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const Chat: React.FC = () => {
  const navigate = useNavigate();

  const handleHomeButtonClick = () => {
    navigate('/');
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <IconButton
        onClick={handleHomeButtonClick}
        sx={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          cursor: 'pointer',
          border: '1px solid #ccc',
          padding: '10px',
          borderRadius: '5px',
          transition: 'transform 0.2s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          }
        }}
      >
        <HomeIcon />
      </IconButton>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        textAlign: 'center'
      }}>
        <h1>Chat Page</h1>
      </Box>
    </Box>
  );
};

export default Chat;
