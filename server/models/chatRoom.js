const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true,
        minlength: 1, 
        maxlength: 32,
    },
    isGroup: Boolean,
    isGame: {
        type: Boolean,
        default: false // Set a default value if required
    },
    createAt: { type: Date, default: Date.now },
    lastMessageAt: { type: Date, default: Date.now },
    messagesIds: [mongoose.Schema.Types.ObjectId],
    userIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // References the User model
    }], // Array includes references to User documents
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model for room owner
        required: true
    },
    ownerName: String // Optionally, keep the owner's name for quick access
});

const ChatRoom = mongoose.model('ChatRoom', chatRoomSchema);

module.exports = ChatRoom;
