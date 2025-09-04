import { CONST_DATA } from './const.js';

export async function fetchData() {
    const url = `${CONST_DATA.URL}:${CONST_DATA.PORT}/files/${CONST_DATA.FILE_NAME}`;
    let response = await fetch(url);
    if (response.ok) {
        const data = response.json();

        return data;
    } else {
        console.log('Bad request');
    }
}
