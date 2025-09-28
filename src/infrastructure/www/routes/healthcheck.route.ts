import express from 'express';

const router = express.Router();

router.get('/healthcheck', (req, res) => {
  res.json('Server up v2.0.0!');
});

export default router;
