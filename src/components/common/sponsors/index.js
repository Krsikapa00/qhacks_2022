import React from 'react'
import '../../../App.css'
import Aquanow from '../../../assets/images/sponsors/Aquanow.png'
import DDQIC from '../../../assets/images/sponsors/DDQIC.jpg'
import DistributedComputeLabs from '../../../assets/images/sponsors/DistributedComputeLabs.png'
import EchoAR from '../../../assets/images/sponsors/EchoAR.png'
import Fdm from '../../../assets/images/sponsors/Fdm.jpg'
import Kuzo from '../../../assets/images/sponsors/Kuzo.png'
import Microsoft from '../../../assets/images/sponsors/Microsoft.png'
import Mosiac from '../../../assets/images/sponsors/Mosaic.jpg'
import Protoio from '../../../assets/images/sponsors/Protoio.svg'
import PwC from '../../../assets/images/sponsors/PwC.png'
import Rogers from '../../../assets/images/sponsors/Rogers.png'
import Stickermule from '../../../assets/images/sponsors/Stickermule.png'
import TheCodex from '../../../assets/images/sponsors/TheCodex.jpg'
import Toyota from '../../../assets/images/sponsors/Toyota.png'
import Voiceflow from '../../../assets/images/sponsors/Voiceflow.png'
import balsamiq from '../../../assets/images/sponsors/balsamiq.png'
import flik from '../../../assets/images/sponsors/flik.png'
import godaddy from '../../../assets/images/sponsors/godaddy.png'
import ibm from '../../../assets/images/sponsors/ibm.png'
import kingston from '../../../assets/images/sponsors/kingston.svg'
import mlhblack from '../../../assets/images/sponsors/mlh-black.svg'
import mmie from '../../../assets/images/sponsors/mmie.jpg'
import sherpa from '../../../assets/images/sponsors/sherpa.png'
import { SponsorContainer, SponsorGigaLogo, SponsorGrid, SponsorLink, SponsorMegaLogo, SponsorHeader } from './sponsorElements'
import PartnershipCard from '../partnershipCard'


const SponsorsList = () => {
    return (
        <SponsorContainer className="sidePadding">
        <SponsorHeader>Our Past Sponsors</SponsorHeader>
        <div
            style={{
                color: "#00205B",
                width: "100%",
                borderRadius: "15px",
                background: "#00205B",
                textAlign: "center",
                padding: "10px 0"
            }}
            >
            <h2  
            
            style={{
                color: "#fff",
                textAlign: "center"
            }}
            >Giga Sponsors</h2>
         </div>
        <SponsorGrid>
            <SponsorLink href="https://jobs.rogers.com/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"1rem"}}>
                <SponsorGigaLogo src={Rogers} alt="Rogers" />
            </SponsorLink>
            <SponsorLink href="https://careers.microsoft.com/us/en" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"1rem"}}>
                <SponsorGigaLogo src={Microsoft} alt="Microsoft" />
            </SponsorLink>
           <SponsorLink href="https://www.ibm.com/ca-en/employment/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"1rem"}}>
                <SponsorMegaLogo src={ibm} alt="IBM" style={{width:"190px", height:"90px", padding:"0px 1px"}}/>
            </SponsorLink>
            <SponsorLink href="https://careers.godaddy.com/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"1rem"}}>
                <SponsorGigaLogo src={godaddy} alt="GoDaddy" style={{height:"110px", margin:"-20px -20px"}}/>
            </SponsorLink>
            <SponsorLink href="https://aquanow.io/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"1rem"}}>
                <SponsorGigaLogo src={Aquanow} alt="Aquanow" style={{width:"400px", height:"", padding:"0px -10px"}}/>
            </SponsorLink>
            
             <SponsorLink href="https://www.fdmgroup.com/en-ca/ca-careers/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"1rem"}}>
                <SponsorGigaLogo src={Fdm} alt="FDM" style={{width:"210px", height:"180px", margin:"-20px -10px"}}/>
            </SponsorLink>
        </SponsorGrid>
       
        <div
            style={{
                color: "#c81c2e",
                width: "100%",
                borderRadius: "15px",
                background: "#c81c2e",
                border: "1px solid #c81c2e",
                textAlign: "center",
                padding: "10px 0"
            }}
            >
            <h2  
            
            style={{
                color: "#fff",
                textAlign: "center"
            }}
            >Mega Sponsors</h2>
         </div>
        <SponsorGrid style={{
                // borderColor: "#c81c2e"
        }}>

            <SponsorLink href="https://distributed.computer/" target="_blank" rel="noreferrer" style={{ padding:"0rem"}}>
                <SponsorMegaLogo src={DistributedComputeLabs} alt="DistributedComputeLabs" style={{ width:"160px", height:"160px"}}/>
            </SponsorLink>
            <SponsorLink href="https://www.stickermule.com/ca/careers" target="_blank" rel="noreferrer" style={{ padding:"0.5rem"}}>
                <SponsorMegaLogo src={Stickermule} alt="Stickermule" />
            </SponsorLink>
            <SponsorLink href="https://thecodex.me/" target="_blank" rel="noreferrer" style={{ padding:"0.5rem"}}>
                <SponsorMegaLogo src={TheCodex} alt="TheCodex" />
            </SponsorLink>
            <SponsorLink href="https://weareflik.com/" target="_blank" rel="noreferrer" style={{ padding:"0.5rem"}} >
                <SponsorMegaLogo src={flik} alt="flik" />
            </SponsorLink>
  
            <SponsorLink href="https://balsamiq.com/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={balsamiq} alt="balsamiq"  style={{width:"190px", height:"100px", padding:"0px 1px"}}/>
            </SponsorLink>
            <SponsorLink href="https://www.echoar.xyz/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={EchoAR} alt="EchoAR" style={{width:"180px", height:"110px", padding:"0px"}}/>
            </SponsorLink>  
            <SponsorLink href="https://innovation-challenge.cityofkingston.ca/" target="_blank" rel="noreferrer">
                <SponsorMegaLogo src={kingston} alt="kingston" />
            </SponsorLink>
             <SponsorLink href="https://mlh.io/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={mlhblack} alt="mlhblack" style={{width:"160px", height:"90px", padding:"0px"}}/>
            </SponsorLink>
            <SponsorLink href="https://www.joinsherpa.com/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={sherpa} alt="sherpa" style={{width:"180px", height:"110px", padding:"0px"}}/>
            </SponsorLink>
            <SponsorLink href="https://www.toyota.ca/toyota/en/about/careers" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={Toyota} alt="Toyota" style={{width:"180px", height:"100px", padding:"0px"}}/>
            </SponsorLink>
            <SponsorLink href="https://kuzoclass.com/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={Kuzo} alt="Kuzo" style={{width:"180px", height:"250px", margin:"-60px 0px"}}/>
            </SponsorLink>
           
            
      

            <SponsorLink href="https://queensu.ca/innovationcentre" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={DDQIC} alt="DDQIC" style={{width:"180px", height:"110px", padding:"0px"}}/>
            </SponsorLink>           
            <SponsorLink href="https://www.pwc.com/ca/en/careers.html" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={PwC} alt="PwC" style={{width:"170px", height:"90px", padding:"0px"}}/>
            </SponsorLink>
            <SponsorLink href="https://smith.queensu.ca/grad_studies/mei/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={mmie} alt="mmie" style={{width:"280px", height:"110px", padding:"0px"}}/>
            </SponsorLink>
            <SponsorLink href="https://www.voiceflow.com/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={Voiceflow} alt="Voiceflow" style={{width:"170px", height:"90px", padding:"0px"}}/>
            </SponsorLink>
            <SponsorLink href="https://www.mosaicmfg.com/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={Mosiac} alt="Mosiac" style={{width:"180px", height:"120px", margin:"-15px 0px"}}/>
            </SponsorLink>
            <SponsorLink href="https://proto.io/" target="_blank" rel="noreferrer" style={{width:"", height:"", padding:"0.5rem"}}>
                <SponsorMegaLogo src={Protoio} alt="Protoio" style={{width:"180px", height:"180px", margin:"-40px 0"}}/>
            </SponsorLink>
        </SponsorGrid>
        <PartnershipCard/>
        </SponsorContainer>
    )
}

export default SponsorsList
