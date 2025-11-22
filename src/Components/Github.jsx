import React, { useEffect } from 'react'

const Github = () => {

    const userName = 'vathsavv56'
    useEffect(() => {
        fetch(`https://api.github.com/users/`)   // replace with any username
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='h-screen w-full border border-black rounded-3xl bg-gray-500'>

            <div id="pfp">

            </div>
        </div>
    )
}

export default Github