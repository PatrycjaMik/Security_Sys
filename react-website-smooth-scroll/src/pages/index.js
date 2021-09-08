import React, {useState} from 'react';
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import {homeObjOne, homeObjTwo, homeObjThree} from "../components/InfoSection/Data";


const Home = () => {
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Slider />
            <Sidebar />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services />
            <InfoSection {...homeObjThree}/>

        </>
    );
}

export default Home;