import { useUserStore } from './userFormStore'
import { Input } from "@/components/ui/input";

export const UserForm = () => {
    const username = useUserStore((state) => state.username)
    const setUsername = useUserStore((state) => state.setUsername)
    const disabled = useUserStore((state) => state.disabled)
    return (
        <div>
            <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="ユーザー名を入力"
                disabled={disabled}
            />
        </div>
    )
}
