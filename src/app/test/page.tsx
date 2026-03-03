import { prisma } from '@/lib/db';

export default async function TestPage() {
const voice = await prisma.voice.findMany()

return (
    <div className='p-8'>
        <h1 className="text-2xl font-bold mb-4">
            Voices ({voice.length})
        </h1>
        <ul className="space-y-2">
            {voice.map((v) => (
                <li key={v.id} className="p-4 border rounded">
                    <p><strong>Name:</strong> {v.name}</p>
                    <p><strong>Variant:</strong> {v.variant}</p>
                </li>
            ))}
        </ul>
    </div>
)
}