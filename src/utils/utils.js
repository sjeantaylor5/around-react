import React from 'react';
import { api } from './api'

// Function set up to get the user info as well as prepping for setting it in the next project.

function useUserInfo() {
    const [userInfo, setUserInfo] = React.useState({
        name: '',
        about: '',
        avatar: '',
        id: '',
        cohort: ''
    });

    React.useEffect(() => {
        api.getUserInfo()
        .then(res => {
            setUserInfo(res);
        })
        .catch((err) => {
            console.log(err);

            setUserInfo({
                name: '',
                about: '',
                avatar: '',
                id: '',
                cohort: ''
            });
        });
    }, []);

    return [userInfo, setUserInfo];
}

function useCards() {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getCardList()
        .then(res => {
            setCards(res);
        })
        .catch((err) => {
            console.log(err);
            setCards([]);
        });
    }, []);

    return [cards, setCards];
}



export { useUserInfo, useCards };