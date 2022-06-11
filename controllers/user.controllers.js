import dotenv from 'dotenv';
import R6API from 'r6api.js';

dotenv.config();

export async function getUserInfosByName(req, res) {
    const { UBI_EMAIL: email = '', UBI_PASSWORD: password = '' } = process.env;
    const r6api = new R6API({ email, password });
    const username = 'HellsCrimson';
    const platform = 'uplay';
    
    try {
        const { 0: player } = await r6api.findByUsername(platform, username);

        if (player != undefined) {
            const { 0: stats } = await r6api.getStats(platform, player.id);

            if (!stats) return 'Stats not found';
            delete stats.id;

            const user = Object.assign(player, stats);

            return res.send({data: user })
        }
        return res.status(500).send({message: "User not found"})
    } catch (err) {
        console.log("Error while retrieving the user")
        console.log(err)
        return res.status(500).send({message: "Error while retrieving the user"})
    }
}