import 'dotenv/config'
const token = process.env.GITHUB_TOKEN;
async function getGithubUser() {
    const response = await fetch("https://api.github.com/user/repos", {
        headers: {
            Authorization: `token ${token}`
        }
    });
    //ok - status code 200


    if(!response.ok) {
        console.log("Error fetching user data ", response.statusText);
        return;
    } else {
        const data = await response.json();// this is how to get data in json format
        data.forEach(repo => {
            console.log(`${repo.name}: ${repo.html_url}`)
        })
    }
}

getGithubUser();