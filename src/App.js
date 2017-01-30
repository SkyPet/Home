import React, {Component} from 'react';
//import './App.css';
import {Jumbotron,  Row, Col, Panel, Grid, Label} from 'react-bootstrap';

const WhoItHelps=[
    {
        imgClass:'consumer',
        title:'Why does my pet need to be evaluated every time I move?',
        text:'Centralized pet owner ecosystem for vaccinations, licenses, history, and data records.',
        description:<div><p>Sole ownership of pet data</p><p>No need to trust pet service providers to secure and maintain pet data</p><p>Central and user-friendly portal into pet data</p></div>
    },
    {
        imgClass:'pet-service-provider',
        title:"How can I easily access my client's records and focus on my work?",
        text:"Use the chip in the pet to identify medical history.",
        description:<div><p>Direct relationship between pet chip identification and pet data</p><p>No need to deal with disparate and disorganized chip scanning software</p><p>No need to store medical/behavioral data</p></div>
    },
    {
        imgClass:'pet-tech',
        title:"How can I interact with other IoT devices?",
        text:"Build to scale, low barrier to entry, take advantage to network effects.",
        description:<div><p>Single API to connect for pet data</p><p>Leverage technology and network that everyone else is using</p><p>Gain awareness and market share</p></div>
    }
]
const SkyPetJumbo=()=>
<Jumbotron>
    <Grid>
        <p><span className="brand">S</span><span className="big">KYPET</span></p>
        <p className="jumbo-sub">Keeping pet ownership simple, fun, and playful for pet loving families.</p>
    </Grid>
</Jumbotron>

const SkyPetFooter=({team})=>
<div className="myFooter">
    <Grid>
        <Row>
            <Col md={4}>
                <h2>Contact Us</h2>
                {team.map((value, index)=>{
                    return(<p key={index} className="lead"><a href={value.linkedIn}>{value.name}</a></p>);

                })}
            </Col>
            <Col md={4}></Col>
            <Col md={4}></Col>
        </Row>
    </Grid>
</div>

const Description=()=>
<div className="section">
    <Grid className="text-center">
        <p className='lead '>Pet data is generated by veterinarians, pet service providers, and pet owners.  This data is siloed, making it difficult to create a single holistic view of your pet. This current state of pet data creates frustrations for pet owners and and the pet industry.  SkyPet solves this by providing immutable, secure, and open pet data storage on the Ethereum blockchain.</p>
    </Grid>
</div>

const AboutSkyPet=()=>
<Grid className="section">
    <Row>
        <Col md={7}>
            <p className="lead">
                Many pets have a microchip implant which is typically scanned by veterinarians or other pet service providers to ensure uniqueness and verify addresses.  SkyPet leverages this pet ID to both identify and encrypt the data on the Ethereum blockchain.  The pet itself becomes the key to unlock the data pertaining to that pet on the blockchain.  This ensures that the data is secure while allowing relevant information to be accessible to the appropriate stakeholders.
                <br/><br/>
                This process is governed by a secure smart contract.  By the nature of the Ethereum blockchain the smart contract is immutable and does not depend on SkyPet’s financial well being; ensuring longevity of both the data and any applications written to interact with the smart contract.  Pet stakeholders can interact with the smart contract in an easy to use, centralized manner. 
            </p>
        </Col>
        <Col md={5}>
            <img className="img-responsive" src="media/iot.png"/>
        </Col>
    </Row>
</Grid>

class HowItHelps extends Component{//({title, text, imgClass})=>
    constructor(props){
        super(props);
        this.state={
            overlay:false
        }
    }
    toggleOverlay=()=>{
        this.setState({
            overlay:!this.state.overlay
        })
    }
    render(){
        //const header=<div style={{background:overlayStyle.backgroundNone, minHeight:'200px'}}></div>
        return(
        <Col md={4}>
            {this.state.overlay?<Panel onClick={this.toggleOverlay} className={`${this.props.imgClass} panel-full-desc text-mid`}>
                {this.props.description}
            </Panel>:
            <Panel onClick={this.toggleOverlay} className={`${this.props.imgClass} panel-transparent`} header={" "}  >
                <h3 className="text-bright">{this.props.title}</h3>
                <p className="text-mid">{this.props.text}</p>
            </Panel>
            }
            
        </Col>);
    }
}
const HelpSection=()=>
<div className="section2">
    <Grid>
        <Row>
            {WhoItHelps.map((value,index)=>{
                return(<HowItHelps key={index} text={value.text} title={value.title}  imgClass={value.imgClass} description={value.description}/>)
            })}
            
        </Row>
    </Grid>
</div>

const TeamMember=({imgClass, showDescription, description, name, onClick})=>
<Col xs={12} md={12} lg={6}>
    <Panel onClick={onClick} className={`${imgClass}  ${showDescription?"filter-avatar":"avatar"} `} header={name}>
        {showDescription?description:""}
    </Panel>
</Col>
const ItemDescription=({title, text})=>
<p><Label bsStyle="primary">{title}</Label>  {text}</p>
const team=[
    {
        name:"Daniel Stahl",
        imgClass:"danielStahl",
        linkedIn:"https://www.linkedin.com/in/daniel-stahl-6685a52a",
        description:<div>
            <h3>Point Person for Technology and Co-Founder</h3>
            <ItemDescription title="Blockchain Developer" text="Hashes his Sidechain like it's his Mainchain"/>
            <ItemDescription title="IT and PetTech Visionary" text="Took this gig for the cache"/>
            <ItemDescription title="Big Data Professional" text="Daniel puts the “D” in data"/>
            <ItemDescription title="Risk Manager" text="Proves you CAN manage what you can’t measure"/>
            <ItemDescription title="Quant Developer" text="I party, but I don’t drink and derive"/>
        </div>,
        showDescription:false
    },
    {
        name:"Thomas Nguyen",
        imgClass:"thomasNguyen",
        linkedIn:"https://www.linkedin.com/in/tomnguyen704",
        description:<div>
            <h3>Point Person for Design and Co-Founder</h3>
            <ItemDescription title="User Experience Architect" text="There is no spoon"/>
            <ItemDescription title="Full Stack Web Developer" text="PetTech: {SkyPet : Blockchain}"/>
            <ItemDescription title="Big Data Professional" text="Discreet programer looking for actionable analytics"/>
            <ItemDescription title="Project Manager" text="Three words: Fast, Cheap, Good"/>
        </div>,
        showDescription:false
    },
    {
        name:"Chris Kennedy",
        imgClass:"chrisKennedy",
        linkedIn:"https://www.linkedin.com/in/christopherbkennedy",
        description:<div>
            <h3>Point Person for Strategy and Co-Founder</h3>
            <ItemDescription title="Resident MBA" text='“The main thing is to keep the main thing the main thing” Covey'/>
            <ItemDescription title="Nuclear Engineer" text="PetTech is part of Christopher’s post-nuclear fallout plan"/>
            <ItemDescription title="Big Data Professional" text='A programmer, a nuclear engineer, and a MBA walk into a bar'/>
            <ItemDescription title="Faculty at a Distinguished University" text='Assiduous adjunct moonlighting at SkyPet'/>
            <ItemDescription title="Quant Developer" text='Quants never die, they just experience transformation'/>
        </div>,
        showDescription:false
    },
    {
        name:"Aaron Bridgers",
        imgClass:"aaronBridgers",
        linkedIn:"https://www.linkedin.com/in/aaron-bridgers-cfa-frm-cia-512b8b9",
        description:<div>
            <h3>Point Person for Finance & Assurance and Co-Founder</h3>
             <ItemDescription title="Experienced Executive" text='Not doing this gig for the cash'/>
             <ItemDescription title="Former Institutional Investor" text="I’ll see your risk and raise you my reward"/>
             <ItemDescription title="Big Data Professional" text="NoSQL is SQL"/>
             <ItemDescription title="Accomplished Team Builder" text='“By their own volition” is overrated'/>
             <ItemDescription title="Expert in Finance" text='Principle interest is principal and interest'/>
        </div>,
        showDescription:false
    }
];


class AboutTeam extends Component{
    constructor(props){
        super(props);
        console.log(team);
        this.state={
            team:team
        }
    }
    onClick=(selectedMemberIndex)=>{
        //var myState=this.state;
        //this.state[index].
        this.setState({
            team:this.state.team.map((value, index)=>{
            index===selectedMemberIndex?value.showDescription=true:value.showDescription=false;
            return value;
        })});
    }
    render(){
        return(
            <Grid>
                <Row>
                    {team.map((value, index)=>{
                        return(<TeamMember key={index} imgClass={value.imgClass} showDescription={value.showDescription} description={value.description} name={value.name} onClick={()=>{this.onClick(index)}}/>)
                    })}
                </Row>
            </Grid>
        )
    }
}

const App =()=>
<div>
    <SkyPetJumbo/>
    <Description/>
    <HelpSection/>
    <AboutSkyPet/>
    <AboutTeam/>
    <SkyPetFooter team={team}/>
</div>
export default App;