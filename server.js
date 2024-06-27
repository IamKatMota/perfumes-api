const express = require ('express')
const app = express()
const PORT = 8000



const perfumes = {
    'kilian': {
        'angels\' share':{
            'name': 'Angels\' Share',
            'house': 'Kilian',
            'fragrance notes': {
                'top': 'Cognac',
                'middle': 'Cinnamon, Tonka bean, and Oak',
                'base': 'Vanilla, Praline, Sandlwood'
                },
            'perfumer': 'Benoist Lapouza',
            'launch year': 2020
            },
        'blue moon giner dash':{
            'name': 'Blue Moon Ginger Dash',
            'house': 'Kilian',
            'fragrance notes': {
                'top': 'Lemon and Calone',
                'middle': 'Ginger and Vodka',
                'base': 'Ambroxan and White Musk'
                },
            'perfumer': 'Sidonie Lancesseur',
            'launch year': 2023
            },
        'love don\'t be shy':{
            'name': 'Love Don\'t Be Shy',
            'house': 'Kilian',
            'fragrance notes': {
                'top': 'Neroli, Bergamot, Pink Pepper and Coriander',
                'middle': 'Orange Blossom, Honeysuckle, Jasmine, Iris and Rose',
                'base': 'Sugar, Vanilla, Caramel, Musk, Civet and Labdanum'
                },
            'perfumer': 'Calice Becker',
            'launch year': 2007
            },
        'smoking hot':{
            'name': 'Smoking Hot',
            'house': 'Kilian',
            'fragrance notes': {
                'top': 'Apple, Smoke and Cinnamon',
                'middle': 'Tobacco and Moss',
                'base': 'Bourbon Vanilla and Orcanox™'
                },
            'perfumer': 'Mathieu Nardin',
            'launch year': 2023
            },
        'apple brandy':{
            'name': 'Apple Brandy',
            'house': 'Kilian',
            'fragrance notes': 'Oak, Vanilla, Labdanum, Cedar',
            'perfumer': 'Sidonie Lancesseur',
            'launch year': 2013
            },
        'unknown':{
            'errormsg': 'Unknown perfume, please check spelling.',
            
            },
        

        }
        
}

app.get('/',(request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.get(('/api/:name'), (request,response) => {
    const fragranceName = request.params.name.toLowerCase()
    const perfumeData = perfumes['kilian'][fragranceName]

    if (perfumeData){
        response.json(perfumeData)
    }
    else {
        response.json(perfumes['kilian']['unknown'])
    }

    response.json(perfumes)
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})

