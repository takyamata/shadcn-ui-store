"use client"
import React from 'react'
import Counter from './Counter'
import { UserForm } from './userForm'
import { useUserStore } from './userFormStore'

const UserInfo = () => {
    const username = useUserStore((state) => state.username)
    return <p>こんにちは、{username || 'ゲスト'}さん！</p>
}

const ZustandIndex = () => {
    return (
        <div>
            <Counter />
            <UserForm />
            <UserInfo />
        </div>
    )
}

export default ZustandIndex