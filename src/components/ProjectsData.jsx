import tenziesImg from "../assets/images/tenzies.png";
import passwordImg from "../assets/images/password.png";
import gptImg from "../assets/images/gpt.png"; // Replace with your actual MockGPT image name

const projects = [
    {
        id: 3,
        name: "MockGPT (C/C++)",
        image: gptImg, // Use the imported variable here
        link: "https://github.com/RKcode-ai/self-learning-game"
    },
    {
        id: 2,
        name: "Password Generator",
        image: passwordImg, // Use the imported variable here
        link: "https://github.com/RKcode-ai/Password-generator"
    },
    {
        id: 1,
        name: "Tenzies Game",
        image: tenziesImg, // Use the imported variable here
        link: "https://github.com/RKcode-ai/tenzies-game"
    },

]

export default projects;