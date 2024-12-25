import express from 'express';
const port=5000;
const app=express();
import routes from './routes/index.js'
import expressEjsLayouts from 'express-ejs-layouts';


app.use(express.urlencoded({extended:true}))
app.use(express.static('./assets'));
app.use(expressEjsLayouts);

// extract style from the sub pages

app.set("layout extractStyles", true)
app.set('layout extractScripts', true);
// Set view engine and views path
app.set('view engine', 'ejs');
app.set('views',  './views');

app.use('/', routes);

app.listen(port, (err)=>
    {
        if(err)
            {
                console.log("error in running the server");
                return ;
            }
            console.log("server is running on port :", port);
    });

