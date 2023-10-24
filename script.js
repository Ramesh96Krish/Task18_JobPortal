async function getJobDetails(){
        try{
            let responce = await fetch("https://www.arbeitnow.com/api/job-board-api");
            let value = await responce.json();
            const dataArray = value.data;
            dataArray.forEach((element) => {
                let company_name = element.company_name;
                let description = element.description;
                let location = element.location;
                let remote = element.remote;
                let title = element.title;
                let url = element.url;

                let jobDetails = {
                    company_name,
                    description,
                    location,
                    remote,
                    title,
                    url,
                }
    
                let newElement = document.createElement('div')
                newElement.innerHTML = `
                <h2>Company name: ${company_name}</h2>
                ${description}
                <h6>location: ${location}</h6>
                <h6>remote: ${remote}</h6>
                <h6>role: ${title}</h6>
                <b>Apply link: ${url}</b>
                `
                document.getElementById('appendToBody').appendChild(newElement);
            });

           

        }catch(error){
            console.log('Error, ',error);
        }
};