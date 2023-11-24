
const express = require('express');
const { render } = require('ejs');
const {webScraper} = require('../WebScraper/indexWebScrap.js');
const bodyParser = require('body-parser');  //to read the value from ejs file




const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

let product={   //this is the object passed to the ejs file
    title:" Here will be Title ",
    price: "Price of product in ruppee",
    rating: "Rating out of 5 stars",
    details:"<h4>This will be the Desciption</h4>",
    url:"",
    image:"https://media.tenor.com/CX4EQlnLfT0AAAAd/rick-astley.gif"
};

const displayHTML=(res)=>{   //it renders and rewrites the index.ejs so we can get details
    res.render('index',{product});
    product={   //setting to default value
        title:" Here will be Title ",
        price: "Price of product in ruppee",
        rating: "Rating out of 5 stars",
        details:"<p> This will be the Desciption </p>",
        url:"",
        image:"https://media.tenor.com/CX4EQlnLfT0AAAAd/rick-astley.gif"
    };
};

app.get('/',(req,res)=>{   // initial route rendering with default values
    res.render('index',{product});
});
app.get('/index',(req,res)=>{   // initial route rendering with default values
    res.render('index',{product});
});

app.post('/search',(req,res)=>{  //depends on the link button in ejs and request is accepted and webScraper is driven
    let url = req.body.search;
    const parseObj= async ()=>{
        let obj =await webScraper(url)
        return obj;
    };
    parseObj().then((obj)=>{  //because obj can take a while to load so better wrap it in then clause so it could only after loading of object
        product.details=obj.techDetails;  //IMP ::=>  I stored the object's details in product's tag which would be displayed in the ejs file as a whole
        product.url = obj.url;
        product.price = obj.price;
        product.rating = obj.rating;
        product.title = obj.title;
        product.image = obj.image;
        displayHTML(res);                            // set of tags
    });
});



const port = (process.env.PORT || 3090);
app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});