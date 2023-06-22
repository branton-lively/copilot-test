// Create web server

// Import modules
const express = require('express');
const router = express.Router();

// Import controller
const commentsController = require('../controllers/commentsController');

// Import middleware
const auth = require('../middleware/auth');

// Create routes
router.post('/', auth, commentsController.addComment);
router.get('/', auth, commentsController.getComments);
router.put('/:id', auth, commentsController.updateComment);
router.delete('/:id', auth, commentsController.deleteComment);

// Export router
module.exports = router;
