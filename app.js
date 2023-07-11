const imgElement = document.querySelector("img")
const textElement = document.querySelector(".text")
const usernameElement = document.querySelector(".username")
const testimonials = [
    {
        name: "Gertruda R.",
        imgURL: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        text: "I would like to personally thank you for your outstanding product. I couldn't have asked for more than this. It's the perfect solution for our business."
    },
    {
        name: "Danella Y",
        imgURL: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
        text: "I wish I would have thought of it first. It fits our needs perfectly. Great job, I will definitely be ordering again! I'm good to go",
    },
    {
        name: "Lurleen E",
        imgURL: "https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        text: "If you aren't sure, always go for Samsung. Samsung is awesome! Definitely worth the investment. Samsung is the most valuable business resource we have EVER purchased.",
    },
    {
        name: "Sutton",
        imgURL: "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        text: "Great job, I will definitely be ordering again! Thanks for the great service. I would be lost without Samsung.",
    },
    {
        name: "Ignaz U",
        imgURL: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        text: "You guys rock! Samsung is both attractive and highly adaptable. I don't always clop, but when I do, it's because of Samsung.",
    }
]

let index = 0

function updateTestimonial(){
    const{name, imgURL, text} = testimonials[index]
    imgElement.src = imgURL
    textElement.textContent = text
    usernameElement.textContent = "- " + name
    index++
    if (index === testimonials.length) {
        index = 0
    }
    setTimeout(() => {
        updateTestimonial()
    }, 2000)
}

updateTestimonial()