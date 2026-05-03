const detailsData = {
    "Introduction to Software Architecture.": {
        title: "Software Architecture 101",
        explanation: "Architecture is the blueprint of your app. It defines how different parts (UI, Logic, and Data) talk to each other. For beginners, think of it as organizing your code so it doesn't become a 'spaghetti' mess.",
        code: `// Simple Architecture Concept:
// 1. UI (User Interface) - What the user sees.
// 2. Business Logic - The 'brain' (calculations, rules).
// 3. Data - Where information is stored.

// Separation of concerns makes apps easier to fix and grow!`
    },
    "Thinking in Algorithms: Logic & Problem Solving.": {
        title: "Algorithmic Thinking",
        explanation: "An algorithm is just a step-by-step set of instructions to solve a problem. Before writing code, you should be able to explain the solution in plain English (pseudocode).",
        code: `// Algorithm for making Tea:
// 1. Boil water.
// 2. Put tea bag in cup.
// 3. Pour hot water into cup.
// 4. Wait 3 minutes.
// 5. Remove tea bag and add sugar.

// In code, this translates to functions and logic!`
    },
    "What is Dart? Why Flutter uses it.": {
        title: "Introduction to Dart",
        explanation: "Dart is a client-optimized language for fast apps on any platform. Flutter uses Dart because of its JIT (Just-in-Time) compilation for hot reload and AOT (Ahead-of-Time) compilation for production performance.",
        code: `void main() {
  // Dart is the language, Flutter is the toolkit.
  print('Welcome to the NCDMB Youth Programme!');
  
  String tech = 'Flutter';
  int year = 2025;
  
  print('Today we start our journey with $tech in $year.');
}`
    },
    "Variables and Data Types (String, int, double, bool).": {
        title: "Dart Variables & Data Types",
        explanation: "Dart is statically typed but supports type inference. Common types include String for text, int for whole numbers, double for decimals, and bool for true/false values.",
        code: `void main() {
  // Explicitly typed
  String name = "Zikoro";
  int age = 25;
  double height = 5.9;
  bool isStudent = true;

  // Type inference with 'var'
  var city = "Lagos"; 
  
  // String Interpolation
  print("My name is $name and I live in $city.");
  print("Next year, I will be $\{age + 1\} years old.");
}`
    },
    "Basic Logic: if/else statements and simple math.": {
        title: "Control Flow & Math",
        explanation: "Control flow allows your app to make decisions. Dart uses standard mathematical operators and comparison logic.",
        code: `void checkGrade(int score) {
  if (score >= 70) {
    print("Grade: A - Excellent!");
  } else if (score >= 60) {
    print("Grade: B - Very Good");
  } else if (score >= 50) {
    print("Grade: C - Pass");
  } else {
    print("Grade: F - Try again!");
  }
}

void main() {
  int myScore = 85;
  checkGrade(myScore);
  
  // Math operations
  double radius = 5.0;
  double area = 3.14 * radius * radius;
  print("Area of circle: $area");
}`
    },
    "Working with Lists (arrays) and Maps (dictionaries).": {
        title: "Collections: Lists & Maps",
        explanation: "Lists are ordered groups of objects. Maps are collections of key-value pairs. These are essential for managing data in your apps.",
        code: `void main() {
  // Lists (Ordered)
  List<String> trainees = ["John", "Mary", "Peter"];
  trainees.add("Gift"); // Add item
  print("First student: $\{trainees[0]\}");
  print("Total students: $\{trainees.length\}");

  // Maps (Key-Value pairs)
  Map<String, String> user = {
    "username": "flutter_dev",
    "email": "dev@zikoro.com",
    "role": "Student"
  };
  
  print("User Email: $\{user['email']\}");
}`
    },
    "Loops: repeating tasks with 'for' and 'while'.": {
        title: "Loops in Dart",
        explanation: "Loops are used to repeat a block of code multiple times. 'for' loops are great for iterating over lists, while 'while' loops run as long as a condition is true.",
        code: `void main() {
  List<String> fruits = ["Apple", "Banana", "Orange"];

  print("--- Using For-In Loop ---");
  for (var fruit in fruits) {
    print("I like $fruit");
  }

  print("--- Using Standard For Loop ---");
  for (int i = 1; i <= 3; i++) {
    print("Iteration number $i");
  }

  print("--- Using While Loop ---");
  int countdown = 3;
  while (countdown > 0) {
    print("T-minus $countdown");
    countdown--;
  }
}`
    },
    "Classes and Objects: The blueprint of every Flutter widget.": {
        title: "Classes & Objects",
        explanation: "Dart is an object-oriented language. A class is a blueprint, and an object is an instance of that class. In Flutter, almost everything you see is an object created from a class.",
        code: `class SmartPhone {
  String brand;
  String model;
  int batteryLevel;

  // Constructor
  SmartPhone(this.brand, this.model, this.batteryLevel);

  // Method (Behavior)
  void showSpecs() {
    print("Phone: $brand $model ($batteryLevel% battery)");
  }
  
  void charge() {
    batteryLevel = 100;
    print("$model is now fully charged!");
  }
}

void main() {
  // Creating an Object (Instance)
  var myPhone = SmartPhone("Apple", "iPhone 15", 45);
  myPhone.showSpecs();
  myPhone.charge();
}`
    },
    "Everything is a Widget: The core philosophy.": {
        title: "The Flutter Philosophy",
        explanation: "In Flutter, the entire UI is built by nesting widgets. A widget is a declaration of what the UI should look like. There are two main types: StatelessWidget (static) and StatefulWidget (dynamic).",
        code: `import 'package:flutter/material.dart';

// A StatelessWidget represents part of the UI that doesn't change.
class WelcomeText extends StatelessWidget {
  final String userName;
  
  const WelcomeText({super.key, required this.userName});

  @override
  Widget build(BuildContext context) {
    return Text(
      'Hello, $userName!',
      style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
    );
  }
}`
    },
    "Basic Layouts: Text, Column, Row, and Container.": {
        title: "Core Layout Widgets",
        explanation: "Layout widgets help you position other widgets. Column stacks them vertically, Row stacks them horizontally, and Container is like a div in HTML with padding/margins.",
        code: `Container(
  padding: EdgeInsets.all(20),
  margin: EdgeInsets.all(10),
  decoration: BoxDecoration(
    color: Colors.blue.shade50,
    borderRadius: BorderRadius.circular(15),
  ),
  child: Column(
    mainAxisSize: MainAxisSize.min,
    children: [
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Icon(Icons.star, color: Colors.orange),
          Text('Featured Product', style: TextStyle(fontWeight: FontWeight.bold)),
        ],
      ),
      SizedBox(height: 10),
      Text('Build your first app with us!'),
    ],
  ),
)`
    },
    "Understanding the Widget Tree and how things are nested.": {
        title: "The Widget Tree",
        explanation: "The widget tree is the hierarchy of all widgets in your app. Parent widgets contain children widgets. Understanding this nesting is key to building complex UIs.",
        code: `MaterialApp(
  debugShowCheckedModeBanner: false,
  home: Scaffold(
    appBar: AppBar(
      title: Text('My First App'),
      backgroundColor: Colors.blue,
    ),
    body: Center(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            Text('Top Level Widget'),
            Expanded(
              child: Center(child: Text('Nested in Center & Expanded')),
            ),
          ],
        ),
      ),
    ),
  ),
)`
    },
    "Input widgets: TextField and TextFormField.": {
        title: "Capturing User Input",
        explanation: "TextField is the basic input widget. TextFormField is a version that integrates with the Form widget for validation and state management.",
        code: `final TextEditingController _controller = TextEditingController();

@override
Widget build(BuildContext context) {
  return TextFormField(
    controller: _controller,
    keyboardType: TextInputType.emailAddress,
    decoration: InputDecoration(
      labelText: 'Email Address',
      hintText: 'example@gmail.com',
      prefixIcon: Icon(Icons.email),
      border: OutlineInputBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      filled: true,
      fillColor: Colors.grey[200],
    ),
  );
}`
    },
    "Buttons: ElevatedButton and TextButton.": {
        title: "Interactive Buttons",
        explanation: "Flutter provides several button styles. ElevatedButton has a background color and shadow, while TextButton is just text without a border or fill.",
        code: `ElevatedButton(
  onPressed: () => print('Primary Action'),
  style: ElevatedButton.styleFrom(
    backgroundColor: Colors.blue,
    foregroundColor: Colors.white,
    padding: EdgeInsets.symmetric(horizontal: 30, vertical: 15),
    shape: RoundedRectangleBorder(
      borderRadius: BorderRadius.circular(30),
    ),
  ),
  child: Text('Get Started'),
)

TextButton(
  onPressed: () {},
  child: Text('Already have an account? Login'),
)`
    },
    "Validation: Basic checks to ensure data entry.": {
        title: "Form Validation",
        explanation: "Validation ensures the user has entered correct data before you process it. We use a GlobalKey<FormState> to trigger validation across all fields.",
        code: `final _formKey = GlobalKey<FormState>();

Form(
  key: _formKey,
  child: Column(
    children: [
      TextFormField(
        validator: (value) {
          if (value == null || value.isEmpty) {
            return 'Please enter your username';
          }
          if (value.length < 4) {
            return 'Too short! Min 4 characters';
          }
          return null; // Passes validation
        },
      ),
      ElevatedButton(
        onPressed: () {
          if (_formKey.currentState!.validate()) {
            // Logic after successful validation
            ScaffoldMessenger.of(context).showSnackBar(
              SnackBar(content: Text('Form looks good!')),
            );
          }
        },
        child: Text('Submit Form'),
      ),
    ],
  ),
)`
    },
    "State Management: Using setState to update the UI.": {
        title: "Managing State with setState",
        explanation: "State is data that can change over time. setState() tells Flutter that something has changed and the UI needs to be rebuilt to reflect the new state.",
        code: `class CounterScreen extends StatefulWidget {
  @override
  _CounterScreenState createState() => _CounterScreenState();
}

class _CounterScreenState extends State<CounterScreen> {
  int _count = 0;

  void _updateCount() {
    setState(() {
      _count++; // Update internal state
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text('Count: $_count', style: TextStyle(fontSize: 40)),
        FloatingActionButton(
          onPressed: _updateCount,
          child: Icon(Icons.add),
        ),
      ],
    );
  }
}`
    },
    "Calculation Logic: Applying math to user inputs.": {
        title: "BMI Calculation Logic",
        explanation: "For the BMI app, we take height (m) and weight (kg) from inputs and apply the formula: weight / (height * height).",
        code: `// BMI Calculator Class
class BMIBrain {
  static double calculate(double weight, double height) {
    // Formula: Weight(kg) / [Height(m)]^2
    double bmi = weight / (height * height);
    return bmi;
  }

  static String getCategory(double bmi) {
    if (bmi >= 25) return 'Overweight';
    if (bmi > 18.5) return 'Normal';
    return 'Underweight';
  }
}

// Usage in UI
double weight = double.parse(weightController.text);
double height = double.parse(heightController.text);
double myBmi = BMIBrain.calculate(weight, height);`
    },
    "Result Display: Showing the calculated BMI clearly.": {
        title: "Displaying Results",
        explanation: "Showing results requires conditional styling or text to give the user feedback on their BMI category (Underweight, Normal, Overweight).",
        code: `Card(
  color: Colors.blue.shade100,
  child: Padding(
    padding: const EdgeInsets.all(32.0),
    child: Column(
      children: [
        Text('YOUR RESULT', style: TextStyle(letterSpacing: 2.0)),
        Text(
          '22.5',
          style: TextStyle(fontSize: 80, fontWeight: FontWeight.bold),
        ),
        Text(
          'NORMAL',
          style: TextStyle(color: Colors.green, fontWeight: FontWeight.bold),
        ),
        SizedBox(height: 20),
        Text('You have a normal body weight. Good job!', textAlign: TextAlign.center),
      ],
    ),
  ),
)`
    },
    "Using AI (ChatGPT/Claude) to explain errors and generate UI code.": {
        title: "AI-Powered Development",
        explanation: "AI tools can drastically speed up learning. You can paste an error message to get an explanation, or describe a UI and ask the AI to generate the nested widget code.",
        code: `// Prompt Example:
// "Hey Claude, can you explain why I'm getting 
// 'RenderBox was not laid out' in my Flutter Row? 
// Here is my code..."`
    },
    "Dividing into project groups (Teams).": {
        title: "Team Collaboration",
        explanation: "Working in teams mimics real-world development. Each team should have a Lead, a UI specialist, and a Logic specialist.",
        code: `// Group Roles:
// 1. Team Lead: Manages the project plan
// 2. UI Dev: Focuses on screens and styling
// 3. Logic Dev: Focuses on data and functions`
    },
    "Brainstorming and creating a simple project plan/sketch.": {
        title: "Project Planning",
        explanation: "Before coding, draw your app's screens on paper (wireframing). Define what happens when each button is clicked.",
        code: `// Plan Steps:
// 1. Identify the problem
// 2. Sketch the main screens
// 3. List the required widgets
// 4. Define the data flow`
    },
    "Setting up the local project folder structure.": {
        title: "Project Organization",
        explanation: "A clean folder structure makes your project easier to maintain. Usually, we have folders for 'models', 'screens', and 'widgets' inside the 'lib' folder.",
        code: `lib/
  main.dart           # Entry point
  app.dart            # Theme & MaterialApp
  screens/            # Full page widgets
    login_screen.dart
    home_screen.dart
    details_screen.dart
  widgets/            # Reusable components
    custom_card.dart
    app_button.dart
  models/             # Data classes
    product.dart
    user_model.dart
  services/           # API/Database logic
    database_helper.dart`
    },
    "Initial main.dart configuration.": {
        title: "Setting up main.dart",
        explanation: "The main.dart file is the entry point of your app. It contains the main() function and the MaterialApp widget which sets the theme and home screen.",
        code: `import 'package:flutter/material.dart';
import 'screens/home_screen.dart';

void main() {
  // Ensure Flutter is initialized
  WidgetsFlutterBinding.ensureInitialized();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Youth Programme App',
      theme: ThemeData(
        useMaterial3: true,
        primarySwatch: Colors.blue,
      ),
      home: const HomeScreen(),
    );
  }
}`
    },
    "Assigning screens/tasks to each team member.": {
        title: "Task Delegation",
        explanation: "Divide the work so everyone is productive. One person can work on the Login screen while another builds the Dashboard.",
        code: `// Trello/Task Board Example:
// -------------------------
// Member A: Setup Project & Git Repo
// Member B: Design UI for 'Input Screen'
// Member C: Design UI for 'Results Screen'
// Member D: Implement Calculation Logic (BMIBrain)`
    },
    "Implementing the primary functional screen.": {
        title: "Building the Core Feature",
        explanation: "Focus on the 'Minimum Viable Product' (MVP). Get the main feature of your app working before adding extra bells and whistles.",
        code: `// MVP Logic for a Calculator App:
// 1. Listen to button click
// 2. Read values from 2 text fields
// 3. Convert text to numbers
// 4. Perform math
// 5. Update UI with result`
    },
    "Adding navigation between screens.": {
        title: "App Navigation",
        explanation: "Flutter uses the Navigator widget to move between screens. Navigator.push() adds a new screen to the stack, and Navigator.pop() returns to the previous one.",
        code: `// Navigating to a new screen with data
void _goToDetails(BuildContext context, Product selectedProduct) {
  Navigator.push(
    context,
    MaterialPageRoute(
      builder: (context) => DetailsScreen(product: selectedProduct),
    ),
  );
}

// Returning to previous screen
ElevatedButton(
  onPressed: () => Navigator.pop(context),
  child: Text('Go Back'),
)`
    },
    "Integrating local data or state.": {
        title: "Data Integration",
        explanation: "Connect your UI to actual data. This might be a list of items that the user can interact with or add to.",
        code: `// Local Data Source
final List<Map<String, dynamic>> dummyData = [
  {"id": 1, "name": "Flutter Course", "price": 0.0},
  {"id": 2, "name": "Dart Mastery", "price": 10.0},
];

// Displaying in a ListView
ListView.builder(
  itemCount: dummyData.length,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text(dummyData[index]['name']),
      subtitle: Text('Price: $\{dummyData[index]['price']\}'),
    );
  },
)`
    },
    "Implementing secondary screens (About, Settings, etc.).": {
        title: "Adding More Depth",
        explanation: "Secondary screens provide additional information and settings, making the app feel complete and professional.",
        code: `class AboutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('About')),
      body: Center(
        child: Column(
          children: [
            FlutterLogo(size: 100),
            Text('Version 1.0.0'),
            Text('Built by Group 4 - Port Harcourt'),
          ],
        ),
      ),
    );
  }
}`
    },
    "Adding custom fonts, icons, and themes.": {
        title: "Premium UI Styling",
        explanation: "Customization makes your app stand out. You can change global colors, fonts, and button styles using the Theme widget.",
        code: `ThemeData myCustomTheme = ThemeData(
  brightness: Brightness.light,
  primaryColor: Colors.deepPurple,
  fontFamily: 'Inter', // From pubspec.yaml
  elevatedButtonTheme: ElevatedButtonThemeData(
    style: ElevatedButton.styleFrom(
      backgroundColor: Colors.deepPurple,
      foregroundColor: Colors.white,
    ),
  ),
  textTheme: TextTheme(
    displayLarge: TextStyle(fontSize: 32, fontWeight: FontWeight.bold),
    bodyMedium: TextStyle(fontSize: 16, color: Colors.grey[800]),
  ),
);`
    },
    "Input validation and user feedback (Snackbars, Dialogs).": {
        title: "User Feedback",
        explanation: "Always tell the user what happened. Use Snackbars for quick messages and Dialogs for important confirmations.",
        code: `// 1. Snackbar
ScaffoldMessenger.of(context).showSnackBar(
  SnackBar(
    content: Text('Profile saved successfully!'),
    backgroundColor: Colors.green,
    behavior: SnackBarBehavior.floating,
  ),
);

// 2. Alert Dialog
showDialog(
  context: context,
  builder: (context) => AlertDialog(
    title: Text('Confirm Delete'),
    content: Text('Are you sure you want to delete this item?'),
    actions: [
      TextButton(onPressed: () => Navigator.pop(context), child: Text('Cancel')),
      TextButton(onPressed: () => _doDelete(), child: Text('Delete')),
    ],
  ),
);`
    },
    "Refining spacing, colors, and consistent typography.": {
        title: "Visual Refinement",
        explanation: "Consistency is key to a professional look. Use a defined color palette and consistent padding (e.g., 8, 16, 24 pixels).",
        code: `// Using Sizedbox for consistent spacing
Column(
  children: [
    Text('Heading', style: Theme.of(context).textTheme.displayLarge),
    const SizedBox(height: 16), // Consistent Gap
    Text('Description text...', style: Theme.of(context).textTheme.bodyMedium),
    const Spacer(), // Pushes following widget to bottom
    ElevatedButton(onPressed: () {}, child: Text('Next')),
  ],
)`
    },
    "Testing the app for crashes and edge cases.": {
        title: "Testing & Debugging",
        explanation: "Try to 'break' your app. What happens if you leave a field empty? What if you click a button twice quickly? Fix these edge cases.",
        code: `// Defensive Programming Example
void onCalculatePressed() {
  String input = controller.text;
  
  if (input.isEmpty) {
    _showError("Input cannot be empty");
    return;
  }
  
  double? value = double.tryParse(input);
  if (value == null) {
    _showError("Please enter a valid number");
    return;
  }
  
  // Safe to proceed
  _runCalculation(value);
}`
    },
    "Optimizing performance and code readability.": {
        title: "Code Optimization",
        explanation: "Clean code is easier to maintain. Remove unused imports, use 'const' where possible, and break large widgets into smaller ones.",
        code: `// Refactoring: Extraction of widgets
class ProfileAvatar extends StatelessWidget {
  final String imageUrl;
  const ProfileAvatar({super.key, required this.imageUrl});

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: 50,
      backgroundImage: NetworkImage(imageUrl),
    );
  }
}

// usage: const ProfileAvatar(imageUrl: '...')`
    },
    "Preparing the demo script and slides.": {
        title: "Presentation Success",
        explanation: "A great demo needs a story. Explain the problem your app solves, then show how it works step-by-step.",
        code: `// Final Demo Checklist:
// 1. Introduction: Problem we solved
// 2. Feature Demo: Live interaction
// 3. Technical Detail: How we handled State
// 4. Team Reflection: What we learned`
    },
    "One-on-one help for those still having Flutter SDK or VS Code issues.": {
        title: "Technical Support",
        explanation: "This session is for resolving environment issues. Check your Flutter path, ensure VS Code extensions are installed, and verify your internet connection for package downloads.",
        code: `// Diagnostic Commands:
// ---------------------
// flutter doctor -v
// flutter clean
// flutter pub get
// flutter devices`
    },
    "Fixing gradle errors, emulator problems, and device connections.": {
        title: "Environment Troubleshooting",
        explanation: "Gradle errors often require cleaning the build. Emulator issues might need 'Hardware Acceleration' enabled in BIOS. For device connections, ensure USB Debugging is ON.",
        code: `// If Android build fails:
// 1. cd android
// 2. ./gradlew clean
// 3. cd ..
// 4. flutter run`
    },
    "Debugging code-level logic errors.": {
        title: "Debugging Techniques",
        explanation: "Use the Debug Console and print() statements to track variable values. Set breakpoints in VS Code to pause execution and inspect the app state.",
        code: `// Using Debug Prints
debugPrint('--- APP STATE ---');
debugPrint('User: $\{user.name\}');
debugPrint('Cart Total: $\{cart.total\}');`
    },
    "Final environment checks for Day 5 presentations.": {
        title: "Final Tech Check",
        explanation: "Ensure the presentation laptop is ready, cables are available, and the app is installed on at least two devices as a backup.",
        code: `// Device Prep:
// 1. Disable "Auto-Lock" (Stay Awake)
// 2. Enable "Show Taps" in Developer Options
// 3. Connect to HDMI/Projector early`
    },
    "Ensuring the app runs perfectly on a physical phone.": {
        title: "Physical Device Testing",
        explanation: "Running on a real phone is different from an emulator. Check for screen overflow, keyboard covering inputs, and overall performance.",
        code: `// Build for Release
// -----------------
// flutter build apk --split-per-abi
// flutter install`
    },
    "5-minute live demo of the app features.": {
        title: "Live Demo",
        explanation: "Be calm and confident. Show the user flow: Start the app, perform the main action (e.g., calculate BMI), and show the result.",
        code: `// Demo Script Example:
// "Hi, we are Group 1. Our app solves..."
// "Watch as I enter my height and weight..."
// "The BMI is 22, which is normal..."`
    },
    "Quick Q&A from facilitators and peers.": {
        title: "Q&A Session",
        explanation: "Be ready to explain how you solved a specific problem. If you don't know an answer, it's okay to say 'We'll look into that in the next version'.",
        code: `// Tips for Q&A:
// - Keep answers short
// - Let the right team member answer
// - Be honest about challenges`
    },
    "Explaining the technical challenges overcome.": {
        title: "Technical Reflection",
        explanation: "Highlight a specific bug you found and how you fixed it. This shows your problem-solving skills to the facilitators.",
        code: `// Reflection:
// "We had a pixel overflow on small screens, 
// so we wrapped our Column in a 
// SingleChildScrollView."`
    },
    "Presentation of certificates of completion.": {
        title: "Certification",
        explanation: "This certificate recognizes your commitment and the skills you've gained in Flutter development. Well done!",
        code: `// Certificate Details:
// - Name of Trainee
// - Date of Completion
// - Technology: Flutter & Dart`
    },
    "Closing remarks and roadmap for the future.": {
        title: "The Road Ahead",
        explanation: "This is just the beginning. The roadmap includes learning Firebase, State Management (Provider/Bloc), and API Integration.",
        code: `// Learning Roadmap:
// Month 1: Firebase & Auth
// Month 2: State Management (Provider)
// Month 3: REST APIs (http/dio)
// Month 4: Portfolio App`
    }
};

const daysData = {
    1: {
        title: "Foundations — Dart & Flutter Intro (DartPad)",
        sessions: [
            {
                time: "Session 1 (09:00 – 11:00 AM)",
                heading: "Software Design & Intro to Dart",
                description: "Getting started with architectural concepts and the Dart language using DartPad.",
                bullets: [
                    "Introduction to Software Architecture.",
                    "Thinking in Algorithms: Logic & Problem Solving.",
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
        deliverable: "Every participant understands basic software architecture, algorithmic thinking, and has written Dart code in DartPad."
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

function showModal(bulletText) {
    const details = detailsData[bulletText];
    if (!details) return;

    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = details.title;
    
    let bodyHtml = `
        <p>${details.explanation}</p>
    `;

    if (details.code) {
        bodyHtml += `
            <div class="code-block">
                <div class="code-header">
                    <span>Dart Example</span>
                </div>
                <pre><code class="language-dart">${details.code}</code></pre>
            </div>
        `;
    }

    bodyHtml += `
      
    `;

    modalBody.innerHTML = bodyHtml;
    modalOverlay.classList.add('active');
}

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
                            ${session.bullets.map(b => `<li onclick="showModal('${b}')">${b}</li>`).join('')}
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

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modalOverlay').classList.remove('active');
});

document.getElementById('modalOverlay').addEventListener('click', (e) => {
    if (e.target.id === 'modalOverlay') {
        document.getElementById('modalOverlay').classList.remove('active');
    }
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
