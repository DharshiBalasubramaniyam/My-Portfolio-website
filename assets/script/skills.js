const skills = [
    {
        "id": 1,
        "name": "JAVA",
        "image": "java.png"
    },
    {
        "id": 2,
        "name": "Spring",
        "image": "spring.png"
    },
    {
        "id": 3,
        "name": "Spring boot",
        "image": "springboot.png"
    },
    {
        "id": 13,
        "name": "PHP",
        "image": "php.png"
    },
    {
        "id": 14,
        "name": "C",
        "image": "c.png"
    },
    {
        "id": 4,
        "name": "HTML5",
        "image": "html.png"
    },
    {
        "id": 5,
        "name": "CSS",
        "image": "css.png"
    },
    {
        "id": 6,
        "name": "JavaScript",
        "image": "js.png"
    },
    {
        "id": 7,
        "name": "React Js",
        "image": "react.png"
    },
    {
        "id": 8,
        "name": "Node Js",
        "image": "node.png"
    },
    {
        "id": 9,
        "name": "MySql",
        "image": "mysql.png"
    },
    {
        "id": 10,
        "name": "Mongo Db",
        "image": "mongo.png"
    },
    {
        "id": 11,
        "name": "Git",
        "image": "git.png"
    },
    {
        "id": 12,
        "name": "GitHub",
        "image": "github.png"
    },
    {
        "id": 13,
        "name": "Post Man API",
        "image": "postman.png"
    }
]

const skillsWrapper = document.querySelector(".skill-card-wrapper");
skills.map((skill) => addSkill(skill))

function addSkill(skill) {
    const skillItemWrapper = document.createElement("div");
    skillItemWrapper.setAttribute('class', 'skill-item-wrapper');
    skillItemWrapper.innerHTML = `
    <div class="skill-item">
        <div class="skill-item-image">
            <img src="./images//skills/${skill.image}" alt="">
        </div>
        <div class="skill-item-name">
        <h2>${skill.name}</h2>
        </div>
    </div>`
    // skillItem.setAttribute('class', 'skill-item');
    // skillItem.innerHTML = ``;

    skillsWrapper.appendChild(skillItemWrapper);
}
// <img src="./images//skills/${skill.image}" alt="">
{/* <p>${skill.name}</p> */}