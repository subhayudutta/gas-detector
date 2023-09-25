import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import Swal from 'sweetalert2';

const Home = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const [gasData, setGasData] = useState(null);

    useEffect(() => {
        const database = getDatabase();
        const gasRef = ref(database, 'GasData');

        onValue(gasRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data);
            if (!!data) {
                setGasData(data);
                
            }
        });
    }, []);

    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
          
          Swal.fire({
            icon: 'error',
            title: 'Oops the concentration of gases are increasing...',
            text: 'Evacuate the place right now!',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
          });
        }, 2 * 60 * 1000); // 2 mins
    
        
        return () => {
          clearTimeout(timeoutId);
        };
      }, []);

    return (
        <>

<section data-bs-version="5.1" class="menu menu2 cid-tP2PVGIG6B" once="menu" id="menu2-2">
    
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
        <div class="container-fluid">
            <div class="navbar-brand">
                <span class="navbar-logo">
                    
                        <img src="assets/images/logo-1.webp" alt="Team Soul" style={{height: "3rem"}}/>
                    
                </span>
                <span class="navbar-caption-wrap"><a class="navbar-caption text-black display-7" href="#">Team Soul</a></span>
            </div>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true"><li class="nav-item"><a class="nav-link link text-black display-4" href="#">Welcome &nbsp;{user && <span>{user.email}</span>}</a></li>
                    </ul>
                
                <div class="navbar-buttons mbr-section-btn"><button class="btn btn-primary display-4" href="#" onClick={handleLogout}>Logout</button></div>
            </div>
        </div>
    </nav>
</section>

        <section data-bs-version="5.1" class="features20 cid-tP3isLzhNG" id="features20-m">

    
        {gasData ? (
    
    
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-12 col-lg-9">
            <div class="card-wrapper pb-4">
                <div class="card-box align-center">
                    <h4 class="card-title mbr-fonts-style mb-4 display-2">
                        <strong>Sensor Data</strong></h4>
                    <p class="mbr-text mbr-fonts-style mb-4 display-7">
                    The sewage gas detection device is equipped with sensors for monitoring CO, H2S, SO2, Methane, and Ammonia levels. In the event of hazardous gas emissions, it triggers alarms, tracks the source, and calculates safe evacuation times, ensuring the safety of personnel and the environment.</p>
                    
                </div>
            </div>
        </div>
        <div class="col-12 col-md-8">
            <div class="item mbr-flex">
                <div class="icon-box">
                    <span class="step-number mbr-fonts-style display-5">1</span>
                </div>
                <div class="text-box">
                    <h3 class="icon-title card-title mbr-black mbr-fonts-style display-7"><strong>Gas Sensors</strong></h3>
                    <h4 class="icon-text mbr-black mbr-fonts-style display-4"><span style={{color:"red",fontSize:"20px"}}><i class="bi bi-droplet-half"></i> Carbon Monoxide Gas (CO) :</span> {gasData.CO} ppm <br/><br/><span style={{color:"red",fontSize:"20px"}}><i class="bi bi-droplet-fill"></i> Hydrogen Sulphide Gas (H2S) :</span> {gasData.H2S}&nbsp;ppm <br/><br/><span style={{color:"red",fontSize:"20px"}}><i class="bi bi-browser-firefox"></i> Sulphur Dioxide Gas (SO2) :</span> {gasData.SO2} ppm <br/><br/><span style={{color:"red",fontSize:"20px"}}><i class="bi bi-fire"></i> Methane Gas :</span> {gasData.Methane} ppm <br/><br/><span style={{color:"red",fontSize:"20px"}}><i class="bi bi-eyedropper"></i> Ammonia Gas (NH3) :</span> {gasData.Ammonia} ppm </h4>
                </div>
            </div>
            <div class="item mbr-flex">
                <div class="icon-box">
                    <span class="step-number mbr-fonts-style display-5">2</span>
                </div>
                <div class="text-box">
                    <h3 class="icon-title card-title mbr-black mbr-fonts-style display-7">
                        <strong>Temperature</strong></h3>
                    <h4 class="icon-text mbr-black mbr-fonts-style display-4"><span style={{color:"blue",fontSize:"20px"}}><i class="bi bi-thermometer"></i> Current Temperature :</span>&nbsp;20°C</h4>
                </div>
            </div>
            <div class="item mbr-flex">
                <div class="icon-box">
                    <span class="step-number mbr-fonts-style display-5">3</span>
                </div>
                <div class="text-box">
                    <h3 class="icon-title card-title mbr-black mbr-fonts-style display-7">
                        <strong>Time</strong></h3>
                    <h4 class="icon-text mbr-black mbr-fonts-style display-4"><span style={{color:"#14A76C",fontSize:"20px"}}><i class="bi bi-stopwatch"></i> Current Time :</span> {gasData.Time}<br/><br/><span style={{color:"#14A76C",fontSize:"20px"}}><i class="bi bi-stopwatch-fill"></i> Time Left for Evacuation :&nbsp;</span>{gasData.Evacuate}<br/></h4>
                </div>
            </div>
            <div class="item mbr-flex last">
                <div class="icon-box">
                    <span class="step-number mbr-fonts-style display-5">4</span>
                </div>
                <div class="text-box">
                    <h4 class="icon-title card-title mbr-black mbr-fonts-style display-7">
                        <strong>Alarm</strong></h4>
                    <h5 class="icon-text mbr-black mbr-fonts-style display-4"><span style={{color:"#8860D0",fontSize:"20px"}}><i class="bi bi-bell-fill"></i> Manual Alarm Generator :&nbsp;</span><button class="ww">Danger</button><br/></h5>
                </div>
            </div>

        </div>
    </div>
</div>
) : (
    <p style={{textAlign:"center",fontSize:"30px", padding:"50px 0px"}}><i class="bi bi-arrow-clockwise"></i> &nbsp; Loading...</p>
)} 
</section>

        </>
    );
};

export default Home;
