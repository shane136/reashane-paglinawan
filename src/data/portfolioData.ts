import { Project, SkillCategory, EducationItem, VbaSnippet, LatexTemplate } from '../types';

export const USER_PROFILE = {
  name: "Reashane Paglinawan",
  username: "shane136",
  title: "IoT Developer & Front-end Web Developer",
  subTitle: "Specializing in IoT Systems, Front-end Web Development, PHP & CodeIgniter 4, Excel VBA Automation, and LaTeX",
  bio: "BS Computer Applications graduate from MSU-IIT with specialized experience in IoT systems, Front-end web development, PHP & CodeIgniter 4, Excel VBA automation, and LaTeX scientific typesetting.",
  avatarUrl: "https://raw.githubusercontent.com/shane136/portfolio/main/assets/img/profile.jpg",
  fallbackAvatarUrl: "https://avatars.githubusercontent.com/u/73520530?v=4",
  githubUrl: "https://github.com/shane136",
  portfolioRepoUrl: "https://github.com/shane136/portfolio",
  location: "Iligan City, Philippines",
  email: "preashane5@gmail.com",
  statusMessage: "Available for IoT & Front-end Web Development Roles",
  educationDegree: "Bachelor of Science in Computer Applications",
  educationSchool: "Mindanao State University - Iligan Institute of Technology (MSU-IIT)",
  gradYear: "July 2022"
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "drr-fe",
    title: "Disaster Risk Reduction Management System",
    repoName: "drr-fe",
    description: "Web-based disaster response, hazard mapping, and municipal emergency management platform.",
    longDescription: "A comprehensive web application designed for municipal Disaster Risk Reduction and Management Councils (DRRMC). Enables real-time incident logging, disaster response unit dispatching, evacuation center monitoring, and interactive community risk mapping built on CodeIgniter 4.",
    techStack: ["PHP", "CodeIgniter 4", "MySQL", "JavaScript", "HTML5/CSS3", "REST API"],
    category: "web",
    githubUrl: "https://github.com/shane136/drr-fe",
    stars: 0,
    featured: true,
    updatedAt: "2023-10-22",
    iconName: "ShieldAlert",
    keyFeatures: [
      "Real-time disaster incident logging & geolocation tagging",
      "Evacuation center capacity tracking & resource inventory",
      "Emergency notification dispatch to localized units",
      "Responsive municipal hazard map integration"
    ]
  },
  {
    id: "Project",
    title: "Barangay Information & e-Services System",
    repoName: "Project",
    description: "Digital community administration portal for requesting official certificates and resident records online.",
    longDescription: "An online barangay information portal streamling citizen service requests. Residents can apply for official certificates (Indigency, Barangay Clearance, Certificate of Residency) remotely, while barangay staff verify, process, and issue digital records via an administrative control panel.",
    techStack: ["PHP", "MySQL", "Bootstrap", "JavaScript", "Web Architecture"],
    category: "web",
    githubUrl: "https://github.com/shane136/Project",
    stars: 3,
    featured: true,
    updatedAt: "2026-01-27",
    iconName: "FileCheck2",
    keyFeatures: [
      "Online certificate request workflow (Indigency, Clearance, Residency)",
      "Resident database with secure verification status",
      "Admin dashboard with automated PDF document generation",
      "Audit trail for issued barangay documents"
    ]
  },
  {
    id: "Web_HairSalon",
    title: "Hair Salon Web Appointment System",
    repoName: "Web_HairSalon",
    description: "Interactive online reservation and appointment scheduling platform for salon services.",
    longDescription: "A web platform allowing customers to view salon service catalogs, select stylists, inspect real-time schedule availability, and book appointments online. Features dynamic DOM updates and responsive layout styling.",
    techStack: ["JavaScript", "HTML5", "CSS3", "DOM Manipulation"],
    category: "web",
    githubUrl: "https://github.com/shane136/Web_HairSalon",
    stars: 0,
    featured: false,
    updatedAt: "2021-01-21",
    iconName: "Scissors",
    keyFeatures: [
      "Dynamic service selection and price calculator",
      "Interactive time-slot booking grid",
      "Stylist roster & specialization profiles",
      "Mobile-first responsive booking interface"
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Web Development & PHP",
    description: "Building responsive web interfaces and structured backend systems with PHP and CodeIgniter 4.",
    skills: [
      { name: "PHP & CodeIgniter 4", level: 90, icon: "Code2", details: "MVC architecture, application routing, database integration, REST APIs, session management" },
      { name: "Front-end Web Development", level: 88, icon: "Layout", details: "HTML5, CSS3, JavaScript DOM interaction, responsive layouts, user interface engineering" }
    ]
  },
  {
    title: "VBA Automation",
    description: "Eliminating repetitive manual spreadsheet tasks with custom Excel VBA subroutines and macros.",
    skills: [
      { name: "Excel VBA Automation", level: 95, icon: "FileSpreadsheet", details: "Worksheet event macros, automated data extraction, multi-sheet consolidations, error handling" },
      { name: "Automated Report Generation", level: 90, icon: "Zap", details: "Automated PDF batch report export, formatted output generation, spreadsheet data validation" }
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
  degree: "Bachelor of Science in Computer Applications",
  institution: "Mindanao State University - Iligan Institute of Technology (MSU-IIT)",
  gradDate: "Graduated July 2022",
  location: "Iligan City, Lanao del Norte, Philippines",
  highlights: [
    "Specialized in Computer Applications, Web Development, and Applied Systems.",
    "Developed practical capstone projects focusing on municipal digital services and web management systems.",
    "Trained in software architecture, database management, and technical documentation."
  ],
  coursework: [
    "Web Application Development",
    "Database Management Systems",
    "Object-Oriented Programming",
    "Software Engineering Principles",
    "Systems Analysis & Design"
  ]
};

export const VBA_SNIPPETS: VbaSnippet[] = [
  {
    id: "auto-consolidate",
    title: "Auto-Consolidate Worksheets",
    description: "Loops through all worksheets in a workbook, validates data columns, and aggregates rows into a master summary sheet.",
    useCase: "Consolidating monthly departmental reports into a single unified master audit table.",
    code: `Sub ConsolidateWorksheets()
    Dim ws As Worksheet, wsMaster As Worksheet
    Dim lastRow As Long, masterLastRow As Long
    
    Application.ScreenUpdating = False
    On Error GoTo ErrorHandler
    
    ' Set or create Master sheet
    Set wsMaster = Worksheets("Master Summary")
    masterLastRow = wsMaster.Cells(wsMaster.Rows.Count, "A").End(xlUp).Row + 1
    
    For Each ws In ThisWorkbook.Worksheets
        If ws.Name <> "Master Summary" And ws.Name <> "Config" Then
            lastRow = ws.Cells(ws.Rows.Count, "A").End(xlUp).Row
            If lastRow >= 2 Then
                ws.Range("A2:E" & lastRow).Copy
                wsMaster.Range("A" & masterLastRow).PasteSpecial xlPasteValues
                masterLastRow = wsMaster.Cells(wsMaster.Rows.Count, "A").End(xlUp).Row + 1
            End If
        End If
    Next ws
    
    Application.CutCopyMode = False
    Application.ScreenUpdating = True
    MsgBox "Worksheet consolidation completed successfully!", vbInformation, "Automation Complete"
    Exit Sub

ErrorHandler:
    Application.ScreenUpdating = True
    MsgBox "An error occurred: " & Err.Description, vbCritical, "VBA Error"
End Sub`
  },
  {
    id: "data-sanitizer",
    title: "Data Sanitizer & Email Extractor",
    description: "Cleans leading/trailing whitespace, converts case formatting, and validates email syntax across selected range.",
    useCase: "Pre-processing raw customer lead exports before database import.",
    code: `Sub SanitizeCustomerData()
    Dim cell As Range, targetRange As Range
    Dim emailPattern As String, regEx As Object
    
    Set targetRange = Selection
    Set regEx = CreateObject("VBScript.RegExp")
    
    With regEx
        .Pattern = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$"
        .IgnoreCase = True
    End With
    
    For Each cell In targetRange
        If Not IsEmpty(cell.Value) Then
            ' Trim and Clean
            cell.Value = Trim(Application.WorksheetFunction.Clean(cell.Value))
            
            ' Check if column is email
            If InStr(cell.Value, "@") > 0 Then
                If Not regEx.Test(cell.Value) Then
                    cell.Interior.Color = RGB(255, 230, 230) ' Flag invalid email in light red
                Else
                    cell.Value = LCase(cell.Value)
                    cell.Interior.Color = RGB(230, 255, 230) ' Valid email light green
                End If
            End If
        End If
    Next cell
    MsgBox "Data sanitization complete!", vbInformation, "Success"
End Sub`
  },
  {
    id: "pdf-exporter",
    title: "Batch PDF Report Exporter",
    description: "Generates custom invoice/report PDFs for each record and saves them automatically into structured folders.",
    useCase: "Automating monthly certificate and receipt generation with custom filenames.",
    code: `Sub ExportBatchPDFs()
    Dim wsInvoice As Worksheet, wsData As Worksheet
    Dim i As Long, lastRow As Long
    Dim savePath As String, fileName As String
    
    Set wsInvoice = Worksheets("InvoiceTemplate")
    Set wsData = Worksheets("ClientList")
    savePath = ThisWorkbook.Path & "\\GeneratedPDFs\\"
    
    If Dir(savePath, vbDirectory) = "" Then MkDir savePath
    
    lastRow = wsData.Cells(wsData.Rows.Count, "A").End(xlUp).Row
    
    For i = 2 To lastRow
        wsInvoice.Range("C4").Value = wsData.Cells(i, 1).Value ' Client Name
        wsInvoice.Range("C5").Value = wsData.Cells(i, 2).Value ' ID
        
        fileName = savePath & wsData.Cells(i, 2).Value & "_" & Replace(wsData.Cells(i, 1).Value, " ", "_") & ".pdf"
        
        wsInvoice.ExportAsFixedFormat Type:=xlTypePDF, fileName:=fileName, _
            Quality:=xlQualityStandard, IncludeDocProperties:=True, OpenAfterPublish:=False
    Next i
    
    MsgBox "Exported " & (lastRow - 1) & " PDF reports to: " & savePath, vbInformation, "Batch Export Complete"
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
