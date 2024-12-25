export const homepage = async (req, res) => {

    console.log("home page");
    
    const response = await fetch('http://qa-gb.api.dynamatix.com:3100/api/applications/getApplicationById/67339ae56d5231c1a2c63639',
        {
            method: "GET",
            headers:
            {
                'Content-Type': "application/json"
            }
            
        })
        
        if (response.ok) {
            const data = await response.json();
            if (data) {
                
                const newdata=[]
                newdata.push(data)
                console.log("home page", data);
          
            return res.render('home',
                {
                    title: "Home",
                    data: newdata
                })

        }
    } else 
    {
        return res.render('home',
            {
                title: "Home",
                data: []
            })
    }



}