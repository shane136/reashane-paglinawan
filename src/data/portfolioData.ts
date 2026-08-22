import { Project, SkillCategory, EducationItem, VbaSnippet, LatexTemplate } from '../types';

export const USER_PROFILE = {
  name: "Reashane Paglinawan",
  username: "shane136",
  title: "IoT & Front-end Web Developer",
  subTitle: "Passionate about building reliable web platforms, intelligent automation solutions, IoT systems, and embedded applications.",
  bio: "I’m an IoT & Front-end Web Developer passionate about building reliable web platforms, intelligent automation solutions, IoT systems, and embedded applications. My work focuses on Front-end Web Development, PHP & CodeIgniter 4, AI-assisted development, Excel VBA automation, IoT, and Embedded Systems. I enjoy using AI assistants to explore ideas, solve development challenges, improve workflows, and build websites and applications more efficiently. I also enjoy working with microcontrollers, sensors, and embedded technologies to create practical systems that connect hardware and software. From sensor-based projects to automated devices, I’m interested in developing solutions that interact with the real world.",
  bioParagraph1: "I’m an IoT & Front-end Web Developer passionate about building reliable web platforms, intelligent automation solutions, IoT systems, and embedded applications.",
  bioParagraph2: "My work focuses on Front-end Web Development, PHP & CodeIgniter 4, AI-assisted development, Excel VBA automation, IoT, and Embedded Systems. I enjoy using AI assistants to explore ideas, solve development challenges, improve workflows, and build websites and applications more efficiently.",
  bioParagraph3: "I also enjoy working with microcontrollers, sensors, and embedded technologies to create practical systems that connect hardware and software. From sensor-based projects to automated devices, I’m interested in developing solutions that interact with the real world.",
  avatarUrl: "https://raw.githubusercontent.com/shane136/portfolio/main/assets/img/profile.jpg",
  fallbackAvatarUrl: "https://avatars.githubusercontent.com/u/73520530?v=4",
  githubUrl: "https://github.com/shane136",
  portfolioRepoUrl: "https://github.com/shane136/portfolio",
  location: "Iligan City, Philippines",
  email: "preashane5@gmail.com",
  statusMessage: "Available for Web Development, Automation & IoT Roles",
  educationDegree: "Bachelor of Science in Computer Applications Major in Internet of Things",
  educationSchool: "Mindanao State University - Iligan Institute of Technology (MSU-IIT)",
  gradYear: "July 2022"
};

export const WHAT_I_DO_ITEMS = [
  {
    title: "Front-end Web Development",
    description: "Building responsive and user-friendly websites and web platforms using PHP, CodeIgniter 4, and modern web technologies.",
    icon: "Layout"
  },
  {
    title: "AI-Assisted Development",
    description: "Using AI assistants to brainstorm, troubleshoot, improve development workflows, and accelerate website and application development.",
    icon: "Sparkles"
  },
  {
    title: "IoT Systems",
    description: "Developing sensor-based systems for monitoring, automation, and real-world applications.",
    icon: "Cpu"
  },
  {
    title: "Embedded Systems",
    description: "Working with microcontrollers, sensors, Arduino, and other embedded technologies to build practical hardware-software solutions.",
    icon: "Radio"
  },
  {
    title: "Workflow Automation",
    description: "Creating automated spreadsheet workflows and productivity tools using Excel VBA.",
    icon: "Zap"
  },
  {
    title: "Backend & Application Development",
    description: "Building structured and maintainable applications with PHP and CodeIgniter 4.",
    icon: "Code2"
  }
];

export const MY_APPROACH = {
  paragraph1: "I enjoy turning ideas into simple, reliable, and practical technology solutions. My interests span web development, AI, automation, IoT, and embedded systems, allowing me to work across both software and hardware.",
  paragraph2: "I’m continuously learning, experimenting with new technologies, and exploring better ways to combine software, hardware, automation, and AI to build useful digital and real-world solutions."
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "andam-ai",
    projectNumber: 1,
    title: "ANDAM AI – 24/7 AI Chatbot for Disaster Safety and Preparedness",
    repoName: "andam-ai",
    description: "Your 24/7 AI Chatbot for Disaster Safety and Preparedness in Iligan City. Features multilingual AI assistance (Bisaya, Filipino, English), ICDRRMD emergency hotlines, barangay risk mapping, safety guides, and family go-bag checklists.",
    longDescription: "A dedicated disaster risk reduction and management (DRRM) web platform built for Iligan City. Provides 24/7 AI-assisted emergency advisory grounded in official updates from Iligan ICDRRMD, DOST-PAGASA, and DOST-PHIVOLCS. Includes barangay-level risk assessments, family go-bag preparedness checklists, multilingual language switching (Bisaya, Filipino, English), voice output, and instant emergency hotline dispatching.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Next.js", "AI DRRM Assistant", "Multi-language (Bisaya/Filipino/English)", "Vercel"],
    category: "web",
    liveDemoUrl: "https://andam-ai.vercel.app/",
    status: "live",
    stars: 5,
    featured: true,
    updatedAt: "2026-08",
    iconName: "Sparkles",
    watermarkLabel: "ANDAM AI • VERIFIED LIVE",
    thumbnailUrl: "/src/assets/images/andam_ai_screenshot_1787398363041.jpg",
    keyFeatures: [
      "Iligan City DRRM AI Assistant: Verified responses grounded in ICDRRMD, DOST-PAGASA, and DOST-PHIVOLCS",
      "Multilingual Support: Seamless switching between Bisaya (Cebuano), Filipino, and English",
      "Barangay-Specific Risk Advisory & Emergency Hotlines (221-8459, 0997-726-2692, 0969-233-7878)",
      "Family Go-Bag & Disaster Safety Preparedness Interactive Guides",
      "Live interactive web application deployed on Vercel (andam-ai.vercel.app)"
    ]
  },
  {
    id: "iot-rainwater-harvesting-thesis",
    projectNumber: 2,
    title: "IoT-Based Smart Rainwater Harvesting with Monitoring and Filtration System",
    repoName: "iot-smart-rainwater-harvesting",
    description: "Undergraduate Thesis (MSU-IIT): An automated IoT rainwater harvesting system with ultrafiltration water purification, ThingSpeak cloud telemetry, MIT App Inventor Android monitoring, and GSM SMS alerts.",
    longDescription: "Undergraduate Thesis conducted at Mindanao State University - Iligan Institute of Technology (MSU-IIT), College of Computer Studies, Department of Computer Applications. Designed to alleviate potable water scarcity for upland communities in Zone 15 & 17, Fatima, Abuno, Iligan City. Features a multi-stage water treatment system incorporating an ultrafiltration water purification system, three Arduino Uno microcontrollers, ultrasonic level sensors, pH sensor, water flow sensor, rain sensor, servo-controlled valve, ThingSpeak IoT cloud logging, MIT App Inventor Android mobile app, and GSM SMS notifications.",
    techStack: ["IoT System", "Arduino Uno", "ThingSpeak Cloud", "MIT App Inventor", "GSM Module", "Ultrasonic Sensors", "pH Sensor", "Ultrafiltration", "Chemical Analysis"],
    category: "iot",
    liveDemoUrl: "https://drive.google.com/file/d/1LFj46eiEwWgFcoYlPs7mcm45rPJvRGM6/view?usp=sharing",
    status: "completed",
    stars: 5,
    featured: true,
    updatedAt: "MSU-IIT Thesis",
    iconName: "Cpu",
    watermarkLabel: "MSU-IIT THESIS • GOOGLE DRIVE",
    thumbnailUrl: "",
    keyFeatures: [
      "Ultrafiltration Water Purification: Chemical analysis confirmed compliance with Philippine National Standards for Drinking Water (PNSDW 2017) for pH, TDS, and temperature",
      "IoT Cloud Telemetry: Real-time sensor logging to ThingSpeak Cloud Server and custom MIT App Inventor Android mobile application",
      "Multi-Microcontroller Architecture: 3 Arduino Uno boards coordinating 3 water tanks (18L per container), ultrasonic level sensors, water flow meter, and rain sensor",
      "Automated GSM SMS Alerts: Instant SMS notifications dispatched for water acid/mineral levels, tank capacity states, and filtration status",
      "Servo-Actuated Rain Inflow: Automatic diversion of pre-filtered vs. post-filtered rainwater via servo-controlled ball valve and rain sensor triggers"
    ]
  },
  {
    id: "smart-blind-stick",
    projectNumber: 3,
    title: "Smart Blind Stick with Arduino Uno",
    repoName: "smart-blind-stick-arduino",
    description: "Capstone Project (BCA188 Embedded Systems): A sensor-equipped assistive white cane with ultrasonic obstacle detection, LDR ambient darkness alerts, sound-triggered find-my-stick buzzer, and MIT App Inventor Bluetooth voice output.",
    longDescription: "Capstone Project for BCA188 (Embedded Systems). Developed a low-cost, multi-sensor assistive navigation white cane designed to empower visually impaired individuals to navigate unfamiliar environments safely and independently. Integrates an HC-SR04 ultrasonic distance sensor, an LDR ambient light sensor, a high-sensitivity sound sensor, twin piezo buzzers, status LEDs, and an HC-05 Bluetooth transceiver linked to a custom MIT App Inventor Android companion application that provides real-time spoken voice guidance.",
    techStack: ["Arduino Uno", "MIT App Inventor", "HC-05 Bluetooth", "Ultrasonic Sensor", "LDR Light Sensor", "Sound Sensor", "Embedded Systems", "C++ / Hardware"],
    category: "embedded",
    liveDemoUrl: "https://drive.google.com/file/d/1q0O2CSbukqFi9krv4dNYKIT05aR94OEh/view?usp=sharing",
    status: "completed",
    stars: 5,
    featured: true,
    updatedAt: "Capstone Project",
    iconName: "Cpu",
    watermarkLabel: "CAPSTONE • GOOGLE DRIVE",
    thumbnailUrl: "",
    keyFeatures: [
      "01 / Obstacle Sensing (Ultrasonic): Measures distance up to 40cm ahead and triggers audible buzzer + LED alerts",
      "02 / Ambient Light Detection (LDR): Reads ambient light levels and sounds a darkness alert when conditions change",
      "03 / Find-My-Stick (Sound Sensor): Listens for a clap or whistle and responds with buzzer tones to easily relocate the cane",
      "MIT App Inventor Android App: Bluetooth (HC-05) communication speaking obstacle distances aloud via Text-to-Speech",
      "Hardware Architecture: 2× Arduino Uno, 9V battery power with 5V regulation, and 40.5\" lightweight PVC cane build"
    ]
  },
  {
    id: "purok-data-automation",
    projectNumber: 4,
    title: "Purok Data Automation & Clearance System (Excel VBA)",
    repoName: "excel-vba-purok-system",
    description: "Custom desktop Excel VBA UserForm solution built for local barangay community record-keeping, real-time census metrics calculation, resident ledger management, and one-click official Purok Clearance generation.",
    longDescription: "A custom desktop automation tool built in Microsoft Excel VBA featuring a dual-tab UserForm interface (HOME Dashboard & LIST OF RESIDENTS). Provides real-time calculation of total population, printed clearances, and gender demographics, alongside a complete resident database with search filtering, record update/edit/delete actions, and automated Purok Clearance document generation.",
    techStack: ["Excel VBA", "VBA UserForm", "Desktop Automation", "Macro Programming", "Database Ledger", "Certificate Printing"],
    category: "automation",
    liveDemoUrl: "",
    status: "completed",
    stars: 5,
    featured: true,
    updatedAt: "Excel VBA",
    iconName: "FileSpreadsheet",
    watermarkLabel: "EXCEL VBA • USERFORM",
    thumbnailUrl: "",
    keyFeatures: [
      "Dual-Tab VBA UserForm: Seamless switching between 'HOME' statistical dashboard and 'LIST OF RESIDENTS' registry",
      "Real-Time Demographics Engine: Live tally of Total Population (10), Printed Clearances (36), and Male (5) / Female (5) distribution",
      "Interactive Resident Management: Form controls for Last Name, First Name, Middle Name, Religion, Age, Sex, Marital Status, Contact, and Voter Status",
      "Multi-Field Search & Filter: Instant filtering across Resident ID, Name, and Age with real-time listbox updates",
      "Automated Purok Clearance Printing: One-click generation and print formatting of official barangay Purok Clearances"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Web Development & AI Solutions",
    description: "Building responsive, modern web applications, interactive user interfaces, and integrating AI-assisted solutions.",
    skills: [
      { name: "Front-end & Web Apps", level: 92, icon: "Layout", details: "Responsive UI engineering, React/Next.js workflows, modern JavaScript/TypeScript, DOM interaction, HTML5/CSS3" },
      { name: "PHP & CodeIgniter 4", level: 90, icon: "Code2", details: "MVC architecture, application routing, database integration, REST APIs, session management" }
    ]
  },
  {
    title: "Workflow & Spreadsheet Automation",
    description: "Designing streamlined workflow automations, AI prompt pipelines, and eliminating repetitive manual spreadsheet tasks.",
    skills: [
      { name: "Digital Workflow Automation", level: 90, icon: "Zap", details: "Automated task pipelines, AI-assisted process workflows, API orchestration, and structured data handling" },
      { name: "Excel VBA Automation", level: 95, icon: "FileSpreadsheet", details: "Worksheet event macros, automated data extraction, multi-sheet consolidations, error handling & batch reports" }
    ]
  },
  {
    title: "IoT & Hardware Integration",
    description: "Interfacing physical sensor devices with telemetry capture and digital monitoring.",
    skills: [
      { name: "IoT Systems & Telemetry", level: 88, icon: "Cpu", details: "Environmental sensors, signal capture, real-time threshold monitoring, status logging" },
      { name: "Hardware Interfacing", level: 85, icon: "Activity", details: "Sensor communication protocols, microcontroller telemetry sampling, serial data streaming" }
    ]
  },
  {
    title: "LaTeX Typesetting",
    description: "Precision document layout and mathematical notation typesetting.",
    skills: [
      { name: "LaTeX Document Formatting", level: 92, icon: "FileText", details: "Academic paper layout, mathematical formulas, custom CV structure, technical documentation" },
      { name: "Scientific Typesetting", level: 90, icon: "BookOpen", details: "AMS-LaTeX notation, structured document sections, bibliography referencing, figures" }
    ]
  }
];

export const EDUCATION_DATA: EducationItem = {
  degree: "Bachelor of Science in Computer Applications Major in Internet of Things",
  institution: "Mindanao State University - Iligan Institute of Technology (MSU-IIT)",
  gradDate: "Graduated July 2022",
  location: "Iligan City, Lanao del Norte, Philippines",
  internship: {
    role: "Research Assistant Intern (On-The-Job)",
    period: "Jan 2022 – Jun 2022",
    department: "College of Computer Studies - Department of Computer Applications",
    points: [
      "Assisted in research development under the project “Design and Development of a Microcontroller-based Water Level and Soil Moisture Monitoring and an Irrigation Scheduling System for Rice Farming”.",
      "Contributed to research documentation, hardware testing, embedded laboratory maintenance, and the implementation of basic logic circuits to support system development and testing."
    ]
  },
  coursework: [
    "Internet of Things & Embedded Systems",
    "Microcontrollers & Sensor Interfacing",
    "Web Application Development (PHP & CodeIgniter)",
    "Database Management Systems",
    "Object-Oriented Programming"
  ]
};

export const VBA_SNIPPETS: VbaSnippet[] = [
  {
    id: "purok-automation-userform",
    title: "Purok Data Automation & Census Dashboard (UserForm1)",
    description: "Interactive Excel VBA UserForm providing a centralized community dashboard with live population and gender census counters, resident registration, and real-time records management.",
    useCase: "Streamlining barangay/purok resident census logging, dynamic gender demographic tracking, and real-time record lookup directly within Excel.",
    code: `' =========================================================================
' UserForm1: PUROK DATA AUTOMATION - Dashboard & Records Manager
' Developed by: Reashane Paglinawan
' =========================================================================

Option Explicit

Private Sub UserForm_Initialize()
    ' Initialize Dashboard Census Metrics
    Call RefreshDashboardMetrics
    
    ' Populate Dropdown Options
    With cboSex
        .Clear
        .AddItem "MALE"
        .AddItem "FEMALE"
    End With
    
    With cboMaritalStatus
        .Clear
        .AddItem "SINGLE"
        .AddItem "MARRIED"
        .AddItem "WIDOWED"
        .AddItem "DIVORCED"
    End With
    
    With cboVoterStatus
        .Clear
        .AddItem "REGISTERED"
        .AddItem "NON-REGISTERED"
    End With
    
    ' Load Residents into ListBox
    Call LoadResidentsList
End Sub

Public Sub RefreshDashboardMetrics()
    Dim ws As Worksheet
    Dim lastRow As Long, i As Long
    Dim totalPop As Long, maleCount As Long, femaleCount As Long, clearanceCount As Long
    
    Set ws = ThisWorkbook.Sheets("RESIDENTS_DB")
    lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
    
    totalPop = 0
    maleCount = 0
    femaleCount = 0
    
    If lastRow >= 2 Then
        totalPop = lastRow - 1
        For i = 2 To lastRow
            If UCase(Trim(ws.Cells(i, 6).Value)) = "MALE" Then
                maleCount = maleCount + 1
            ElseIf UCase(Trim(ws.Cells(i, 6).Value)) = "FEMALE" Then
                femaleCount = femaleCount + 1
            End If
        Next i
    End If
    
    ' Retrieve printed clearances counter
    clearanceCount = ThisWorkbook.Sheets("CONFIG").Range("B2").Value
    
    ' Update Dashboard Labels
    lblPopulation.Caption = totalPop
    lblMaleCount.Caption = maleCount
    lblFemaleCount.Caption = femaleCount
    lblPrintedClearances.Caption = clearanceCount
End Sub`
  },
  {
    id: "purok-add-resident",
    title: "Add Resident & Automated Data Formatting Subroutine",
    description: "Validates user inputs, automatically generates sequential IDs, cleans whitespace, appends data to the Excel database, and refreshes the live census.",
    useCase: "Ensuring structured data integrity when registering new residents into the purok database.",
    code: `Private Sub cmdAdd_Click()
    Dim ws As Worksheet
    Dim nextRow As Long, newID As Long
    
    ' Validation Checks
    If Trim(txtLastName.Text) = "" Or Trim(txtFirstName.Text) = "" Then
        MsgBox "Please enter Last Name and First Name.", vbExclamation, "Missing Information"
        txtLastName.SetFocus
        Exit Sub
    End If
    
    If cboSex.Value = "" Then
        MsgBox "Please select gender.", vbExclamation, "Validation Error"
        Exit Sub
    End If
    
    Set ws = ThisWorkbook.Sheets("RESIDENTS_DB")
    nextRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row + 1
    
    If nextRow = 2 Then
        newID = 1
    Else
        newID = ws.Cells(nextRow - 1, 1).Value + 1
    End If
    
    ' Write to database
    ws.Cells(nextRow, 1).Value = newID
    ws.Cells(nextRow, 2).Value = UCase(Trim(txtLastName.Text))
    ws.Cells(nextRow, 3).Value = UCase(Trim(txtFirstName.Text))
    ws.Cells(nextRow, 4).Value = UCase(Trim(txtMiddleName.Text))
    ws.Cells(nextRow, 5).Value = Val(txtAge.Text)
    ws.Cells(nextRow, 6).Value = UCase(Trim(cboSex.Text))
    ws.Cells(nextRow, 7).Value = UCase(Trim(cboMaritalStatus.Text))
    ws.Cells(nextRow, 8).Value = UCase(Trim(txtReligion.Text))
    ws.Cells(nextRow, 9).Value = Trim(txtContact.Text)
    ws.Cells(nextRow, 10).Value = UCase(Trim(cboVoterStatus.Text))
    
    ' Refresh UI and Clear Form
    Call RefreshDashboardMetrics
    Call LoadResidentsList
    Call ClearFormFields
    
    MsgBox "Resident record successfully added with ID #" & newID, vbInformation, "Record Saved"
End Sub`
  },
  {
    id: "purok-clearance-generator",
    title: "Automated Purok Clearance Document & Print Preview Generator",
    description: "Extracts selected resident details, populates an official legal certification template sheet, computes the 3-month validity date, increments the clearance log counter, and triggers Excel Print Preview.",
    useCase: "Instant generation of official Purok Clearance documents for legal identification, employment, or barangay transactions.",
    code: `Public Sub PrintPurokClearance(residentID As Long)
    Dim wsDB As Worksheet, wsClearance As Worksheet, wsConfig As Worksheet
    Dim matchRow As Variant, fullName As String
    Dim currentDate As String, issueDay As String
    
    Set wsDB = ThisWorkbook.Sheets("RESIDENTS_DB")
    Set wsClearance = ThisWorkbook.Sheets("PUROK_CLEARANCE")
    Set wsConfig = ThisWorkbook.Sheets("CONFIG")
    
    ' Locate resident row
    matchRow = Application.Match(residentID, wsDB.Columns(1), 0)
    If IsError(matchRow) Then
        MsgBox "Resident record not found!", vbCritical, "Error"
        Exit Sub
    End If
    
    ' Format Full Name: LAST NAME, FIRST NAME MIDDLE NAME
    fullName = wsDB.Cells(matchRow, 2).Value & ", " & _
               wsDB.Cells(matchRow, 3).Value & " " & _
               wsDB.Cells(matchRow, 4).Value
               
    ' Inject dynamic fields into Clearance Template
    currentDate = Format(Date, "dddd, d mmmm yyyy")
    
    With wsClearance
        .Range("B8").Value = "This is to certify that " & fullName & ", Filipino, of legal age, and a resident of Zone 1, Barangay Unknown, Wolves City, Lanao del Norte, Philippines has personally appeared before me and has submitted the necessary documents to support the issuance of a Purok Clearance."
        .Range("B14").Value = "This Purok Clearance is valid for 3 months from the date of issuance."
        .Range("B16").Value = "Issued this " & currentDate & " at Zone 1, Barangay Unknown, Wolves City, Lanao del Norte, Philippines."
        
        ' Increment Clearance Log Counter
        wsConfig.Range("B2").Value = wsConfig.Range("B2").Value + 1
        
        ' Open Print Preview
        .PrintPreview
    End With
    
    Call RefreshDashboardMetrics
End Sub`
  },
  {
    id: "purok-generate-list",
    title: "Generate Formatted Residents Data Sheet & Roster Report",
    description: "Compiles all resident demographic records into a clean 'RESIDENTS DATA' sheet with highlighted headers, bordered cells, and landscape print formatting.",
    useCase: "Generating official community census rosters for barangay council reviews and audit submissions.",
    code: `Public Sub GenerateResidentsListReport()
    Dim wsDB As Worksheet, wsReport As Worksheet
    Dim lastRow As Long
    
    Set wsDB = ThisWorkbook.Sheets("RESIDENTS_DB")
    Set wsReport = ThisWorkbook.Sheets("RESIDENTS DATA")
    
    lastRow = wsDB.Cells(wsDB.Rows.Count, "A").End(xlUp).Row
    If lastRow < 2 Then
        MsgBox "No resident records found to generate report.", vbInformation, "Empty Database"
        Exit Sub
    End If
    
    Application.ScreenUpdating = False
    
    ' Clear and format Report Sheet
    wsReport.Cells.Clear
    wsReport.Range("A2:I2").Merge
    wsReport.Range("A2").Value = "RESIDENTS DATA"
    wsReport.Range("A2").Font.Bold = True
    wsReport.Range("A2").HorizontalAlignment = xlCenter
    
    ' Copy headers and data
    wsDB.Range("A1:I" & lastRow).Copy wsReport.Range("A4")
    
    ' Apply Header Styling (Yellow Banner)
    With wsReport.Range("A4:I4")
        .Interior.Color = RGB(255, 255, 0) ' Yellow Header
        .Font.Bold = True
        .Font.Name = "Calibri"
        .Font.Size = 10
    End With
    
    ' Auto-fit columns and set borders
    wsReport.Columns("A:I").AutoFit
    wsReport.Range("A4:I" & (lastRow + 3)).Borders.LineStyle = xlContinuous
    
    Application.ScreenUpdating = True
    
    ' Show Print Preview
    wsReport.PrintPreview
End Sub`
  }
];

export const LATEX_TEMPLATES: LatexTemplate[] = [
  {
    id: "tech-cv",
    title: "Technical Resume / Curriculum Vitae",
    description: "Clean single-page technical CV template with custom section styling and skill matrix.",
    code: `\\documentclass[10pt,a4paper]{article}
\\usepackage[margin=0.6in]{geometry}
\\usepackage{hyperref}
\\usepackage{xcolor}
\\usepackage{titlesec}
\\usepackage{enumitem}

\\definecolor{primary}{RGB}{15, 23, 42}
\\definecolor{accent}{RGB}{14, 165, 233}

\\titleformat{\\section}{\\large\\bfseries\\color{primary}}{}{0em}{}[\\titlerule]
\\titlespacing*{\\section}{0pt}{12pt}{6pt}

\\begin{document}
\\pagestyle{empty}

\\begin{center}
    {\\Huge \\bfseries \\color{primary} Reashane Paglinawan}\\\\[4pt]
    {\\large \\color{accent} IoT Developer $|$ Front-end Web Developer}\\\\[4pt]
    Iligan City, Philippines $|$ preashane5@gmail.com $|$ \\url{https://github.com/shane136}
\\end{center}

\\section*{Technical Skills}
\\begin{itemize}[leftmargin=1.2em, itemsep=2pt]
    \\item \\textbf{Web Development:} Front-end Web Development (HTML5, CSS3, JavaScript), PHP, CodeIgniter 4, MySQL
    \\item \\textbf{VBA Automation:} Excel VBA Macros, Automated Report Workflows, Data Validation
    \\item \\textbf{IoT \\& Hardware:} IoT Systems, Sensor Telemetry (Temperature/Humidity/Pressure), Hardware Interfaces
    \\item \\textbf{LaTeX Typesetting:} LaTeX Document Formatting, AMS Mathematics, Scientific Papers, Technical CVs
\\end{itemize}

\\section*{Education}
\\textbf{Bachelor of Science in Computer Applications} \\hfill Graduated July 2022\\\\
\\textit{Mindanao State University - Iligan Institute of Technology (MSU-IIT)}
\\begin{itemize}[leftmargin=1.2em, itemsep=1pt]
    \\item Core coursework in Web Development, Database Management Systems, and Software Engineering.
\\end{itemize}

\\section*{Featured Projects}
\\textbf{Disaster Risk Reduction Management System (DRRMC)} \\hfill \\textit{PHP, CodeIgniter 4, MySQL}\\\\
\\begin{itemize}[leftmargin=1.2em, itemsep=1pt]
    \\item Developed municipal emergency response logging and real-time hazard mapping portal.
\\end{itemize}

\\textbf{Barangay Information \\& e-Services Portal} \\hfill \\textit{PHP, MySQL, Web Architecture}\\\\
\\begin{itemize}[leftmargin=1.2em, itemsep=1pt]
    \\item Built online document request workflow for citizen clearances and residency verification.
\\end{itemize}

\\end{document}`
  },
  {
    id: "iot-report",
    title: "IoT Systems Technical Report",
    description: "Formal engineering project document with mathematical equations and system block diagrams.",
    code: `\\documentclass[11pt,a4paper]{article}
\\usepackage[utf8]{utf8}
\\usepackage{amsmath,amssymb}
\\usepackage{graphicx}
\\usepackage{tikz}
\\usetikzlibrary{shapes.geometric, arrows}

\\title{\\textbf{Design and Calibration of Microcontroller Sensor Integration Node}}
\\author{\\textbf{Reashane Paglinawan} \\\\ IoT Developer \\& Front-end Web Developer}
\\date{August 2026}

\\begin{document}
\\maketitle

\\begin{abstract}
This report outlines the hardware interfacing and calibration protocol for an embedded environmental IoT sensor node using SPI/I2C communication.
\\end{abstract}

\\section{Telemetry Transfer Function}
The calibrated analog voltage output $V_{out}$ is converted to temperature $T$ (°C) using the formula:
\\begin{equation}
T = \\frac{V_{out} - V_0}{S_c} \\cdot \\left(1 + \\alpha (P - P_0)\\right)
\\end{equation}
where $S_c$ represents sensor sensitivity and $P$ is ambient pressure.

\\end{document}`
  }
];
