"use client"
import { Button } from '@/components/ui/button'
import { useCounterStore } from './counterStore'
import { useUserStore } from './userFormStore'

// 最適化（必要な部分だけ再レンダリング）のため、細分化する
const CountDisplay = () => {
    const count = useCounterStore((state) => state.count)
    return <p>Count: {count}</p>
}

const CounterButtons = () => {
    const increment = useCounterStore((state) => state.increment)
    const decrement = useCounterStore((state) => state.decrement)
    return (
        <div>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </div>
    )
}

const ToggleButton = () => {
    const disabled = useUserStore((state) => state.disabled)
    const toggleDisabled = useUserStore((state) => state.toggleDisabled)
    return <Button onClick={toggleDisabled}>{disabled ? '有効化' : '無効化'}</Button>
}

const Counter = () => {
    return (
        <div>
            <CounterButtons />
            <CountDisplay />
            <ToggleButton />
        </div>
    )
}

export default Counter