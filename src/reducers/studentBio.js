const defaultBio = {
    id: '',
    firstName: 'Winc',
    lastName: 'Academy',
    age: '-',
    phoneNumber: '0881660316',
    emailAddress: 'welkom@wincacademy.nl',
    imgUrl: '/img/winc-logos/bio-image.png',
}

const studentBio = (state = defaultBio, action) => {

    switch (action.type) {

        case 'SET_BIO':
            const { id, firstName, lastName, age, phoneNumber, emailAddress, imgUrl } = action.payload;
            return {
                id,
                firstName,
                lastName,
                age,
                phoneNumber,
                emailAddress,
                imgUrl,
            };

        case 'RESET_BIO':
            return defaultBio;

        default:
            return state;
    }
}

export default studentBio;