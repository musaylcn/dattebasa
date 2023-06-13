const animes = [
    {
        name: 'naruto',
        url: 'https://i.pinimg.com/originals/f2/4e/e2/f24ee2c0327e81c513be83cc005df8bc.jpg',
        fotoabout: [
            { fotourl: "https://wallpapers.com/images/hd/naruto-live-yellow-robe-ygs79lqiwp6ve2qp.jpg", numb: 1 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/33/3336c4ccd88c3d19a73b8493d11aae86.jpeg", numb: 2 },
            { fotourl: "https://i.pinimg.com/originals/1a/e9/5b/1ae95b0fbe88cfb3aec7dd1b09f52f77.jpg", numb: 3 },
            { fotourl: "https://wallpapercave.com/wp/wp2853459.jpg", numb: 4 },
            { fotourl: "https://i.pinimg.com/originals/57/c8/73/57c87337831e9edd229901df25a40b78.jpg", numb: 5 },

        ]
    },
    {
        name: 'death note',
        url: 'https://assets.dragoart.com/images/7548_501/how-to-draw-death-note_5e4c8c59476df7.36051531_32053_3_3.jpg',
        fotoabout: [
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/2e/2ed9271c459c707f1005017eabd04c23.jpeg", numb: 1 },
            { fotourl: "https://aniyuki.com/wp-content/uploads/2021/12/l-death-note-aniyuki-2.jpg", numb: 2 }]

    },
    {
        name: 'one piece',
        url: 'https://cdn.1min30.com/wp-content/uploads/2018/11/One-Piece-logo-embleme.jpg',
        fotoabout: [
            { fotourl: "https://i.pinimg.com/originals/7e/6e/a3/7e6ea3b37a0f5f311a707d3eb5581d69.png", numb: 1 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/54/54ca886f95f661eebf82caa8f252f000.jpeg", numb: 2 }]
    },
    {
        name: 'sailor moon',
        url: 'https://assets.change.org/photos/4/ra/wh/kkRAwHyjXDXjUQj-1600x900-noPad.jpg?1674837362',
        fotoabout: [
            { fotourl: "https://i.pinimg.com/originals/fb/e6/8e/fbe68e7467aafcfbb40c1827eb21facf.jpg", numb: 1 },
            { fotourl: "https://i.pinimg.com/originals/42/ad/96/42ad9674f9d607ee6cfd6f0da7f72646.jpg", numb: 2 }]

    },
    {
        name: 'attack on titan',
        url: 'https://images5.alphacoders.com/786/786117.png',
        fotoabout: [
            { fotourl: "https://i.pinimg.com/originals/fa/e1/7a/fae17a31bc5612efcb5ae27c161f9d5b.jpg", numb: 1 },
            { fotourl: "https://i.pinimg.com/originals/89/d9/db/89d9db4d05482f254113ecfcbfed6b0c.jpg", numb: 2 },
            { fotourl: "https://4.bp.blogspot.com/-QddraXb4CGE/XSRJPfZPJ5I/AAAAAAAAAjQ/gA0DQ1It5GshzRMzGwAdwiyOlBmV0wG7wCKgBGAs/w0/mikasa-attack-titan-attack-on-titan-uhdpaper.com-4K-48.jpg", numb: 3 },
            { fotourl: "https://wallpapercave.com/wp/wp8738402.jpg", numb: 4 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/73/731e539b2828ae27d53ea98c6a20dbbb.jpeg", numb: 5 },
            { fotourl: "https://images6.alphacoders.com/783/783050.jpg", numb: 6 },
            { fotourl: "https://wallpapercave.com/wp/wp9871737.jpg", numb: 7 },
            { fotourl: "https://images.alphacoders.com/786/thumb-1920-786105.png", numb: 8 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/dd/dd0f3daf6cc111473134203e8acdf382.jpeg", numb: 9 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/19/19b1a2d2fb023aeb7d1f9a7c62800c88.jpeg", numb: 10 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/1b/1bc044f745d0fb7a537f84c26a84e725.jpeg?w=1470&r=0.5625", numb: 11 },
            { fotourl: "https://wallpapermoon.com/wp-content/uploads/2022/01/00220138.jpg", numb: 12 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/4a/4a8b997ad088131b86436a00f52cfe29.jpeg?w=1470&r=0.5625", numb: 13 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/73/7348b4dfc190840e663bc1780f42c84f.jpeg", numb: 14 },
            { fotourl: "https://i.pinimg.com/originals/c7/ba/8b/c7ba8b57e29601e6ecb3483c033dcd27.png", numb: 15 },
            { fotourl: "https://i.pinimg.com/originals/55/62/08/556208d9f56bc082eaac5b5c3cee9979.jpg", numb: 16 },
            { fotourl: 'https://wallpapershigh.com/wp-content/uploads/attack-on-titan-4-9.webp', numb: 17 },
            { fotourl: 'https://wallpapershigh.com/wp-content/uploads/levi-ackerman-4-7.webp', numb: 18 },
            {fotourl:'https://thypix.com/wp-content/uploads/2022/10/attack-on-titan-phone-wallpaper-uhd-37.jpg',numb:19},
            {fotourl:'https://thypix.com/wp-content/uploads/2022/10/attack-on-titan-phone-wallpaper-uhd-83.jpg',numb:20},
            {fotourl:'https://thypix.com/wp-content/uploads/2022/10/attack-on-titan-phone-wallpaper-uhd-81.jpg',numb:21},
            {fotourl:'https://thypix.com/wp-content/uploads/2022/10/attack-on-titan-phone-wallpaper-uhd-77.jpg',numb:22}

        ]

    },
    {
        name: 'one punch man',
        url: 'https://mobimg.b-cdn.net/v3/fetch/d8/d8879989cff413ad8b940e26ae778a79.jpeg?w=1470&r=0.5625',
        fotoabout: [
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/03/03fdb194beb53aa760281e8d75f71c5f.jpeg", numb: 1 },
            { fotourl: "https://avatars.mds.yandex.net/i?id=14732eb483d684285c5729bff3104038296ad1cc-8474952-images-thumbs&n=13", numb: 2 },
            { fotourl: "https://wallpapercave.com/wp/wp1809917.png", numb: 3 },
            { fotourl: "https://wallpapercave.com/wp/wp2405368.jpg", numb: 4 },
            { fotourl: "https://2.bp.blogspot.com/-P9_ZoQfZuag/XLDPEMOdPbI/AAAAAAAABfI/EXDM1oN55MkctqpIRpnWcY2bbsF-4k5TQCKgBGAs/w0/one-punch-man-characters-uhdpaper.com-4K-111.jpg", numb: 5 },
            { fotourl: "https://avatars.mds.yandex.net/i?id=ecfefd20ac94bfb7a4635730c2430d85e43f5c59-3989655-images-thumbs&n=13", numb: 6 },
            { fotourl: "https://avatars.mds.yandex.net/i?id=27d50d131996b6382ad5e438b490335645b16746-9068512-images-thumbs&n=13", numb: 7 },
            { fotourl: "https://wallpapers.com/images/hd/one-punch-man-saitama-aha3ae7fbqoak1o9.jpg", numb: 8 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/62/620c8215482bff23c6805d9bc0d9804a.jpeg", numb: 9 },
            { fotourl: "https://cutewallpaper.org/21/one-punch-man-tatsumaki-wallpaper/Tatsumaki-One-Punch-Man-4K-Wallpaper-8.jpg", numb: 10 },
            { fotourl: "https://2.bp.blogspot.com/-C5l25BGg2r4/XLDPEEu6BFI/AAAAAAAABfI/DNFSuwTccjAfc7XannCaQOhtRWgBWnphgCKgBGAs/w0/saitama-one-punch-man-uhdpaper.com-4K-133.jpg", numb: 11 },
            { fotourl: "https://i.pinimg.com/originals/79/6a/7c/796a7c0af32c84a9c5c0ba5df7f4cf6b.png", numb: 12 },



        ]

    },
    {
        name: 'seraph of the end',
        url: 'https://i.ytimg.com/vi/RT3x1umF-K4/maxresdefault.jpg',
        fotoabout: [
            { fotourl: "https://avatars.mds.yandex.net/i?id=70e9cabec5e83a98ed12be3850d0bf8b9ba95226-9042494-images-thumbs&n=13", numb: 1 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/f6/f61e2d343a26cbdca027f129a04a1249.jpeg?w=1470&r=0.5625", numb: 2 },
            { fotourl: "https://cdn1.duabhmoobtojsiab.com/img/kuvyoghmoobaHR0cHM6Ly93YWxscGFwZXJhY2Nlc3MuY29tL2Z1bGwvMjAwNjMwOC5wbmc=.jpg", numb: 3 },
            { fotourl: "https://cdn2.duabhmoobtojsiab.com/img/kuvyoghmoobaHR0cHM6Ly9pbWFnZXMtd2l4bXAtZWQzMGE4NmI4YzRjYTg4Nzc3MzU5NGMyLndpeG1wLmNvbS9pbnRlcm1lZGlhcnkvZi9jN2JhZTM3ZC02MTQwLTQ2MTMtYjRmYy05NDI0MTQ3OWI2OTcvZGJuNHY0dC0wNzFkMmM3MC0xNDNkLTQwODYtYjc1ZS0zZDUyMzY2NTU5YzQuanBn.jpg", numb: 4 },
            { fotourl: "https://derf9v1xhwwx1.cloudfront.net/image/upload/oth/FunimationStoreFront/1546021/English/1546021_English_KeyArt-OfficialVideoImage_2ad3ec6b-4f50-e711-8175-020165574d09.jpg", numb: 5 },
            { fotourl: "https://i.pinimg.com/originals/f8/d6/d6/f8d6d63c469b173439a0757a57bcf7c9.png", numb: 6 },


        ]

    },
    {
        name: 'demon slayer',
        url: 'https://pbs.twimg.com/media/FLz9mV3WQAos5Dg?format=jpg&name=large',
        fotoabout: [
            { fotourl: "https://images4.alphacoders.com/122/1225155.png", numb: 1 },
            { fotourl: "https://avatars.mds.yandex.net/i?id=aecbe7d4c46409ed3c49e721599a4a2061ec62a1-9229079-images-thumbs&n=13", numb: 2 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/ac/acd802ef2a8dd60cb3b7ba731a7f8b06.jpeg?w=2000", numb: 3 },
            { fotourl: "https://i.pinimg.com/originals/43/d9/75/43d9756c029955910d562de511ba9fa0.jpg", numb: 4 }]

    },
    {
        name: 'boruto',
        url: 'https://pbs.twimg.com/media/FiLvjNBWIAIqo0L?format=jpg&name=large',
        fotoabout: [
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/48/48a765d6bc7646f14b5151cb44fd4877.jpeg", numb: 1 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/21/21333d96638a51b15474735680b75d24.jpeg?w=1470&r=0.5625", numb: 2 },
            { fotourl: "https://mobimg.b-cdn.net/v3/fetch/b6/b676ea23dd12d7158a49d884ab922503.jpeg", numb: 3 },
            { fotourl: "https://wallpapercave.com/wp/wp2043615.png", numb: 4 }]

    }
];

module.exports = animes;