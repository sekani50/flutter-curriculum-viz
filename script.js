const daysData = {
    1: {
        title: "Foundations — Dart & Flutter Intro (DartPad)",
        sessions: [
            {
                time: "Session 1 (09:00 – 11:00 AM)",
                heading: "Welcome & Intro to Dart",
                description: "Getting started with the Dart language using DartPad (no installation required for this session).",
                bullets: [
                    "What is Dart? Why Flutter uses it.",
                    "Variables and Data Types (String, int, double, bool).",
                    "Basic Logic: if/else statements and simple math."
                ]
            },
            {
                time: "Session 2 (11:15 AM – 01:00 PM)",
                heading: "More Dart Fundamentals",
                description: "Leveling up our Dart skills to handle more complex data.",
                bullets: [
                    "Working with Lists (arrays) and Maps (dictionaries).",
                    "Loops: repeating tasks with 'for' and 'while'.",
                    "Classes and Objects: The blueprint of every Flutter widget."
                ]
            },
            {
                time: "Session 3 (02:00 – 04:00 PM)",
                heading: "Introduction to Flutter",
                description: "Moving from pure logic to visual components.",
                bullets: [
                    "Everything is a Widget: The core philosophy.",
                    "Basic Layouts: Text, Column, Row, and Container.",
                    "Understanding the Widget Tree and how things are nested."
                ]
            }
        ],
        deliverable: "Every participant has written Dart code in DartPad and understands the basic structure of a Flutter layout."
    },
    2: {
        title: "UI Mastery & AI Productivity",
        sessions: [
            {
                time: "Session 1 (09:00 – 11:00 AM)",
                heading: "Form Building",
                description: "Learning how to capture user information with simple widgets.",
                bullets: [
                    "Input widgets: TextField and TextFormField.",
                    "Buttons: ElevatedButton and TextButton.",
                    "Validation: Basic checks to ensure data entry."
                ]
            },
            {
                time: "Session 2 (11:15 AM – 01:00 PM)",
                heading: "BMI Calculator App",
                description: "Building a functional calculator with a simple, clean UI.",
                bullets: [
                    "State Management: Using setState to update the UI.",
                    "Calculation Logic: Applying math to user inputs.",
                    "Result Display: Showing the calculated BMI clearly."
                ]
            },
            {
                time: "Session 3 (02:00 – 04:00 PM)",
                heading: "AI Productivity & Group Planning",
                description: "How to use AI tools to code faster and plan projects.",
                bullets: [
                    "Using AI (ChatGPT/Claude) to explain errors and generate UI code.",
                    "Dividing into project groups (Teams).",
                    "Brainstorming and creating a simple project plan/sketch."
                ]
            }
        ],
        deliverable: "Participants have built two simple apps, learned AI basics, and formed their project teams."
    },
    3: {
        title: "Project Phase — Build & Debug",
        sessions: [
            {
                time: "Session 1 (09:00 – 11:00 AM)",
                heading: "Project Launch",
                description: "Getting the group project started in VS Code.",
                bullets: [
                    "Setting up the local project folder structure.",
                    "Initial main.dart configuration.",
                    "Assigning screens/tasks to each team member."
                ]
            },
            {
                time: "Session 2 (11:15 AM – 01:00 PM)",
                heading: "Core Feature Implementation",
                description: "Building the main logic of the group app.",
                bullets: [
                    "Implementing the primary functional screen.",
                    "Adding navigation between screens.",
                    "Integrating local data or state."
                ]
            },
            {
                time: "Session 3 (02:00 – 04:00 PM)",
                heading: "Troubleshooting & IDE Setup",
                description: "Resolving technical blockers and environment issues.",
                bullets: [
                    "One-on-one help for those still having Flutter SDK or VS Code issues.",
                    "Fixing gradle errors, emulator problems, and device connections.",
                    "Debugging code-level logic errors."
                ]
            }
        ],
        deliverable: "The group project is functional on at least one device, and all team members have their IDEs ready."
    },
    4: {
        title: "Project Phase — Finalize & Polish",
        sessions: [
            {
                time: "Session 1 (09:00 – 11:00 AM)",
                heading: "Advanced Features & UI",
                description: "Adding the finishing touches to the application.",
                bullets: [
                    "Implementing secondary screens (About, Settings, etc.).",
                    "Adding custom fonts, icons, and themes.",
                    "Input validation and user feedback (Snackbars, Dialogs)."
                ]
            },
            {
                time: "Session 2 (11:15 AM – 01:00 PM)",
                heading: "The Final Polish",
                description: "Ensuring a clean and professional look.",
                bullets: [
                    "Refining spacing, colors, and consistent typography.",
                    "Testing the app for crashes and edge cases.",
                    "Optimizing performance and code readability."
                ]
            },
            {
                time: "Session 3 (02:00 – 04:00 PM)",
                heading: "Presentation Prep & Final Debug",
                description: "Getting ready for the big reveal.",
                bullets: [
                    "Preparing the demo script and slides.",
                    "Final environment checks for Day 5 presentations.",
                    "Ensuring the app runs perfectly on a physical phone."
                ]
            }
        ],
        deliverable: "The application is complete, polished, and ready for presentation."
    },
    5: {
        title: "Graduation — Demo & Celebration",
        sessions: [
            {
                time: "Session 1 (09:00 – 11:00 AM)",
                heading: "Project Presentations",
                description: "Showing off the hard work to the class.",
                bullets: [
                    "5-minute live demo of the app features.",
                    "Quick Q&A from facilitators and peers.",
                    "Explaining the technical challenges overcome."
                ]
            },
            {
                time: "Session 2 (11:15 AM – 01:00 PM)",
                heading: "Merry Merry & Networking",
                description: "Celebrating the journey and building connections.",
                bullets: [
                    "Refreshments and group photos.",
                    "Networking with fellow developers and facilitators.",
                    "Sharing contacts and joining the community alumni."
                ]
            },
            {
                time: "Session 3 (02:00 – 04:00 PM)",
                heading: "Certification & Closing",
                description: "Official recognition of your new skills.",
                bullets: [
                    "Presentation of certificates of completion.",
                    "Closing remarks and roadmap for the future.",
                    "Unlocking post-training resources and support."
                ]
            }
        ],
        deliverable: "Successful completion of the training. Certificates earned. Community joined."
    }
};

function renderDay(day) {
    const data = daysData[day];
    const container = document.getElementById('day-content');
    
    // Fade out
    container.style.opacity = '0';
    container.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
        let html = `
            <div class="day-header">
                <h3>Day ${day}: ${data.title}</h3>
            </div>
            <div class="sessions-list">
        `;
        
        data.sessions.forEach(session => {
            html += `
                <div class="session-block">
                    <div class="session-info">
                        <h4>${session.time}: ${session.heading}</h4>
                        <p>${session.description}</p>
                        <ul class="bullet-list">
                            ${session.bullets.map(b => `<li>${b}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `;
        });
        
        html += `
            </div>
            <div class="deliverable-box">
                <h5>End-of-Day Deliverable</h5>
                <p>${data.deliverable}</p>
            </div>
        `;
        
        container.innerHTML = html;
        
        // Fade in
        container.style.transition = 'all 0.4s ease';
        container.style.opacity = '1';
        container.style.transform = 'translateY(0)';
    }, 200);
}

// Event Listeners
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update Active State
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Render Content
        renderDay(btn.getAttribute('data-day'));
    });
});

// Initial Render
document.addEventListener('DOMContentLoaded', () => {
    renderDay(1);
    
    // Add simple scroll reveal
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
});
