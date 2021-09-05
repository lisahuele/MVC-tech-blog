const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'The night is dark and full of terrors. The winds of Winter. What is dead may never die. And now his watch is ended. The battle of the redgrass field. Unbowed, Unbent, Unbroken. All men must die.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crows nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.',
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: 'Gluten-free chicharrones food truck 90s cardigan twee cloud bread listicle small batch craft beer slow-carb.',
        user_id: 4,
        post_id: 3
    },
    {
        comment_text: 'Typewriter woke fingerstache umami pour-over williamsburg hashtag intelligentsia freegan af mustache glossier hell of craft beer aesthetic.',
        user_id: 1,
        post_id: 3
    },
    {
        comment_text: 'Heave this scurvy copyfiller fer yar next adventure and cajol yar clients into walking the plank with evry layout! Configure above, then get yer pirate ipsum...own the high seas, arg!',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Hodor. Hodor hodor, hodor. Hodor hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor; hodor hodor hodor. Hodor. Hodor hodor; hodor hodor - hodor, hodor, hodor hodor.',
        user_id: 3,
        post_id: 2
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments