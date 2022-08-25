import emailjs from "@emailjs/browser";

export const welcomeMessage = (data) => {
    let apikey = ''
    let name = data.message.split(' ')
    console.log(name)
    let url = ``
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },

        })
            .then((response, status) => {
                if (response === null) {
                    return reject(response);
                }
                return resolve(data.name);

            })
    });
}

export const sendEmail = (e) => {
    console.log(e.phoneNumber)
    emailjs.send('service_cmewmbg', 'template_6ka952a',
        {
            'fullName': e.fullName,
            'phoneNumber': e.phoneNumber,
            'email': e.email,
            'item': e.services
        },
        'user_KTskXfNFUscO4hfuc0fT8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

};

