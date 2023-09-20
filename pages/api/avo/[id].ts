import DB from "../../../database/db"
import { NextApiRequest, NextApiResponse } from "next";

const avoDetails = async (request: NextApiRequest, response: NextApiResponse) => {
	const db = new DB()

	const entry = await db.getById(request.query.id as string)

	response.status(200).json(entry)
}

export default avoDetails