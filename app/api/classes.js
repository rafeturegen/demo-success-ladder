import dbConnect from '../../lib/mongodb';
import Class from '../../models/class';

export default async function handler(req, res) {
    await dbConnect();

    try {
        const classes = await Class.find();
        res.status(200).json(classes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch classes' });
    }
}
