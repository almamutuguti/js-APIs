import 'dotenv/config'
const token = process.env.GITHUB_TOKEN;
async function getAllRepos() {
    let allRepos = [];
    let page = 1;
    const perPage = 100;
    
    while (true) {
        const response = await fetch(`https://api.github.com/user/repos?per_page=${perPage}&page=${page}`, {
        headers: {
            Authorization: `token ${token}`,
            Accept: "application/vnd.github.v3+json"
        }
    });
    //ok - status code 200
      if(!response.ok) {
        console.log("Error fetching user data ", response.statusText);
        break;
    } 
        const repos = await response.json();// this is how to get data in json format

        if (repos.length === 0) {
            break;
        }

        allRepos = allRepos.concat(repos);
        page++

        console.log(`Total repos: ${allRepos.length}`)
        repos.forEach(repo => {
            console.log(`${repo.name}: ${repo.html_url}`)
        })
    
    }


  
}

getAllRepos();