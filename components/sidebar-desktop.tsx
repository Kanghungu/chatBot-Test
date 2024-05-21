import { auth } from '@/auth'

export async function SidebarDesktop() {
    const session = await auth()

    if (!session?.user?.id) {
        return null
    }
}