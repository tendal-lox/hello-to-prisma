import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const data = await prisma.user.create({
        data: {
            name: 'ali',
            email: 'asdsad',
            isAdmin: true
        }
    })
    console.log(data)
}

main().catch(err => {
    console.error(err)
}).finally(async () => {
    await prisma.$disconnect()
})