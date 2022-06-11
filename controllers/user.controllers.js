import dotenv from 'dotenv';
import R6API from 'r6api.js';

dotenv.config();

const { UBI_EMAIL: email = '', UBI_PASSWORD: password = '' } = process.env;
const r6api = new R6API({ email, password });

export async function getUserInfos(req, res) {
    try {
        const { 0: player } = await r6api.findByUsername(req.body.platform, req.body.username);

        if (player != undefined) {
            return res.send({data: player })
        }
        
        return res.status(500).send({message: "User not found"})
    } catch (err) {
        console.log("Error while retrieving the user")
        console.log(err)
        return res.status(500).send({message: "Error while retrieving the user"})
    }
}

export async function getPvpStats(req, res) {
    
    try {
        const { 0: player } = await r6api.findByUsername(req.body.platform, req.body.username);

        if (player != undefined) {
            const { 0: stats } = await r6api.getStats(req.body.platform, player.id);

            if (!stats) return 'Stats not found';

            return res.send({data: stats.pvp })
        }
        return res.status(500).send({message: "User not found"})
    } catch (err) {
        console.log("Error while retrieving the user")
        console.log(err)
        return res.status(500).send({message: "Error while retrieving the user"})
    }
}

export async function getPveStats(req, res) {
    
    try {
        const { 0: player } = await r6api.findByUsername(req.body.platform, req.body.username);

        if (player != undefined) {
            const { 0: stats } = await r6api.getStats(req.body.platform, player.id);

            if (!stats) return 'Stats not found';

            return res.send({data: stats.pve })
        }
        return res.status(500).send({message: "User not found"})
    } catch (err) {
        console.log("Error while retrieving the user")
        console.log(err)
        return res.status(500).send({message: "Error while retrieving the user"})
    }
}