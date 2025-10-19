// यह कोड smooth scrolling (स्मूथ स्क्रॉलिंग) के लिए है, 
// जिससे वन-पेज नेविगेशन आधुनिक और आकर्षक लगता है।

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// आप यहाँ पर Google Analytics और अन्य उन्नत स्क्रिप्ट जोड़ सकते हैं।