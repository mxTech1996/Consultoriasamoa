"use client";
import { pageName } from "@/data";
import axios from "axios";
import { useState, useEffect } from "react";

const url = `https://cms.mxtechconsulting.com/api/website/${pageName}/`;
const token = "069c07b020945e19690b026f15a9605f9cc84fa0";
const initialState = {
    "name": "Consultoriasamoa",
    "url": "http://w.w.w.terra.com",
    "telephone": "5554951634",
    "email": "admsamoa@emailsecure.lat",
    "address": "AV LOMAS DEL VALLE 430, N2 LOCAL 5, LOMAS DEL VALLE, GARZA GARCIA, NUEVO LEON, C.P. 66256",
    "description": "We specialize in providing tailored consulting solutions to optimize your administrative operations,with a focus on efficiency, compliance, and strategic growth, we help businesses streamline processes, enhance productivity, and achieve sustainable success.",
    "subtitle": "Streamlining Administrative Processes for Smarter, More Efficient Business Operations",
    "image_hero": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/consu1.jpg",
    "image_hero2": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/consu_2_.jpg",
    "iconImage": "https://cms-webserver-statics.s3.amazonaws.com/media/websites/consultoria-y-reclutamiento-samoa-high-resolution-logo.png",
    "info": [
        {
            "title": "Integrity",
            "description": "We prioritize honesty, transparency, and ethical business practices in every consulting service we provide."
        },
        {
            "title": "Efficiency",
            "description": "Our solutions are designed to streamline operations, reduce costs, and enhance productivity for sustainable business growth."
        },
        {
            "title": "Innovation",
            "description": "We embrace modern strategies and technologies to optimize administrative management and drive continuous improvement."
        }
    ],
    "services": [
        {
            "title": "Administrative Process Optimization",
            "description": "Improve workflow efficiency and eliminate bottlenecks to enhance overall productivity.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/samoa3.jpg"
        },
        {
            "title": "Policy Development & Compliance",
            "description": "Ensure your business adheres to industry regulations and best practices with customized policies.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/consu_4_.jpg"
        },
        {
            "title": "Resource Management & Allocation",
            "description": "Optimize human and material resources to maximize efficiency and reduce operational costs.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/consu5.jpg"
        },
        {
            "title": "Strategic Business Planning",
            "description": "Develop long-term administrative strategies to support sustainable growth and organizational success.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/consu_6_.jpg"
        },
        {
            "title": "Custom Administrative Training & Development",
            "description": "Equip your team with essential administrative skills through tailored training programs.",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/services/consu_7_.jpg"
        }
    ],
    "references": [
        {
            "name": "Sarah L,Operations Manager",
            "description": "Working with Consultoria samoa completely transformed our administrative processes,Their expert advice helped us streamline workflows, saving both time and money, We’re now more efficient and organized than ever before.",
            "rating": 5,
            "image": null
        },
        {
            "name": "Mark T, HR Director",
            "description": "The team not only helped us improve our internal processes, but they also developed a customized training program for our staff,We saw a noticeable improvement in productivity and morale within just a few months.",
            "rating": 5,
            "image": null
        },
        {
            "name": "Emily S,CEO",
            "description": "Their in-depth knowledge of compliance and resource management was invaluable for our business. We felt confident that every recommendation was well-researched and tailored to our specific needs.",
            "rating": 5,
            "image": null
        },
        {
            "name": "John D.,Business Owner",
            "description": "We were struggling with long-term planning, but after working with Consultoria we now have a clear, actionable strategy for the next five years,Their strategic guidance helped us align our administrative goals with overall business growth.",
            "rating": 5,
            "image": null
        },
        {
            "name": "Linda G, Finance Manager",
            "description": "Their suggestions were not only effective but also budget-friendly, helping us achieve better results without overspending.",
            "rating": 5,
            "image": null
        }
    ],
    "products": [
        {
            "id": 516,
            "name": "Business Process Audit Report",
            "category": null,
            "description": "A comprehensive analysis of current administrative workflows with recommendations for improvement.",
            "price": "799.99",
            "stock": 100,
            "content": "Assesses business processes based on predefined criteria such as efficiency, compliance, and risk management, Scope of Audit, Utilizes data collection techniques such as document reviews, interviews, Key Components, Executive Summary,Technology & Automation Integration,Stakeholder Involvement.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/consu_8_.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 517,
            "name": "Custom Policy & Procedure Manual",
            "category": null,
            "description": "A Custom Policy & Procedure Manual is a tailored document that outlines an organization's specific policies, procedures, and best practices,It serves as a comprehensive guide for employees, ensuring consistency, compliance, and efficiency in daily operations.",
            "price": "899.99",
            "stock": 100,
            "content": "Fully Customizable Content, designed to align with an organization’s unique goals, industry standards, and regulatory requirements, Comprehensive Structure, Clarity & Accessibility, \r\n professionally developed guide outlining company policies, Ensures the organization adheres to local, national,Operational Consistency & Standardization, Serves as a reference guide for new hires to understand company policies.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/consu_10_.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 518,
            "name": "Employee Training Modules",
            "category": null,
            "description": "Employee Training Modules are structured learning programs designed to develop employees’ skills, knowledge, and competencies,These modules help improve performance, ensure compliance, and foster professional growth within an organization.",
            "price": "999.99",
            "stock": 100,
            "content": "Customizable Content,Tailored to the organization's specific training needs, industry standards,Modular & Scalable Structure, Multiple Learning Formats, E-learning, Instructor-Led Training, Blended Learning, Interactive & Engaging Elements, Assessment & Feedback,Integration with Learning Management Systems.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/consu_11.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 519,
            "name": "Workflow Automation Toolkit",
            "category": null,
            "description": "A Workflow Automation Toolkit is a set of digital tools and resources designed to streamline business processes, reduce manual tasks, and improve operational efficiency. It enables organizations to automate repetitive workflows, enhance collaboration, and ensure consistency in task execution.",
            "price": "699.00",
            "stock": 100,
            "content": "Process Automation Capabilities, Pre-built templates for common business processes like HR onboarding, invoice processing, and customer support, Seamlessly integrates with CRM, ERP, HRM, accounting, and project management tools, User-friendly interface for designing workflows without coding, Task Assignment & Role-Based Access, Real-Time Monitoring & Reporting, Sends automated reminders and updates via email, SMS, or app notification.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/consu_12.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 520,
            "name": "Performance Monitoring Dashboard",
            "category": null,
            "description": "A customized dashboard that tracks key administrative KPIs and operational efficiency.",
            "price": "1099.99",
            "stock": 100,
            "content": "Process Automation Capabilities,Automates repetitive tasks such as approvals, data entry, and notifications, Pre-built templates for common business processes like HR onboarding, invoice processing, and customer support, Integration with Existing Systems, Enables businesses to create and modify workflows easily, Ensures accountability and smooth collaboration.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/consu_14.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 521,
            "name": "Strategic Planning Guide",
            "category": null,
            "description": "A Strategic Planning Guide is a comprehensive resource designed to assist organizations in developing and executing effective strategies. It offers a structured approach to aligning business objectives with actionable plans, ensuring that all efforts contribute to the organization's long-term success.",
            "price": "799.99",
            "stock": 100,
            "content": "Structured Framework, Provides a step-by-step methodology for strategic planning,Market Analysis Tools, Goal Setting and Metrics,Roadmap Development, Resource Allocation, Risk Management, Adaptability, Emphasizes the importance of flexibility.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/consu_15.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 522,
            "name": "Compliance & Risk Assessment Report",
            "category": null,
            "description": "A Compliance & Risk Assessment Report is a detailed document that helps organizations identify, evaluate, and manage risks associated with non-compliance with laws, regulations, and internal policies, This report is essential for ensuring that business operations are conducted within the applicable legal and regulatory framework, minimizing potential penalties and damage to reputation.",
            "price": "1299.99",
            "stock": 100,
            "content": "Risk Identification,Details specific compliance risks, including areas such as data privacy, cybersecurity, labor practices, and environmental regulations,Impact Evaluation,Analyzes the potential consequences of each identified risk, considering financial, operational, and reputational aspects,Risk Prioritization,Classifies risks based on their likelihood and potential impact, helping allocate resources for mitigation.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/consu_16.jpg",
            "image2": null,
            "image3": null
        },
        {
            "id": 523,
            "name": "Resource Allocation Framework",
            "category": null,
            "description": "A structured plan for optimizing human and material resource distribution within the organization.",
            "price": "999.99",
            "stock": 100,
            "content": "Resource Identification, Needs Assessment,Evaluates the requirements of different projects or departments to determine the necessary resources, Prioritization, Ranks projects or activities based on their strategic importance, potential return on investment,Allocation Strategy, Monitoring and Adjustment.",
            "product_type": "NORMAL",
            "image": "https://cms-webserver-statics.s3.amazonaws.com/media/products/consu_17.jpg",
            "image2": null,
            "image3": null
        }
    ],
    "categories": []
}
export const useInformation = () => {
  const [dataSite, setDataSite] = useState(initialState);

 

  return { dataSite };
};
