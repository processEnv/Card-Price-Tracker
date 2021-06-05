import React, { MouseEventHandler } from 'react';

export default function Homepage() {
    const handleClick = (event: any) => {
        console.log(event);
    };

    function fetchTest() {
        const url = 'https://api.tcgplayer.com/catalog/categories';
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer ' + process.env.BEARER_TOKEN
            }
        };
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }

    function getBearerTest() {
        // const myBody = new FormData();
        // myBody.set('grant_type', 'client_credentials');
        // myBody.set('client_id', JSON.stringify(process.env.PUBLIC_KEY));
        // myBody.set('client_secret', JSON.stringify(process.env.PRIVATE_KEY));
        type dataObj = {
            [key: string]: string | number | undefined;
        };
        const data: dataObj = {
            client_id: process.env.PUBLIC_KEY,
            client_secret: process.env.PRIVATE_KEY,
            grant_type: 'client_credentials'
        };
        let formBody = [];
        for (const property in data) {
            const encodedKey = property;
            const encodedValue = data[property];
            formBody.push(encodedKey + '=' + encodedValue);
        }
        const myFormBody = formBody.join('&');
        console.log('what is myFormBody:', myFormBody);
        const url = `https://cors-anywhere.herokuapp.com/https://api.tcgplayer.com/token`;
        const options = {
            method: 'POST',
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            //     Accept: '*/*',
            //     'X-Requested-With': '*/*'
            // },
            body: myFormBody
        };
        console.log('my url', url);
        fetch(url, options)
            .then(res => res.json())
            .then(json => console.log(json))
            .catch(err => console.error('error:' + err));
    }

    return (
        <div>
            <h1>Hey, click the button below!</h1>

            <button onClick={getBearerTest}>Click me!</button>
        </div>
    );
}
