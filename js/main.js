//Function to take From Landing Page to Lesson Area
let mainIndex = 0;
var vowelIndex = 1;

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
    mainIndex++;
    openLessonSection('.main-section');
});

//Go back to Landing Page
masthead.addEventListener('click', () => {
    mainIndex = 0;
    openLessonSection('.main-section')

    vowelIndex = 1;
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

//Display First Level
selectSection('.lesson', '.link');

// // let lessonIndex = 0;
//Display first Beginner Lesson = Vowel
selectSection('.beginner-lesson', '.beginner-lesson-link');

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
        english: 'a',
        sound: 'a.mp3',
    },
    {
        nepali: 'आ',
        english: 'aa',
        sound: 'aa.mp3',
    },
    {
        nepali: 'इ',
        english: 'i',
        sound: 'i.mp3',
    },

    {
        nepali: 'ई',
        english: 'ee',
        sound: 'ee.mp3',
    },
    {
        nepali: 'उ',
        english: 'u',
        sound: 'u.mp3',
    },
    {
        nepali: 'ऊ',
        english: 'oo',
        sound: 'oo.mp3',
    },
    {
        nepali: 'ए',
        english: 'eh',
        sound: 'eh.mp3',
    },
    {
        nepali: 'ऐ',
        english: 'ai',
        sound: 'ai.mp3',
    },
    {
        nepali: 'ओ',
        english: 'o',
        sound: 'o.mp3',
    },
    {
        nepali: 'औ',
        english: 'au',
        sound: 'au.mp3',
    },
    {
        nepali: 'अं',
        english: 'ahm',
        sound: 'ahm.mp3',
    },
    {
        nepali: 'अ:',
        english: 'aha',
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
insertVowel(vowelIndex);

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






