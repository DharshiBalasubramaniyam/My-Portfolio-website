const skills = [
    {
        "id": 1,
        "name": "JAVA",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
    },
    {
        "id": 2,
        "name": "Spring boot",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
    },
    {
        "id": 13,
        "name": "PHP",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
    },
    {
        "id": 14,
        "name": "C",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg"
    },
    {
        "id": 4,
        "name": "HTML5",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
    },
    {
        "id": 5,
        "name": "CSS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
    },
    {
        "id": 15,
        "name": "Tailwind CSS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
    },
    {
        "id": 6,
        "name": "JavaScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
    },
    {
        "id": 23,
        "name": "TypeScript",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
    },
    {
        "id": 7,
        "name": "React Js",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
        "id": 8,
        "name": "Node Js",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
    },
    {
        "id": 16,
        "name": "Express",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
    },
    {
        "id": 17,
        "name": "Firebase",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
    },
    {
        "id": 9,
        "name": "MySql",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
    },
    {
        "id": 10,
        "name": "Mongo DB",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
    },
    {
        "id": 18,
        "name": "Maven",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg"
    },
    {
        "id": 19,
        "name": "NPM",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg"
    },
    {
        "id": 26,
        "name": "Redux",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
    },
    {
        "id": 11,
        "name": "Git",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
    },
    {
        "id": 13,
        "name": "Post Man",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
    },
    {
        "id": 20,
        "name": "Docker",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
    },
    {
        "id": 21,
        "name": "AWS",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
    },
    {
        "id": 22,
        "name": "GitHub Actions",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
    },
    {
        "id": 24,
        "name": "Kubernetes",
        "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg"
    }
    
]

const skillsWrapper = document.querySelector(".skill-card-wrapper");
skills.map((skill) => addSkill(skill))

function addSkill(skill) {
    const skillItemWrapper = document.createElement("div");
    skillItemWrapper.setAttribute('class', 'skill-item-wrapper');
    skillItemWrapper.innerHTML = `
    <div class="skill-item">
        <img src="${skill.icon}" alt="">
        <h2>${skill.name}</h2>
    </div>`

    skillsWrapper.appendChild(skillItemWrapper);
}
