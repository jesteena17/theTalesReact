const INITIAL_STATE={
    sections: [
                {
                    id: 1,
                    imageUrl: 'https://media.istockphoto.com/photos/baby-boy-clothes-and-white-bear-toy-on-a-clothesline-picture-id527055994?k=20&m=527055994&s=612x612&w=0&h=kROQpsGON0HfHFYblPNkaBMrSUW0SWcte28iMkr85FQ=',
                    title: 'Babies',
                    subtitle: 'Super Comfy Baby Dresses',
                    urlLink: 'babies'
                },
                {
                    id: 2,
                    imageUrl: "https://i.pinimg.com/474x/cd/45/ba/cd45ba2b95463a31b6789c573644a694.jpg",
                    title: "Girls",
                    subtitle: 'Cool Girls  Dresses',
                    size: 'large',//for big img at last
                    urlLink: 'girls'
                },
                {
                    id: 3,
                    imageUrl: "https://i.pinimg.com/originals/b2/2f/be/b22fbe5c21ccfcd0770ef35d9cc99279.jpg",
                    title: "Boys",
                    subtitle: 'Fashion Fit Dresses for Boys',
                    size: 'large',//for big img at last
                    urlLink: 'boys'
                },
                {
                    id: 4,
                    imageUrl: 'https://media1.popsugar-assets.com/files/thumbor/HdXgqKJHWhINeS_ef4munhg2d1g/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2021/01/11/810/n/1922564/34fdbe93b6806378_netimgzFVzmJ/i/Half-Zip-Sweater.jpg',
                    title: 'Women',
                    subtitle: ' Trendy Women Dresses',
                    urlLink: 'womens'
                },
                {
                    id: 5,
                    imageUrl: "https://media.istockphoto.com/photos/suits-on-rack-picture-id1293366117?b=1&k=20&m=1293366117&s=170667a&w=0&h=c5-Rgz7CKkIdT-FDydn4mK1VZM49dNWhcN5B2GS9jgY=",
                    title: "Men",
                    subtitle: 'Fashionable Mens wear',
                    urlLink: 'mens'
                },
             
              


            ]
}

const mainmenuReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
default:return state; 
    }
}

export default mainmenuReducer; 