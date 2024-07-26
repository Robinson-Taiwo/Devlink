"use client"
import store from '@/components/store/store'
import React from 'react'
import { Provider } from 'react-redux'
import Root from '@/app/Root'
import Preview from '@/app/profile/page'


const App = () => {
    return (
        <Provider store={store} >
            <Root />
        </Provider>
    )
}

export default App