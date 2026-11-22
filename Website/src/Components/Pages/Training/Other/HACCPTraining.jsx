import TrainingCourse from "../TrainingCourse.jsx";

const content = {
  "path": "/services/trainings/haccp-training/",
  "title": "HACCP Awareness Training in Saudi Arabia",
  "metaTitle": "HACCP Awareness Training in Saudi Arabia | GLOBAQ",
  "metaDescription": "Learn HACCP food safety principles with GLOBAQ's HACCP Awareness Training in Saudi Arabia. Understand food safety hazards, critical control points and monitoring.",
  "description": "GLOBAQ provides HACCP Awareness Training in Saudi Arabia to help food industry professionals understand food safety hazards, critical control points and preventive control principles. The programme introduces HACCP fundamentals, monitoring requirements, corrective actions and practical applications in food safety management.",
  "hero": "Build Food Safety Knowledge Through HACCP Principles",
  "heroCopy": [
    "Strengthen food safety awareness with GLOBAQ's Hazard Analysis and Critical Control Points (HACCP) Training in Saudi Arabia.",
    "Our programme introduces the principles used to identify, evaluate and control food safety hazards, helping professionals understand preventive food safety practices and effective monitoring."
  ],
  "requestLabel": "Request HACCP Training Details",
  "exploreLabel": "Explore All Training Courses",
  "sections": [
    {
      "id": "training-overview",
      "title": "Professional HACCP Awareness Training",
      "blocks": [
        {
          "type": "p",
          "text": "Food safety requires a systematic approach to recognising potential hazards and understanding the controls needed to manage them."
        },
        {
          "type": "p",
          "text": "HACCP is a preventive food safety approach that identifies significant hazards and establishes controls at relevant stages of food operations."
        },
        {
          "type": "p",
          "text": "GLOBAQ provides HACCP Awareness Training to help participants understand fundamental HACCP concepts, food safety hazards, critical control points, monitoring and corrective actions."
        },
        {
          "type": "p",
          "text": "The programme uses practical examples to connect HACCP principles with relevant food safety activities."
        }
      ]
    },
    {
      "id": "training-coverage",
      "title": "What Does Our HACCP Training Cover?",
      "blocks": [
        {
          "type": "cards",
          "cards": [
            {
              "title": "Introduction to HACCP Principles",
              "body": "Understand the purpose of Hazard Analysis and Critical Control Points and its role in preventive food safety management."
            },
            {
              "title": "Food Safety Hazard Identification",
              "body": "Learn about potential biological, chemical and physical hazards that may affect food safety and the importance of identifying relevant risks."
            },
            {
              "title": "Critical Control Points (CCPs)",
              "body": "Understand what critical control points are and why they are important for controlling significant food safety hazards."
            },
            {
              "title": "Monitoring and Corrective Action",
              "body": "Explore the role of monitoring in checking whether food safety controls remain effective and the importance of taking corrective action when controls are not maintained."
            },
            {
              "title": "Practical HACCP Examples",
              "body": "Connect fundamental HACCP concepts with practical examples relevant to food handling, processing and food safety management."
            }
          ]
        }
      ]
    },
    {
      "id": "haccp-principles",
      "title": "Understanding the Seven HACCP Principles",
      "blocks": [
        {
          "type": "p",
          "text": "The internationally recognised HACCP framework consists of seven core principles:"
        },
        {
          "type": "list",
          "items": [
            "Conduct a hazard analysis.",
            "Determine critical control points.",
            "Establish critical limits.",
            "Establish monitoring procedures.",
            "Define corrective actions.",
            "Establish validation and verification procedures.",
            "Maintain appropriate documentation and records."
          ],
          "ordered": true
        },
        {
          "type": "p",
          "text": "GLOBAQ's documented programme focuses on HACCP awareness, including hazard identification, critical control points, monitoring and corrective action."
        }
      ]
    },
    {
      "id": "training-audience",
      "title": "Who Should Attend HACCP Awareness Training?",
      "blocks": [
        {
          "type": "list",
          "items": [
            "Food safety and quality assurance professionals",
            "Food processing and production personnel",
            "Food handlers and supervisors",
            "Food service and catering personnel",
            "Quality management teams",
            "Professionals involved in food safety monitoring and control"
          ]
        }
      ]
    },
    {
      "id": "training-benefits",
      "title": "Benefits of HACCP Awareness Training",
      "blocks": [
        {
          "type": "cards",
          "cards": [
            {
              "title": "Improve Food Safety Awareness:",
              "body": "Understand fundamental food safety hazards and preventive controls."
            },
            {
              "title": "Strengthen HACCP Knowledge:",
              "body": "Develop familiarity with HACCP principles and critical control points."
            },
            {
              "title": "Improve Hazard Recognition:",
              "body": "Recognise potential risks within relevant food operations."
            },
            {
              "title": "Support Food Safety Management:",
              "body": "Understand monitoring and corrective action practices."
            },
            {
              "title": "Build Employee Competence:",
              "body": "Develop foundational knowledge relevant to food safety responsibilities."
            }
          ]
        }
      ]
    },
    {
      "id": "why-choose-globaq",
      "title": "Why Choose GLOBAQ?",
      "blocks": [
        {
          "type": "p",
          "text": "GLOBAQ provides practical, industry-focused HACCP Awareness Training supported by quality and compliance professionals."
        },
        {
          "type": "p",
          "text": "Our programme introduces essential HACCP concepts through clear explanations and practical examples, helping participants understand the principles used to manage food safety hazards."
        }
      ]
    },
    {
      "id": "training-faqs",
      "title": "Frequently Asked Questions",
      "blocks": [
        {
          "type": "faq",
          "cards": [
            {
              "title": "What is HACCP Training?",
              "body": "HACCP Training introduces the principles of Hazard Analysis and Critical Control Points, a preventive approach to identifying and controlling significant food safety hazards."
            },
            {
              "title": "What are critical control points in HACCP?",
              "body": "Critical control points are stages where controls are essential to prevent, eliminate or reduce significant food safety hazards to acceptable levels."
            },
            {
              "title": "What is the difference between HACCP Awareness Training and HACCP certification?",
              "body": "HACCP Awareness Training develops knowledge of HACCP principles. Formal food safety system certification or other recognised qualifications involve separate assessment and certification requirements."
            }
          ]
        }
      ]
    }
  ],
  "request": {
    "title": "Request HACCP Awareness Training in Saudi Arabia",
    "paragraphs": [
      "Looking to improve employee awareness of HACCP principles and strengthen your organisation's understanding of food safety controls?",
      "Contact GLOBAQ to discuss your HACCP Awareness Training requirements."
    ]
  }
};

export default function HACCPTraining() {
  return <TrainingCourse content={content} />;
}
