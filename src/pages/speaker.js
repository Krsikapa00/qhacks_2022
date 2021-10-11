import React from 'react'
import StepperFrame from '../components/common/stepper/StepperFrame'
import StepperCardGeneral from '../components/common/stepper/StepperCardGeneral'
import "../components/common/stepper/Stepper.css"


import AhelyS from '../assets/images/speakers/headshots/AhelyS.jpg'
import AndreaCorey from '../assets/images/speakers/headshots/AndreaCorey.jpg'
import AniaHalliop from '../assets/images/speakers/headshots/AniaHalliop.jpg'
import AnujArora from '../assets/images/speakers/headshots/AnujArora.jpg'
import DevonThomson from '../assets/images/speakers/headshots/DevonThomson.jpg'
import JessicaN from '../assets/images/speakers/headshots/JessicaN.jpeg'
import NastaranBisheban from '../assets/images/speakers/headshots/NastaranBisheban.jpg'
import PrimroseC from '../assets/images/speakers/headshots/PrimroseC.jpeg'
import RavinaAnand from '../assets/images/speakers/headshots/RavinaAnand.jpg'
import SarahMaston from '../assets/images/speakers/headshots/SarahMaston.jpeg'
import SarahMuma from '../assets/images/speakers/headshots/SarahMuma.jpg'
import SarahWalters from '../assets/images/speakers/headshots/SarahWalters.jpg'

import AnastasiyaTarnouskaya from '../assets/images/speakers/headshots/AnastasiyaTarnouskaya.jpeg'
import AndrewLiu from '../assets/images/speakers/headshots/AndrewLiu.jpg'
import ArjunVegda from '../assets/images/speakers/headshots/ArjunVegda.jpg'
import BiswarupGhosh from '../assets/images/speakers/headshots/BiswarupGhosh.jpg'
import ChelseaPham from '../assets/images/speakers/headshots/ChelseaPham.jpg'
import ChrisMaltais from '../assets/images/speakers/headshots/ChrisMaltais.jpg'
import CooperThomasClark from '../assets/images/speakers/headshots/Cooper_Thomas-Clark.jpeg'
import DanKim from '../assets/images/speakers/headshots/DanKim.jpg'
import DavidHayes from '../assets/images/speakers/headshots/DavidHayes.jpg'
import DerekVogt from '../assets/images/speakers/headshots/DerekVogt.jpg'
import EmilyTamfo from '../assets/images/speakers/headshots/EmilyTamfo.jpeg'
import ErinGallagher from '../assets/images/speakers/headshots/ErinGallagher.jpg'
import GarretCree from '../assets/images/speakers/headshots/GarretCree.jpeg'
import HarryLewis from '../assets/images/speakers/headshots/HarryLewis.jpg'
import KerriLynn from '../assets/images/speakers/headshots/KerriLynn.jpg'
import KevinZuern from '../assets/images/speakers/headshots/KevinZuern.jpg'
import ManoochehrAkhlaghinia from '../assets/images/speakers/headshots/ManoochehrAkhlaghinia.jpg'
import MargoBain from '../assets/images/speakers/headshots/MargoBain.jpg'
import MatthewAn from '../assets/images/speakers/headshots/MatthewAn.jpg'
import MehryarMaalem from '../assets/images/speakers/headshots/MehryarMaalem.jpg'
import MichaelD from '../assets/images/speakers/headshots/MichaelD.jpg'
import NishantBhasin from '../assets/images/speakers/headshots/NishantBhasin.jpg'
import PhilipHan from '../assets/images/speakers/headshots/PhilipHan.jpg'
import SaraVanTol from '../assets/images/speakers/headshots/SaraVanTol.jpg'
import SimonLiu from '../assets/images/speakers/headshots/SimonLiu.jpeg'
import StefanSokic from '../assets/images/speakers/headshots/StefanSokic.jpg'
import TaliRemennik from '../assets/images/speakers/headshots/TaliRemennik.jpg'
import ZacharyFreedman from '../assets/images/speakers/headshots/ZacharyFreedman.jpeg'
import ZackHarley from '../assets/images/speakers/headshots/ZackHarley.jpg'





import Rogers from '../assets/images/sponsors/Rogers.png'
import kc10 from '../assets/images/speakers/logos/10kc.png'
import pwc from "../assets/images/speakers/logos/PwC.png"
import shopify from '../assets/images/speakers/logos/shopify.png'
import avo from "../assets/images/speakers/logos/avo.png"
import uber from "../assets/images/speakers/logos/uber.png";
import ibm from "../assets/images/speakers/logos/ibm.png";
import amazon from "../assets/images/speakers/logos/amazon.png";
import mozilla from "../assets/images/speakers/logos/mozilla.png";
import microsoft from "../assets/images/speakers/logos/Microsoft.png";
import accenture from "../assets/images/speakers/logos/accenture.png"
import himama from "../assets/images/speakers/logos/himama.png";
import pawzy from "../assets/images/speakers/logos/pawzy.png";
import knockri from "../assets/images/speakers/logos/knockri.png";
import pointcc from "../assets/images/speakers/logos/pointcc.png";
import intuit from "../assets/images/speakers/logos/intuit.png";
import connected from "../assets/images/speakers/logos/connected.svg";
import coursera from "../assets/images/speakers/logos/coursera.png";
import ontario from "../assets/images/speakers/logos/ontario.png";
import mars from "../assets/images/speakers/logos/mars.png";
import vs from "../assets/images/speakers/logos/vs.png";
import uhn from "../assets/images/speakers/logos/uhn.png";
import mosaic from "../assets/images/speakers/logos/Mosaic.png";
import bloomberg from "../assets/images/speakers/logos/bloomberg.png";
import freshbooks from "../assets/images/speakers/logos/freshbooks.png";
import yum from "../assets/images/speakers/logos/yum.png";
import flik from "../assets/images/speakers/logos/flik.png";
import elastic from "../assets/images/speakers/logos/elastic.png";
import google from "../assets/images/speakers/logos/google.png";
import opencare from "../assets/images/speakers/logos/opencare.png";


const WomeninSTEM = [
     [  //Women in STEMs
        {picture: AndreaCorey,  name:"Andrea Corey", position:"Director of Engineering", company:freshbooks},
        {picture: AniaHalliop,  name:"Ania Halliop", position:"Senior Engineering Manager", company:uber},
        {picture: NastaranBisheban,  name:"Nastaran Bisheban", position:"Chief Technology Officer at KFC Canada", company:yum},
        {picture: RavinaAnand,  name:"Ravina Anand", position:"Co-Founder & COO", company:flik},
        {picture: SarahMuma,  name:"Sarah Muma", position:"Cloud Solution Architect", company:microsoft},
        {picture: AhelyS,  name:"Ahley Shemontee", position:"Process Improvement Analyst", company:Rogers}
    ]
];
const DayinaLifeofaDeveloper = [
    [  //Women in STEMs
       {picture: DevonThomson,  name:"Devon Thomson", position:"Senior Software Engineer", company:elastic},
       {picture: PrimroseC,  name:"Primrose Chareka", position:"Software Engineer", company:google},
       {picture: StefanSokic,  name:"Stefan Sokic", position:"Software Developer", company:opencare},
       {picture: ZackHarley,  name:"Zackery Harley", position:"Software Development Engineer", company:kc10}
   ]
];

const MentorsandLeaders = [
    [  //Women in STEMs
       {picture: MargoBain,  name:"Margo Bain", position:"Senior Associate, Cybersecurity, Privacy, and Financial Crime", company:pwc},
       {picture: ChelseaPham,  name:"Chelsea Pham", position:"Advisory Associate, Cybersecurity & Privacy", company:pwc},
       {picture: ErinGallagher,  name:"Erin Gallagher", position:"Software Engineer", company:uber},
       {picture: DavidHayes,  name:"David Hayes", position:"CEO & Founder", company:avo},
       {picture: ChrisMaltais,  name:"Chris Maltais", position:"Software Engineer", company:shopify},
       {picture: SaraVanTol,  name:"Sara Van Tol", position:"Cross Platform Solution Specialist", company:microsoft},
    ],
    [
       {picture: SimonLiu,  name:"Simon Liu", position:"Software Engineer", company:coursera},
       {picture: NishantBhasin,  name:"Nishant Bhasin", position:"Senior Software Engineer", company:mozilla},
       {picture: PhilipHan,  name:"Philip Han", position:"Senior Software Engineer", company:intuit},
       {picture: MehryarMaalem,  name:"Mehryar Maalem", position:"Senior Software Engineer", company:ibm},
       {picture: ZacharyFreedman,  name:"Zachary Freedman", position:"Software Engineer", company:connected},
       {picture: MatthewAn,  name:"Matthew An", position:"Full-Stack Software Engineer", company:knockri},
    ],
    [
       {picture: GarretCree,  name:"Garret Cree", position:"Data Engineer", company:mars},
       {picture: ArjunVegda,  name:"Arjun Vegda", position:"Senior Software Developer", company:pointcc},
       {picture: AnastasiyaTarnouskaya,  name:"Anastasiya Tarnouskaya", position:"Product Manager", company:microsoft},
       {picture: CooperThomasClark,  name:"Cooper Thomas-Clark", position:"Software Development Engineer", company:amazon},
       {picture: EmilyTamfo,  name:"Emily Tamfo", position:"Product Manager", company:ontario},
       {picture: TaliRemennik,  name:"Tali Remennik", position:"Management Consultant", company:accenture},
    ],
    [
       {picture: BiswarupGhosh,  name:"Biswarup Ghosh", position:"Senior Data Scientist", company:accenture},
       {picture: HarryLewis,  name:"Harry Lewis", position:"Software Engineer", company:himama},
       {picture: AndrewLiu,  name:"Andrew Liu", position:"Software Engineer", company:vs},
       {picture: ManoochehrAkhlaghinia,  name:"Manoochehr Akhlaghinia", position:"Data Scientist/Engineer", company:accenture},
       {picture: KerriLynn,  name:"Kerri-Lynn McAllister", position:"Tech Leader, Founder of Pawzy", company:pawzy},
       {picture: DerekVogt,  name:"Derek Vogt", position:"Co-Founder & CTO", company:mosaic},
    ],
    [
       {picture: KevinZuern,  name:"Kevin Zuern", position:"Senior Software Engineer", company:uhn},
       {picture: DanKim,  name:"Dan Kim", position:"Senior Software Engineer", company:bloomberg}
   ]
];




const Speaker = () => {
    return (
        <div className="PageContainer">
            <h1 className="PageHeader" >Our Past Speakers</h1>

            <StepperFrame cards={WomeninSTEM} stepperTitle="Women in STEM" />
            <StepperFrame cards={DayinaLifeofaDeveloper} stepperTitle="Day in a Life of a Developer" />
            <StepperFrame cards = {MentorsandLeaders} stepperTitle="Additional Mentors and Workshop Leaders" />

            
        </div>
    )
}

export default Speaker
