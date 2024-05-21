const express = require('express');
const ProtectUser = require('../middleware/ProtectRoute');
const { uploadNotes,getNotes,getNotesSem, getNotesSemSub, getAllNotes } = require('../controllers/NotesController');
const singleUpload = require('../middleware/multer');

const router = express.Router();

router.get('/allnotes', getAllNotes)
router.get('/:branch',ProtectUser, getNotes)
router.get('/:branch/:semester', getNotesSem);
router.get('/:branch/:semester/:subject', getNotesSemSub);
router.post('/upload',singleUpload, uploadNotes)
// router.delete('/:id', ProtectUser, deletePost)

module.exports = router;