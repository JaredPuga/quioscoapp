import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {

    const prisma = new PrismaClient()

    if (req.method === 'POST') {
        const { id } = req.query; //Retorna un String y yo necesito un Int, por eso el parseInt
        
        const ordenActualizada = await prisma.orden.update({
            where: {
                id: parseInt(id)
            },
            data: { //data, obligatorio cuando se quiere hacer una actualización
                estado: true
            }
        })

        res.status(200).json(ordenActualizada)
    }
}