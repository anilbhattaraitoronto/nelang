//Show Time Dynamically below the Header
function showTime() {
    let dateNow = new Date().toLocaleString();

    let clock = document.getElementById('clock')
    clock.innerHTML = dateNow;
}
// setInterval(showTime, 1000);

setInterval(showTime, 1000);

//Function to take From Landing Page to Lesson Area
let mainIndex = 0;
let vowelIndex = 1;

let startButton = document.querySelector('#start-button');
let masthead = document.querySelector('.masthead');

const openLessonSection = (sectionClass) => {
    let mainSections = document.querySelectorAll(sectionClass);
    mainSections.forEach(section => {
        section.style.display = 'none';
    })
    mainSections[mainIndex].style.display = 'block'
};

//Show Landing Page When the site loads
openLessonSection('.main-section');

//Go to Lesson Section 
startButton.addEventListener('click', () => {
    vowelIndex = 1;
    mainIndex++;
    openLessonSection('.main-section');
    insertVowel();
});


//Go back to Landing Page and reset the existing levels and lessons to initial
masthead.addEventListener('click', () => {
    mainIndex = 0;
    vowelIndex = 1;
    openLessonSection('.main-section')
    selectSection('.lesson', '.link');
    selectSection('.beginner-lesson', '.beginner-lesson-link');
    //Display First Level
    //Display first Beginner Lesson = Vowel
});


//Select Lesson Level
// let sectionIndex = 0;
const selectSection = (sectionClass, linkClass, index = 0) => {
    let sections = document.querySelectorAll(sectionClass)
    let links = document.querySelectorAll(linkClass)
    sections.forEach(section => {
        section.style.display = 'none'
    })
    links.forEach(link => {
        link.className = link.className.replace(' active-lesson-level', ' ');
    })
    sections[index].style.display = 'block';
    links[index].className += ' active-lesson-level'
};

selectSection('.lesson', '.link');
selectSection('.beginner-lesson', '.beginner-lesson-link');

// // let lessonIndex = 0;


//Functions for Navigating through different levels
const currentSection = (sectionClass, linkClass, sectionIndex = 0) => {
    selectSection(sectionClass, linkClass, sectionIndex);
};
//Function to navigate through different lessons
const currentLesson = (lessonClass, linkClass, lessonIndex = 0) => {
    selectSection(lessonClass, linkClass, lessonIndex)
};

//Insert Vowels into the DOM
const vowels = [
    {
        nepali: 'अ',
        english: '1.a',
        sound: 'a.mp3',
    },
    {
        nepali: 'आ',
        english: '2.aa',
        sound: 'aa.mp3',
    },
    {
        nepali: 'इ',
        english: '3.i',
        sound: 'i.mp3',
    },

    {
        nepali: 'ई',
        english: '4.ee',
        sound: 'ee.mp3',
    },
    {
        nepali: 'उ',
        english: '5.u',
        sound: 'u.mp3',
    },
    {
        nepali: 'ऊ',
        english: '6.oo',
        sound: 'oo.mp3',
    },
    {
        nepali: 'ए',
        english: '7.eh',
        sound: 'eh.mp3',
    },
    {
        nepali: 'ऐ',
        english: '8.ai',
        sound: 'ai.mp3',
    },
    {
        nepali: 'ओ',
        english: '9.o',
        sound: 'o.mp3',
    },
    {
        nepali: 'औ',
        english: '10.au',
        sound: 'au.mp3',
    },
    {
        nepali: 'अं',
        english: '11.ahm',
        sound: 'ahm.mp3',
    },
    {
        nepali: 'अ:',
        english: '12.aha',
        sound: 'aha.mp3',
    }
]


const insertVowel = () => {
    let length = vowels.length;
    if (vowelIndex > length) {
        vowelIndex = 1;
    }
    if (vowelIndex < 1) {
        vowelIndex = length;
    }

    let itemBox = document.querySelector('.item-box');
    let nepali = document.querySelector('.nepali');
    let english = document.querySelector('.english');
    let sound = document.querySelector('.audio');
    nepali.textContent = vowels[vowelIndex - 1].nepali;
    english.textContent = vowels[vowelIndex - 1].english;
    sound.textContent = vowels[vowelIndex - 1].sound;
};
//Show First Vowel when opening


const prevVowel = () => {

    vowelIndex--;
    insertVowel();
};
const nextVowel = () => {
    vowelIndex++;
    insertVowel()
};

const prevVowelButton = document.querySelector('.prev');
const nextVowelButton = document.querySelector('.next');

prevVowelButton.addEventListener('click', prevVowel);
nextVowelButton.addEventListener('click', nextVowel);






